import { Schema } from "mongoose";
import { IPaginationResponse } from "./_paginationType";
import { IUser } from "./_userType";
export interface IActivity {
    _id: Schema.Types.ObjectId;
    id: string;
    type: string;
    action: string;
    author?: {
        id: string;
        data?: IUser;
    };
    target?: {
        id: string;
        data?: any;
    };
    targetPath: string;
    changes?: {
        before: any;
        after: any;
    };
    params?: any;
    updatedAt?: Date;
    createdAt: Date;
}
export type IActivityPaginationResponse = IPaginationResponse<IActivity>;
export type IActivityCreateProps = Omit<IActivity, "id" | "_id" | "createdAt" | "updatedAt">;
//# sourceMappingURL=_activityType.d.ts.map