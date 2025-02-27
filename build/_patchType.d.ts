import { Schema } from "mongoose";
import { IPaginationResponse } from "./_paginationType";
import { IPatchStatus, IPatchType, ITargetPath } from "./utils";
export interface IPatch<T = any, Type = IPatchType> {
    _id: Schema.Types.ObjectId;
    id?: string;
    ref?: {
        id: string;
    };
    type: Type;
    status: IPatchStatus;
    target: {
        id: string;
    };
    targetPath: ITargetPath;
    description?: string;
    reason?: string;
    original: T;
    changes: T;
    isChangesUpdated: boolean;
    author: {
        id: string;
    };
    moderator?: {
        id: string;
    };
    createdAt: Date;
    updatedAt: Date;
}
export type IPatchOptionnal<T = any, Type = IPatchType> = Type extends "CREATE" ? Pick<IPatch<T>, 'id' | 'type' | 'target' | 'targetPath' | 'original' | 'description' | 'author' | 'ref'> : Type extends "UPDATE" ? Pick<IPatch<T>, 'id' | 'type' | 'target' | 'targetPath' | 'original' | 'description' | 'changes' | 'author' | 'ref'> : Type extends "MODERATOR_CREATE" ? Pick<IPatch<T>, 'id' | 'type' | 'status' | 'target' | 'targetPath' | 'original' | 'description' | 'moderator' | 'author' | 'ref'> : Type extends "MODERATOR_UPDATE" ? Pick<IPatch<T>, 'id' | 'type' | 'status' | 'target' | 'targetPath' | 'original' | 'description' | 'changes' | 'moderator' | 'author' | 'ref'> : IPatch<T, Type>;
export type IPatchPaginationResponse = IPaginationResponse<IPatch>;
//# sourceMappingURL=_patchType.d.ts.map