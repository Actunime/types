import { MediaGenresSelection, MediaParentLabelSelection, MediaSourceSelection, MediaStatusSelection } from "./utils";
export interface IDefaultSite {
    medias: {
        genres: typeof MediaGenresSelection;
        status: typeof MediaStatusSelection;
        source: typeof MediaSourceSelection;
        parent: typeof MediaParentLabelSelection;
    };
}
//# sourceMappingURL=_defaultSite.d.ts.map