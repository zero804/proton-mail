import { Label } from 'proton-shared/lib/interfaces/Label';

import { Recipient } from './address';

export interface Conversation {
    ID?: string;
    Subject?: string;
    Size?: number;
    Time?: number;
    ContextTime?: number;
    NumMessages?: number;
    Senders?: Recipient[];
    Recipients?: Recipient[];
    NumUnread?: number;
    Labels?: Label[];
    LabelIDs?: string[];
    Order?: number;
    NumAttachments?: number;
    ContextNumAttachments?: number;
    ExpirationTime?: number;
}
