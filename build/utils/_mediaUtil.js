"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateToZod = exports.dateTimeToZod = exports.MediaGenresSelection = exports.MediaGenresArray = exports.MediaGenresObj = exports.MediaParentLabelSelection = exports.MediaParentLabelArray = exports.MediaParentLabelObj = exports.MediaStatusSelection = exports.MediaStatusArray = exports.MediaStatusObj = exports.MediaSourceSelection = exports.MediaSourceArray = exports.MediaSourceObj = void 0;
exports.MediaSourceObj = {
    ORIGINAL: {
        label: "Original",
        description: "A été créé de manière originale et ne se base sur aucune œuvre préexistante.",
    },
    MANGA: {
        label: "Manga",
        description: "Basé sur un manga japonais.",
    },
    MANHWA: {
        label: "Manhwa",
        description: "Basé sur un manhwa, une bande dessinée sud-coréenne.",
    },
    MANHUA: {
        label: "Manhua",
        description: "Basé sur un manhua, une bande dessinée chinoise.",
    },
    LIGHT_NOVEL: {
        label: "Light novel",
        description: "Basé sur un light novel, un type de roman japonais destiné aux jeunes adultes.",
    },
    VISUAL_NOVEL: {
        label: "Visual novel",
        description: "Basé sur un visual novel, un type de jeu vidéo interactif japonais qui utilise principalement du texte narratif.",
    },
    WEB_NOVEL: {
        label: "Web novel",
        description: "Basé sur un web novel, un roman publié en ligne.",
    },
    GAME: {
        label: "Jeu video",
        description: "Basé sur un jeu vidéo.",
    },
    NOVEL: {
        label: "Roman",
        description: "Basé sur un roman.",
    },
    ANIME: {
        label: "Anime",
        description: "Basé sur une autre série d'anime.",
    },
};
exports.MediaSourceArray = Object.keys(exports.MediaSourceObj);
exports.MediaSourceSelection = exports.MediaSourceArray.map((key) => ({
    label: exports.MediaSourceObj[key].label,
    description: exports.MediaSourceObj[key].description,
    value: key,
}));
// export const MediaFormatObj = {
//   SERIE: {
//     label: "Série",
//     description: "Diffusé en épisodes réguliers.",
//   },
//   FILM: {
//     label: "Film",
//     description: "Produit comme un long métrage.",
//   },
//   ONA: {
//     label: "ONA",
//     description: "Diffusé directement sur Internet.",
//   },
//   OVA: {
//     label: "OVA",
//     description: "Destiné à la vente directe aux consommateurs.",
//   },
//   SPECIAL: {
//     label: "Spécial",
//     description:
//       "Un épisode unique ou une série d'épisodes qui ne fait pas partie de la diffusion régulière d'une série.",
//   },
//   TV_SHORT: {
//     label: "TV Short",
//     description:
//       "Diffusé en épisodes courts, généralement moins de 15 minutes chacun.",
//   },
// };
// export type IMediaFormat = keyof typeof MediaFormatObj;
// export const MediaFormatArray = Object.keys(MediaFormatObj) as IMediaFormat[] &
// [string, ...string[]];
// export const MediaFormatSelection = MediaFormatArray.map((key) => ({
//   label: MediaFormatObj[key].label,
//   description: MediaFormatObj[key].description,
//   value: key,
// }));
exports.MediaStatusObj = {
    AIRING: {
        label: "En cours",
        value: "AIRING",
        description: "L'anime est actuellement en cours de diffusion.",
    },
    PAUSED: {
        label: "En pause",
        value: "PAUSED",
        description: "La diffusion de l'anime est temporairement interrompue.",
    },
    ENDED: {
        label: "Terminé",
        value: "ENDED",
        description: "L'anime a terminé sa diffusion.",
    },
    STOPPED: {
        label: "Arrêté",
        value: "STOPPED",
        description: "La diffusion de l'anime a été arrêtée avant la fin prévue.",
    },
    POSTONED: {
        label: "Reporté",
        value: "POSTONED",
        description: "La diffusion de l'anime a été reportée à une date ultérieure.",
    },
    SOON: {
        label: "Bientôt",
        value: "SOON",
        description: "L'anime commencera à être diffusé prochainement.",
    },
    any: {
        label: "Inconnu",
        value: "any",
        description: "Le statut de diffusion de l'anime est inconnu.",
    },
};
exports.MediaStatusArray = Object.keys(exports.MediaStatusObj);
exports.MediaStatusSelection = exports.MediaStatusArray.map((key) => ({
    label: exports.MediaStatusObj[key].label,
    description: exports.MediaStatusObj[key].description,
    value: key,
}));
exports.MediaParentLabelObj = {
    SEQUEL: {
        label: "Suite directe",
        description: "C’est la continuation directe de l’histoire principale.",
    },
    SPIN_OFF: {
        label: "Spin-off",
        description: "Se concentre sur un personnage secondaire ou un aspect de l’univers de la série originale. L’intrigue est généralement indépendante de l’histoire principale.",
    },
    ALTERNATIVE: {
        label: "Suite alternative",
        description: "Propose une version différente de l’histoire originale, souvent avec des changements majeurs dans l’intrigue, les personnages ou le monde.",
    },
    REBOOT: {
        label: "Réadaptation",
        description: "Reprend l’histoire originale mais la raconte d’une manière nouvelle, souvent avec des changements dans le style, le ton ou l’interprétation des personnages.",
    },
    FILM: {
        label: "Film",
        description: "Le film peut être une continuation de l’histoire, une histoire alternative, ou une récapitulation de la série avec des scènes supplémentaires.",
    },
};
exports.MediaParentLabelArray = Object.keys(exports.MediaParentLabelObj);
exports.MediaParentLabelSelection = exports.MediaParentLabelArray.map((key) => ({
    label: exports.MediaParentLabelObj[key].label,
    description: exports.MediaParentLabelObj[key].description,
    value: key,
}));
exports.MediaGenresObj = {
    ACTION: {
        label: "Action",
        value: "ACTION",
        description: "Sa bouge beaucoup.",
    },
    AVENTURE: {
        label: "Aventure",
        value: "AVENTURE",
        description: "Suiviez les aventures des personnage(s).",
    },
    COMEDIE: {
        label: "Comédie",
        value: "COMEDIE",
        description: "Très drôle ou du moin c'est le but.",
    },
    DRAME: {
        label: "Drame",
        value: "DRAME",
        description: "Drama.",
    },
    FANTAISIE: {
        label: "Fantaisie",
        value: "FANTAISIE",
        description: "S'éloigner de la réalité.",
    },
    FANTASTIQUE: {
        label: "Fantastique",
        value: "FANTASTIQUE",
        description: "Le monde est fantastique.",
    },
    HORREUR: {
        label: "Horreur",
        value: "HORREUR",
        description: "Le but c'est d'avoir peur.",
    },
    ROMANCE: {
        label: "Romance",
        value: "ROMANCE",
        description: "Romance.",
    },
    SCI_FI: {
        label: "Sci-fi",
        value: "SCI_FI",
        description: "Science-fiction.",
    },
    SPORTS: {
        label: "Sports",
        value: "SPORTS",
        description: "Un sport est le thème principal de l'histoire.",
    },
    THRILLER: {
        label: "Thriller",
        value: "THRILLER",
        description: "Le but c'est de faire peur.",
    },
    MECHA: {
        label: "Mecha",
        value: "MECHA",
        description: "Des personnages utilisent des robots et des véhicules militaires.",
    },
    MYSTERE: {
        label: "Mystère",
        value: "MYSTERE",
        description: "Des énigmes ou des mystères a résoudres.",
    },
    PSYCHOLOGIQUE: {
        label: "Psychologique",
        value: "PSYCHOLOGIQUE",
        description: "Se concentre sur les états émotionnels intenses des personnages et sur la représentation de leurs pensées et de leur psychologie.",
    },
    ISEKAI: {
        label: "Isekai",
        value: "ISEKAI",
        description: "Truck-kun.",
    },
    HAREM: {
        label: "Harem",
        value: "HAREM",
        description: "Personnage masculin qui est entouré de personnages féminin.",
    },
    REVERSE_HAREM: {
        label: "Reverse Harem",
        value: "REVERSE_HAREM",
        description: "Personnage féminin qui est entouré de personnages masculin.",
    },
    ECCHI: {
        label: "Ecchi",
        value: "ECCHI",
        description: "Des personnages ont des situations érotiques explicites.",
    },
    SLICE_OF_LIFE: {
        label: "Slice of Life",
        value: "SLICE_OF_LIFE",
        description: "Des personnages vivent des histoires quotidiennes.",
    },
    YAOI: {
        label: "Yaoi",
        value: "YAOI",
        description: "Masculin + Masculin",
    },
    YURI: {
        label: "Yuri",
        value: "YURI",
        description: "Feminin + Feminin",
    },
    SHOUNEN: {
        label: "Shōnen",
        value: "SHOUNEN",
        description: "",
    },
    SEINEN: {
        label: "Seinen",
        value: "SEINEN",
        description: "",
    },
    SHOJO: {
        label: "Shōjo",
        value: "SHOJO",
        description: "",
    },
    JOSEI: {
        label: "Josei",
        value: "JOSEI",
        description: "",
    },
    KODOMOMUKE: {
        label: "Kodomo Mukashi",
        value: "KODOMOMUKE",
        description: "",
    },
};
exports.MediaGenresArray = Object.keys(exports.MediaGenresObj);
exports.MediaGenresSelection = exports.MediaGenresArray.map((key) => ({
    label: exports.MediaGenresObj[key].label,
    description: exports.MediaGenresObj[key].description,
    value: key,
}));
const dateTimeToZod = (date) => {
    if (!date)
        return undefined;
    if (typeof date === "string")
        date = new Date(date);
    const formatedYear = new Intl.DateTimeFormat("fr-FR", {
        timeZone: "Europe/Paris",
        year: "numeric",
    }).format(date);
    const formatedMonth = new Intl.DateTimeFormat("fr-FR", {
        timeZone: "Europe/Paris",
        month: "2-digit",
    }).format(date);
    const formatedDay = new Intl.DateTimeFormat("fr-FR", {
        timeZone: "Europe/Paris",
        day: "2-digit",
    }).format(date);
    const formatedTime = new Intl.DateTimeFormat("fr-FR", {
        timeZone: "Europe/Paris",
        hour: "2-digit",
        minute: "2-digit",
    }).format(date);
    const formated = `${formatedYear}-${formatedMonth}-${formatedDay}T${formatedTime}`;
    return formated;
    // return date.toISOString().split(".")[0];
};
exports.dateTimeToZod = dateTimeToZod;
const dateToZod = (date) => {
    if (!date)
        return undefined;
    if (typeof date === "string")
        date = new Date(date);
    const formatedYear = new Intl.DateTimeFormat("fr-FR", {
        timeZone: "Europe/Paris",
        year: "numeric",
    }).format(date);
    const formatedMonth = new Intl.DateTimeFormat("fr-FR", {
        timeZone: "Europe/Paris",
        month: "2-digit",
    }).format(date);
    const formatedDay = new Intl.DateTimeFormat("fr-FR", {
        timeZone: "Europe/Paris",
        day: "2-digit",
    }).format(date);
    const formated = `${formatedYear}-${formatedMonth}-${formatedDay}`;
    return formated;
};
exports.dateToZod = dateToZod;
