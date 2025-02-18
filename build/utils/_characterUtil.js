"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterSpeciesSelection = exports.CharacterSpeciesArray = exports.CharacterSpeciesObj = exports.CharacterGenderSelection = exports.CharacterGenderArray = exports.CharacterGenderObj = exports.CharacterRoleSelection = exports.CharacterRoleArray = exports.CharacterRoleObj = void 0;
exports.CharacterRoleObj = {
    PRINCIPAL: {
        label: "Principal",
        description: "Personnage principal de l'histoire.",
    },
    SECONDAIRE: {
        label: "Secondaire",
        description: "Personnage secondaire de l'histoire.",
    },
    FIGURANT: {
        label: "Figurant",
        description: "Personnage qui apparaît dans l'histoire mais n'a pas d'influence directe sur celle-ci.",
    },
    ANTAGONISTE: {
        label: "Antagoniste",
        description: "Personnage qui est l'ennemi principal de l'histoire.",
    },
    SOUTIEN: {
        label: "Soutien",
        description: "Personnage qui apporte de l'aide et du soutien au personnage principal.",
    },
};
exports.CharacterRoleArray = Object.keys(exports.CharacterRoleObj);
exports.CharacterRoleSelection = exports.CharacterRoleArray.map((key) => ({
    label: exports.CharacterRoleObj[key].label,
    description: exports.CharacterRoleObj[key].description,
    value: key,
}));
exports.CharacterGenderObj = {
    MASCULIN: {
        label: "Masculin",
        description: "Personnage qui a une apparence physique traditionnellement associée à la masculinité.",
    },
    FEMININ: {
        label: "Féminin",
        description: "Personnage qui a une apparence physique traditionnellement associée à la feminité.",
    },
    NEUTRE: {
        label: "Neutre",
        description: "Personnage dont l'apparence physique n'est pas forcément associée à la masculinité ou à la féminité, ou qui répresentent des caractéristiques des deux genres.",
    },
    TRANSGENRE: {
        label: "Transgenre",
        description: "Personnage qui ne se identifie pas avec le genre traditionnel associé à son apparence physique.",
    },
    NON_BINAIRE: {
        label: "Non binaire",
        description: "Personnage qui ne se identifie pas avec les genres traditionnels masculin ou féminin, mais qui ne s'identifie pas non plus comme neutre.",
    },
    GENRE_FLUIDE: {
        label: "Genre fluide",
        description: "Personnage dont l'identité de genre est en constante évolution et qui ne se situe pas dans l'une des catégories traditionnelles.",
    },
    AUTRE: {
        label: "Autre",
        description: "Personnage qui ne se trouve pas dans la liste ci-dessus.",
    },
};
exports.CharacterGenderArray = Object.keys(exports.CharacterGenderObj);
exports.CharacterGenderSelection = exports.CharacterGenderArray.map((key) => ({
    label: exports.CharacterGenderObj[key].label,
    description: exports.CharacterGenderObj[key].description,
    value: key,
}));
exports.CharacterSpeciesObj = {
    HUMAIN: {
        label: "Humain",
        description: "Personnage qui a une apparence physique associée à un humain, avec des caractéristiques comme des yeux, des cheveux, une peau claire, des mains et des pieds humains, etc.",
    },
    ELFE: {
        label: "Elfe",
        description: "Personnage avec des caractéristiques physiques associées à l'elfe.",
    },
    NAIN: {
        label: "Nain",
        description: "Personnage avec des caractéristiques physiques associées à un nain.",
    },
    LEZARD: {
        label: "Lézard",
        description: "Personnage avec des caractéristiques physiques associées à un lézard.",
    },
    DRAGON: {
        label: "Dragon",
        description: "Personnage avec des caractéristiques physiques associées à un dragon.",
    },
    ORC: {
        label: "Orc",
        description: "Personnage avec des caractéristiques physiques associées à l'orc.",
    },
    AUTRE: {
        label: "Autre",
        description: "Personnage dont la catégorie ne correspond pas à celles proposées.",
    },
};
exports.CharacterSpeciesArray = Object.keys(exports.CharacterSpeciesObj);
exports.CharacterSpeciesSelection = exports.CharacterSpeciesArray.map((key) => ({
    label: exports.CharacterSpeciesObj[key].label,
    description: exports.CharacterSpeciesObj[key].description,
    value: key,
}));
