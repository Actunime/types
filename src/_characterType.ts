import { ICharacterGender, ICharacterSpecies } from "./utils/_characterUtil";
import { IImage } from "./_imageType";
import { IMediaBase } from "./_mediaType";
import type { IPaginationResponse } from "./_paginationType";
import type { IPerson } from "./_personType";

export interface ICharacter extends IMediaBase {
  name: { default: string; alias: { content: string }[] };
  age: number;
  birthDate: Date | string;
  gender: ICharacterGender;
  species: ICharacterSpecies;
  bio: string;
  avatar?: {
    id: string;
    data?: IImage; // Virtual
  };
  actors: {
    id: string;
    data?: IPerson; // Virtual
  }[];
}

export type ICharacterPaginationResponse = IPaginationResponse<ICharacter>;
