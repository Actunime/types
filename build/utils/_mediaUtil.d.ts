export declare const MediaSourceObj: {
    ORIGINAL: {
        label: string;
        description: string;
    };
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
    VISUAL_NOVEL: {
        label: string;
        description: string;
    };
    WEB_NOVEL: {
        label: string;
        description: string;
    };
    GAME: {
        label: string;
        description: string;
    };
    NOVEL: {
        label: string;
        description: string;
    };
    ANIME: {
        label: string;
        description: string;
    };
};
export type IMediaSource = keyof typeof MediaSourceObj;
export declare const MediaSourceArray: IMediaSource[] & [string, ...string[]];
export declare const MediaSourceSelection: {
    label: string;
    description: string;
    value: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "ORIGINAL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME";
}[];
export declare const MediaFormatObj: {
    SERIE: {
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
    TV_SHORT: {
        label: string;
        description: string;
    };
};
export type IMediaFormat = keyof typeof MediaFormatObj;
export declare const MediaFormatArray: IMediaFormat[] & [string, ...string[]];
export declare const MediaFormatSelection: {
    label: string;
    description: string;
    value: "ONA" | "OVA" | "SERIE" | "FILM" | "SPECIAL" | "TV_SHORT";
}[];
export declare const MediaStatusObj: {
    AIRING: {
        label: string;
        value: string;
        description: string;
    };
    PAUSED: {
        label: string;
        value: string;
        description: string;
    };
    ENDED: {
        label: string;
        value: string;
        description: string;
    };
    STOPPED: {
        label: string;
        value: string;
        description: string;
    };
    POSTONED: {
        label: string;
        value: string;
        description: string;
    };
    SOON: {
        label: string;
        value: string;
        description: string;
    };
    any: {
        label: string;
        value: string;
        description: string;
    };
};
export type IMediaStatus = keyof typeof MediaStatusObj;
export declare const MediaStatusArray: IMediaStatus[] & [string, ...string[]];
export declare const MediaStatusSelection: {
    label: string;
    description: string;
    value: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
}[];
export declare const MediaParentLabelObj: {
    SEQUEL: {
        label: string;
        description: string;
    };
    SPIN_OFF: {
        label: string;
        description: string;
    };
    ALTERNATIVE: {
        label: string;
        description: string;
    };
    REBOOT: {
        label: string;
        description: string;
    };
    FILM: {
        label: string;
        description: string;
    };
};
export type IMediaParentLabel = keyof typeof MediaParentLabelObj;
export declare const MediaParentLabelArray: IMediaParentLabel[] & [string, ...string[]];
export declare const MediaParentLabelSelection: {
    label: string;
    description: string;
    value: "FILM" | "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT";
}[];
export declare const MediaGenresObj: {
    ACTION: {
        label: string;
        value: string;
        description: string;
    };
    AVENTURE: {
        label: string;
        value: string;
        description: string;
    };
    COMEDIE: {
        label: string;
        value: string;
        description: string;
    };
    DRAME: {
        label: string;
        value: string;
        description: string;
    };
    FANTAISIE: {
        label: string;
        value: string;
        description: string;
    };
    FANTASTIQUE: {
        label: string;
        value: string;
        description: string;
    };
    HORREUR: {
        label: string;
        value: string;
        description: string;
    };
    ROMANCE: {
        label: string;
        value: string;
        description: string;
    };
    SCI_FI: {
        label: string;
        value: string;
        description: string;
    };
    SPORTS: {
        label: string;
        value: string;
        description: string;
    };
    THRILLER: {
        label: string;
        value: string;
        description: string;
    };
    MECHA: {
        label: string;
        value: string;
        description: string;
    };
    MYSTERE: {
        label: string;
        value: string;
        description: string;
    };
    PSYCHOLOGIQUE: {
        label: string;
        value: string;
        description: string;
    };
    ISEKAI: {
        label: string;
        value: string;
        description: string;
    };
    HAREM: {
        label: string;
        value: string;
        description: string;
    };
    REVERSE_HAREM: {
        label: string;
        value: string;
        description: string;
    };
    ECCHI: {
        label: string;
        value: string;
        description: string;
    };
    SLICE_OF_LIFE: {
        label: string;
        value: string;
        description: string;
    };
    YAOI: {
        label: string;
        value: string;
        description: string;
    };
    YURI: {
        label: string;
        value: string;
        description: string;
    };
    SHOUNEN: {
        label: string;
        value: string;
        description: string;
    };
    SEINEN: {
        label: string;
        value: string;
        description: string;
    };
    SHOJO: {
        label: string;
        value: string;
        description: string;
    };
    JOSEI: {
        label: string;
        value: string;
        description: string;
    };
    KODOMOMUKE: {
        label: string;
        value: string;
        description: string;
    };
};
export type IMediaGenres = keyof typeof MediaGenresObj;
export declare const MediaGenresArray: IMediaGenres[] & [string, ...string[]];
export declare const MediaGenresSelection: {
    label: string;
    description: string;
    value: "ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE";
}[];
export declare const dateTimeToZod: (date?: Date | string) => string | undefined;
export declare const dateToZod: (date?: Date | string) => string | undefined;
//# sourceMappingURL=_mediaUtil.d.ts.map