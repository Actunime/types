export declare const MangaFormatObj: {
    MANGA: {
        label: string;
        description: string;
    };
    MANHWA: {
        label: string;
        description: string;
    };
    MANHUA: {
        label: string;
        description: string;
    };
    LIGHT_NOVEL: {
        label: string;
        description: string;
    };
    WEB_LOVEL: {
        label: string;
        description: string;
    };
    GRAPHIC_NOVEL: {
        label: string;
        description: string;
    };
    DOUJINSHI: {
        label: string;
        description: string;
    };
    ONE_SHOT: {
        label: string;
        description: string;
    };
    OTHER: {
        label: string;
        description: string;
    };
};
export type IMangaFormat = keyof typeof MangaFormatObj;
export declare const MangaFormatArray: IMangaFormat[] & [string, ...string[]];
export declare const MangaFormatSelection: {
    label: string;
    description: string;
    value: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "WEB_LOVEL" | "GRAPHIC_NOVEL" | "DOUJINSHI" | "ONE_SHOT" | "OTHER";
}[];
