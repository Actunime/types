import { Schema } from "mongoose";
import { IPaginationResponse } from "./_paginationType";
import { IImageLabel, ITargetPath } from ".";
export interface IImage {
    _id: Schema.Types.ObjectId;
    id: string;
    label: IImageLabel;
    url?: string;
    location?: string;
    target: {
        id: string;
    };
    targetPath: ITargetPath;
    isVerified?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
export type IImagePaginationResponse = IPaginationResponse<IImage>;
//# sourceMappingURL=_imageType.d.ts.map