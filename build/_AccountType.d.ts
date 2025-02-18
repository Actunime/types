import { Schema } from "mongoose";
export interface IAccount {
    _id: Schema.Types.ObjectId;
    id: string;
    user: Schema.Types.ObjectId;
    userId: string;
    email: string;
    verified: Date;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
//# sourceMappingURL=_AccountType.d.ts.map