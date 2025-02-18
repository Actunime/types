import { IUser } from "./_userType";
export interface IMessage {
    id: string;
    content: string;
    changes: {
        content: string;
        at: Date;
    }[];
    replyTo?: {
        id: string;
        data?: IMessage;
    };
    replys?: IMessage[];
    author: {
        id: string;
        data?: IUser;
    };
    target: {
        id: string;
        data?: any;
    };
    targetPath: string;
    deleted: boolean;
    deletedBy?: {
        id: string;
        data?: IUser;
    };
    deletedAt: Date;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=_messageType.d.ts.map