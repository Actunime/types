import { IImage } from "./_imageType";
import type { IMediaBase, IMediaLink } from "./_mediaType";
import type { IPaginationResponse } from "./_paginationType";

export interface IPerson extends IMediaBase {
  isGroupe: boolean;
  name: {
    first: string;
    last?: string;
    full: string;
    alias: { content: string }[];
  };
  birthDate?: Date;
  deathDate?: Date;
  bio?: string;
  avatar?: { id: string; data?: IImage };
  links?: IMediaLink[];
}

export type IPersonPaginationResponse = IPaginationResponse<IPerson>;
