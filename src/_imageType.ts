import { IPaginationResponse } from "./_paginationType";
import { IImageLabel, IMedia, IMediaDB, IMediaRelation, ITargetPath } from ".";

export interface IImageRoot {
  label: IImageLabel
  target?: IMediaRelation
  targetPath: ITargetPath;
}

export type IImage = IImageRoot & IMedia;
export interface IImageFull extends IImage {
  location: string;
  url: string;
};
export type IImageDB = IMediaDB & IImage;
export type IImagePaginationResponse = IPaginationResponse<IImage>;
