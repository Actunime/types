export declare const CharacterRoleObj: {
    PRINCIPAL: {
        label: string;
        description: string;
    };
    SECONDAIRE: {
        label: string;
        description: string;
    };
    FIGURANT: {
        label: string;
        description: string;
    };
    ANTAGONISTE: {
        label: string;
        description: string;
    };
    SOUTIEN: {
        label: string;
        description: string;
    };
};
export type ICharacterRole = keyof typeof CharacterRoleObj;
export declare const CharacterRoleArray: ICharacterRole[] & [string, ...string[]];
export declare const CharacterRoleSelection: {
    label: string;
    description: string;
    value: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN";
}[];
export declare const CharacterGenderObj: {
    MASCULIN: {
        label: string;
        description: string;
    };
    FEMININ: {
        label: string;
        description: string;
    };
    NEUTRE: {
        label: string;
        description: string;
    };
    TRANSGENRE: {
        label: string;
        description: string;
    };
    NON_BINAIRE: {
        label: string;
        description: string;
    };
    GENRE_FLUIDE: {
        label: string;
        description: string;
    };
    AUTRE: {
        label: string;
        description: string;
    };
};
export type ICharacterGender = keyof typeof CharacterGenderObj;
export declare const CharacterGenderArray: ICharacterGender[] & [string, ...string[]];
export declare const CharacterGenderSelection: {
    label: string;
    description: string;
    value: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
}[];
export declare const CharacterSpeciesObj: {
    HUMAIN: {
        label: string;
        description: string;
    };
    ELFE: {
        label: string;
        description: string;
    };
    NAIN: {
        label: string;
        description: string;
    };
    LEZARD: {
        label: string;
        description: string;
    };
    DRAGON: {
        label: string;
        description: string;
    };
    ORC: {
        label: string;
        description: string;
    };
    AUTRE: {
        label: string;
        description: string;
    };
};
export type ICharacterSpecies = keyof typeof CharacterSpeciesObj;
export declare const CharacterSpeciesArray: ICharacterSpecies[] & [string, ...string[]];
export declare const CharacterSpeciesSelection: {
    label: string;
    description: string;
    value: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
}[];
