import { IImage } from "./_imageType";
import type { IMediaBase, IMediaLink, IMediaTitle } from "./_mediaType";
import type { IPaginationResponse } from "./_paginationType";
export interface IPerson extends IMediaBase {
    isGroupe: boolean;
    name: IMediaTitle;
    birthDate?: string;
    deathDate?: string;
    description?: string;
    avatar?: {
        id: string;
        data?: IImage;
    };
    links?: IMediaLink[];
}
export type IPersonPaginationResponse = IPaginationResponse<IPerson>;
//# sourceMappingURL=_personType.d.ts.map