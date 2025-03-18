import { IPaginationResponse } from "./_paginationType";
import { IImageLabel, IMedia, IMediaDB, ITargetPath } from ".";
export interface IImageRoot {
    label: IImageLabel;
    target: {
        id: string;
    };
    targetPath: ITargetPath;
}
export type IImage = IImageRoot & IMedia;
export type IImageDB = IMediaDB & IImage;
export type IImagePaginationResponse = IPaginationResponse<IImage>;
//# sourceMappingURL=_imageType.d.ts.map