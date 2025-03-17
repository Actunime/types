import { ICharacterGender, ICharacterSpecies } from "./utils/_characterUtil";
import { IImage } from "./_imageType";
import { IDate, IMediaBase, IMediaTitle } from "./_mediaType";
import type { IPaginationResponse } from "./_paginationType";
import type { IPerson } from "./_personType";
export interface ICharacter extends IMediaBase {
    name: IMediaTitle;
    age?: number;
    birthDate?: IDate;
    gender: ICharacterGender;
    species: ICharacterSpecies;
    description?: string;
    avatar?: {
        id: string;
        data?: IImage;
    };
    actors?: {
        id: string;
        data?: IPerson;
    }[];
}
export type ICharacterPaginationResponse = IPaginationResponse<ICharacter>;
//# sourceMappingURL=_characterType.d.ts.map