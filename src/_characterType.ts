import { ICharacterGender, ICharacterSpecies } from "./utils/_characterUtil";
import { IDate, IMedia, IMediaDB, IMediaRelation, IMediaTitle } from "./_mediaType";
import type { IPaginationResponse } from "./_paginationType";
import type { IPersonRelation } from "./_personType";

export interface ICharacterRoot {
  name: IMediaTitle;
  age?: number;
  birthDate?: IDate;
  gender?: ICharacterGender;
  species?: ICharacterSpecies;
  description?: string;
  avatar?: IMediaRelation;
  actors?: IPersonRelation;
}

export type ICharacter = ICharacterRoot & IMedia
export type ICharacterDB = IMediaDB & ICharacter;
export type ICharacterPaginationResponse = IPaginationResponse<ICharacter>;
