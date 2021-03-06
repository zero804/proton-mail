import { getOriginalTo, isUnsubscribed } from 'proton-shared/lib/mail/messages';
import React from 'react';
import {
    Icon,
    Href,
    Alert,
    ConfirmModal,
    InlineLinkButton,
    generateUID,
    useNotifications,
    useAddresses,
    useLoading,
    useModals,
    useApi,
    useEventManager,
} from 'react-components';
import { MIME_TYPES } from 'proton-shared/lib/constants';
import { c } from 'ttag';
import { openNewTab } from 'proton-shared/lib/helpers/browser';
import { removeEmailAlias } from 'proton-shared/lib/helpers/email';
import { oneClickUnsubscribe, markAsUnsubscribed } from 'proton-shared/lib/api/messages';

import { MessageExtended, PartialMessageExtended, MessageExtendedWithData } from '../../../models/message';
import { useMessage } from '../../../hooks/message/useMessage';
import { useSendMessage, useSendVerifications } from '../../../hooks/composer/useSendMessage';
import { findSender } from '../../../helpers/addresses';
import { OnCompose } from '../../../hooks/composer/useCompose';

interface Props {
    message: MessageExtended;
    onCompose: OnCompose;
}

const ExtraUnsubscribe = ({ message, onCompose }: Props) => {
    const { createNotification } = useNotifications();
    const api = useApi();
    const { call } = useEventManager();
    const { createModal } = useModals();
    const [addresses] = useAddresses();
    const { addAction } = useMessage(message.localID);
    const sendVerification = useSendVerifications();
    const sendMessage = useSendMessage();
    const [loading, withLoading] = useLoading();
    const toAddress = getOriginalTo(message.data);
    const { Address: senderAddress, Name: senderName } = message.data?.Sender || {};
    const address = addresses.find(({ Email }) => removeEmailAlias(Email) === removeEmailAlias(toAddress));
    const unsubscribeMethods = message?.data?.UnsubscribeMethods || {};

    if (!Object.keys(unsubscribeMethods).length || !address) {
        return null;
    }

    const messageID = message?.data?.ID;

    const handleClick = async () => {
        if (unsubscribeMethods.OneClick) {
            await new Promise((resolve, reject) => {
                createModal(
                    <ConfirmModal
                        title={c('Title').t`Unsubscribe`}
                        onConfirm={() => resolve(undefined)}
                        onClose={reject}
                        confirm={c('Action').t`Unsubscribe`}
                    >
                        <Alert type="warning" learnMore="https://protonmail.com/support/knowledge-base/avoid-spam/">
                            {c('Info')
                                .t`A request to unsubscribe from this mailing list will be sent to the sender of the newsletter and automatically processed.`}
                        </Alert>
                    </ConfirmModal>
                );
            });
            await api(oneClickUnsubscribe(messageID));
        } else if (unsubscribeMethods.Mailto) {
            const { Subject = 'Unsubscribe', Body = 'Please, unsubscribe me', ToList = [] } = unsubscribeMethods.Mailto;
            // "address" by default, but will default to another address if this address cant send message
            const from = findSender(addresses, { AddressID: address.ID }, true);

            if (!from) {
                throw new Error('Unable to find from address');
            }

            const boldFromEmail = <strong key="email">{senderName || senderAddress}</strong>;
            const toEmails = ToList.join(', ');

            await new Promise((resolve, reject) => {
                createModal(
                    <ConfirmModal
                        title={c('Title').t`Unsubscribe`}
                        onConfirm={() => resolve(undefined)}
                        onClose={reject}
                        confirm={c('Action').t`Unsubscribe`}
                    >
                        <Alert type="warning" learnMore="https://protonmail.com/support/knowledge-base/avoid-spam/">
                            {c('Info')
                                .jt`To unsubscribe from this mailing list, an email will be sent from ${boldFromEmail} with following details as defined by the sender of the newsletter:`}
                            <div>{c('Info').t`Recipient: ${toEmails}`}</div>
                            <div>{c('Info').t`Subject: ${Subject}`}</div>
                            <div>{c('Info').t`Body: ${Body}`}</div>
                        </Alert>
                    </ConfirmModal>
                );
            });

            const inputMessage: PartialMessageExtended = {
                localID: generateUID('unsubscribe'),
                plainText: Body,
                data: {
                    AddressID: from.ID,
                    Subject,
                    Sender: { Address: from.Email, Name: from.DisplayName },
                    ToList: ToList.map((email) => ({
                        Address: email,
                        Name: email,
                    })),
                    CCList: [],
                    BCCList: [],
                    MIMEType: MIME_TYPES.PLAINTEXT,
                },
            };

            const { cleanMessage, mapSendPrefs } = await sendVerification(inputMessage as MessageExtendedWithData);
            await addAction(() => sendMessage(cleanMessage, mapSendPrefs, onCompose));
        } else if (unsubscribeMethods.HttpClient) {
            await new Promise((resolve, reject) => {
                createModal(
                    <ConfirmModal
                        title={c('Title').t`Unsubscribe`}
                        onConfirm={() => resolve(undefined)}
                        onClose={reject}
                        confirm={c('Action').t`Unsubscribe`}
                    >
                        <Alert type="warning" learnMore="https://protonmail.com/support/knowledge-base/avoid-spam/">
                            {c('Info')
                                .jt`To unsubscribe from this mailing list, you will be taken to the following URL where instructions will be provided by the sender of the newsletter:`}
                            <div className="bold">{c('Info').t`URL: ${unsubscribeMethods.HttpClient}`}</div>
                        </Alert>
                    </ConfirmModal>
                );
            });
            openNewTab(unsubscribeMethods.HttpClient);
        }
        await api(markAsUnsubscribed([messageID]));
        await call();
        createNotification({ text: c('Success').t`Mail list unsubscribed` });
    };

    return (
        <div className="bg-white-dm rounded bordered-container p0-5 mb0-5 flex flex-nowrap">
            <Icon name="email" className="flex-item-noshrink mtauto mbauto" />
            <span className="pl0-5 pr0-5 flex-item-fluid">
                <span className="mr0-25">{c('Info').t`This message is from a mailing list.`}</span>
                <Href className="inbl mr1" href="https://protonmail.com/support/knowledge-base/auto-unsubscribe">
                    {c('Info').t`Learn more`}
                </Href>
            </span>
            <span className="flex-item-noshrink flex">
                {isUnsubscribed(message.data) ? (
                    c('Status').t`Unsubscribed`
                ) : loading ? (
                    c('Status').t`Unsubscribing...`
                ) : (
                    <InlineLinkButton className="underline" onClick={() => withLoading(handleClick())}>
                        {loading ? c('Action').t`Unsubscribing` : c('Action').t`Unsubscribe`}
                    </InlineLinkButton>
                )}
            </span>
        </div>
    );
};

export default ExtraUnsubscribe;
