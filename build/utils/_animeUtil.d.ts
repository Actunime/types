export declare const AnimeFormatObj: {
    SERIE: {
        label: string;
        description: string;
    };
    SERIE_COURTE: {
        label: string;
        description: string;
    };
    FILM: {
        label: string;
        description: string;
    };
    ONA: {
        label: string;
        description: string;
    };
    OVA: {
        label: string;
        description: string;
    };
    SPECIAL: {
        label: string;
        description: string;
    };
};
export type IAnimeFormat = keyof typeof AnimeFormatObj;
export declare const AnimeFormatArray: IAnimeFormat[] & [string, ...string[]];
export declare const AnimeFormatSelection: {
    label: string;
    description: string;
    value: "ONA" | "OVA" | "SERIE" | "SERIE_COURTE" | "FILM" | "SPECIAL";
}[];
//# sourceMappingURL=_animeUtil.d.ts.map