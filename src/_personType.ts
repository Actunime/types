import { IImage } from "./_imageType";
import type { IMediaBase, IMediaDate, IMediaLink, IMediaTitle } from "./_mediaType";
import type { IPaginationResponse } from "./_paginationType";

export interface IPerson extends IMediaBase {
  isGroupe: boolean;
  name: IMediaTitle;
  birthDate?: IMediaDate;
  deathDate?: IMediaDate;
  description?: string;
  avatar?: { id: string; data?: IImage };
  links?: IMediaLink[];
}

export type IPersonPaginationResponse = IPaginationResponse<IPerson>;
