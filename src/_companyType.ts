import { IImageFull } from './_imageType';
import type {
  IDate,
  IMedia,
  IMediaDB,
  IMediaLink,
  IMediaName,
  IMediaNameInput,
  IMediaRelation,
} from './_mediaType';
import type { IPaginationResponse } from './_paginationType';

export interface ICompanyRoot {
  type: 'STUDIO' | 'PRODUCER';
  name: IMediaName;
  description?: string;
  links?: IMediaLink[];
  logo?: IMediaRelation;
  createdDate?: IDate;
}

export interface ICompanyInputRoot extends Omit<ICompanyRoot, 'name'> {
  name: IMediaNameInput;
}

export type ICompanyInput = ICompanyInputRoot & IMedia;

export type ICompany = ICompanyRoot & IMedia;
export interface ICompanyFull extends ICompany {
  logo?: IImageFull;
}
export type ICompanyDB = ICompany & IMediaDB;
export type ICompanyPaginationResponse = IPaginationResponse<ICompany>;
