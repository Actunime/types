import { ICharacterGender, ICharacterSpecies } from "./utils/_characterUtil";
import { IImage } from "./_imageType";
import { IMediaBase, IMediaDate, IMediaTitle } from "./_mediaType";
import type { IPaginationResponse } from "./_paginationType";
import type { IPerson } from "./_personType";

export interface ICharacter extends IMediaBase {
  name: IMediaTitle;
  age?: number;
  birthDate?: IMediaDate;
  gender: ICharacterGender;
  species: ICharacterSpecies;
  description?: string;
  avatar?: {
    id: string;
    data?: IImage; // Virtual
  };
  actors?: {
    id: string;
    data?: IPerson; // Virtual
  }[];
}

export type ICharacterPaginationResponse = IPaginationResponse<ICharacter>;
