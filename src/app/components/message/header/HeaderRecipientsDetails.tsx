import React from 'react';
import { c } from 'ttag';
import { Recipient } from 'proton-shared/lib/interfaces/Address';
import { ContactEmail, ContactGroup } from 'proton-shared/lib/interfaces/contacts';

import { MessageExtended } from '../../../models/message';
import { MapStatusIcons } from '../../../models/crypto';
import { recipientsToRecipientOrGroup } from '../../../helpers/addresses';
import HeaderRecipientType from './HeaderRecipientType';
import HeaderRecipientItem from './HeaderRecipientItem';
import { OnCompose } from '../../../hooks/useCompose';

interface Props {
    message: MessageExtended;
    mapStatusIcons?: MapStatusIcons;
    contacts: ContactEmail[];
    contactGroups: ContactGroup[];
    onCompose: OnCompose;
    isLoading: boolean;
}

interface ListProps {
    list: Recipient[];
    mapStatusIcons?: MapStatusIcons;
    contacts: ContactEmail[];
    contactGroups: ContactGroup[];
    onCompose: OnCompose;
    isLoading: boolean;
}

const RecipientsList = ({ list, mapStatusIcons, contacts, contactGroups, onCompose, isLoading }: ListProps) => {
    const recipientsOrGroup = recipientsToRecipientOrGroup(list, contactGroups);

    return (
        <>
            {recipientsOrGroup.map((recipientOrGroup, index) => (
                <HeaderRecipientItem
                    key={index} // eslint-disable-line react/no-array-index-key
                    recipientOrGroup={recipientOrGroup}
                    mapStatusIcons={mapStatusIcons}
                    contacts={contacts}
                    onCompose={onCompose}
                    isLoading={isLoading}
                />
            ))}
        </>
    );
};

const HeaderRecipientsDetails = ({ message, mapStatusIcons, contacts, contactGroups, onCompose, isLoading }: Props) => {
    const { ToList = [], CCList = [], BCCList = [] } = message?.data || {};

    const undisclosedRecipients = ToList.length + CCList.length + BCCList.length === 0;

    return (
        <div className="flex flex-column">
            {ToList.length > 0 && (
                <HeaderRecipientType label={c('Label').t`To:`}>
                    <RecipientsList
                        list={ToList}
                        mapStatusIcons={mapStatusIcons}
                        contacts={contacts}
                        contactGroups={contactGroups}
                        onCompose={onCompose}
                        isLoading={isLoading}
                    />
                </HeaderRecipientType>
            )}
            {CCList.length > 0 && (
                <HeaderRecipientType label={c('Label').t`CC:`}>
                    <RecipientsList
                        list={CCList}
                        mapStatusIcons={mapStatusIcons}
                        contacts={contacts}
                        contactGroups={contactGroups}
                        onCompose={onCompose}
                        isLoading={isLoading}
                    />
                </HeaderRecipientType>
            )}
            {BCCList.length > 0 && (
                <HeaderRecipientType label={c('Label').t`BCC:`}>
                    <RecipientsList
                        list={BCCList}
                        mapStatusIcons={mapStatusIcons}
                        contacts={contacts}
                        contactGroups={contactGroups}
                        onCompose={onCompose}
                        isLoading={isLoading}
                    />
                </HeaderRecipientType>
            )}
            {undisclosedRecipients && (
                <HeaderRecipientType label={c('Label').t`To:`}>
                    <HeaderRecipientItem
                        recipientOrGroup={{}}
                        contacts={contacts}
                        onCompose={onCompose}
                        isLoading={isLoading}
                    />
                </HeaderRecipientType>
            )}
        </div>
    );
};

export default HeaderRecipientsDetails;
