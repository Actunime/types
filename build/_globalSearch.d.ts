import { ITargetPath } from '.';
import { IMedia, IMediaDB } from './_mediaType';
import { IPaginationResponse } from './_paginationType';
export interface IGlobalSearchRoot {
    original: string;
    normal: string;
    alias?: string[];
    prefixes: string[];
    imageId?: string;
    path: ITargetPath;
}
export type IGlobalSearch = IGlobalSearchRoot & Omit<IMedia, 'isVerified'>;
export type IGlobalSearchDB = Omit<IMediaDB, 'updatedAt' | 'createdAt'> & IGlobalSearch;
export type IGlobalSearchPaginationResponse<T extends IGlobalSearch = IGlobalSearch> = IPaginationResponse<T>;
