import { ICharacterGender, ICharacterRole, ICharacterSpecies } from './utils/_characterUtil';
import { IDate, IMedia, IMediaDB, IMediaName, IMediaNameInput, IMediaRelation } from './_mediaType';
import type { IPaginationResponse } from './_paginationType';
import type { IPersonFull, IPersonRelation } from './_personType';
import { IImageFull } from './_imageType';
export type ICharacterRelation = IMediaRelation & {
    role?: ICharacterRole;
};
export interface ICharacterRoot {
    name: IMediaName;
    age?: number;
    birthDate?: IDate;
    gender?: ICharacterGender;
    species?: ICharacterSpecies;
    description?: string;
    avatar?: IMediaRelation;
    actors?: Omit<IPersonRelation, 'role'>[];
}
export interface ICharacterInputRoot extends Omit<ICharacterRoot, 'name'> {
    name: IMediaNameInput;
}
export type ICharacterInput = ICharacterInputRoot & IMedia;
export type ICharacter = ICharacterRoot & IMedia;
export interface ICharacterFull extends ICharacter {
    avatar?: IImageFull;
    actors?: (Omit<IPersonRelation, 'role'> & IPersonFull)[];
}
export type ICharacterDB = IMediaDB & ICharacter;
export type ICharacterPaginationResponse = IPaginationResponse<ICharacter>;
