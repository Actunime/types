import { IAnime } from "./_animeType";
import { IManga } from "./_mangaType";
import { IMediaBase, IMediaTitle } from "./_mediaType";
import { IPaginationResponse } from "./_paginationType";

export interface IGroupe extends IMediaBase {
  name: IMediaTitle;
  animes?: IAnime[]; // Virtual
  mangas?: IManga[]; // Virtual
}

export type IGroupePaginationResponse = IPaginationResponse<IGroupe>;
// export interface IGroupePaginationResponse extends IPaginationResponse<IGroupe> { }
