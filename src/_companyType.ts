import { IImage } from "./_imageType";
import type { IMediaBase, IMediaLink } from "./_mediaType";
import type { IPaginationResponse } from "./_paginationType";

export interface ICompany extends IMediaBase {
  type: "STUDIO" | "PRODUCER";
  name: string;
  description?: string;
  links?: IMediaLink[];
  logo?: { id: string; };
  createdDate?: string;
}

export type ICompanyPaginationResponse = IPaginationResponse<ICompany>;
