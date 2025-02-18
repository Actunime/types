import { Schema } from "mongoose";
import { IPaginationResponse } from "./_paginationType";
import { IImageLabel } from ".";
export interface IImage {
    _id: Schema.Types.ObjectId;
    id: string;
    label: IImageLabel;
    url: string;
    location: string;
    targetPath: string;
    isVerified: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
export type IImagePaginationResponse = IPaginationResponse<IImage>;
//# sourceMappingURL=_imageType.d.ts.map