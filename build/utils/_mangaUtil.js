"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MangaFormatSelection = exports.MangaFormatArray = exports.MangaFormatObj = void 0;
exports.MangaFormatObj = {
    MANGA: {
        label: "Manga",
        description: "Manga japonais.",
    },
    MANHWA: {
        label: "Manhwa",
        description: "Une bande dessinée coréenne.",
    },
    MANHUA: {
        label: "Manhua",
        description: "Une bande dessinée chinoise.",
    },
    LIGHT_NOVEL: {
        label: "Light novel",
        description: "Un roman japonais qui est destiné à un public adulte et qui se lit sous forme de livres.",
    },
    WEB_LOVEL: {
        label: "Web novel",
        description: "Un roman qui est publié en ligne et qui se lit dans un navigateur.",
    },
    GRAPHIC_NOVEL: {
        label: "Graphic novel",
        description: "Un livre qui contient des images en noir et blanc ou en couleur, qui raconte une histoire.",
    },
    DOUJINSHI: {
        label: "Doujinshi",
        description: "Un travail amateur de bande dessinée, généralement créé par des fans de la série ou de l'œuvre originale.",
    },
    ONE_SHOT: {
        label: "One shot",
        description: "Une histoire qui se termine après un seul chapitre ou un seul volume.",
    },
    OTHER: {
        label: "Autre",
        description: "Le type de source n'est pas disponible dans ceux proposées.",
    },
};
exports.MangaFormatArray = Object.keys(exports.MangaFormatObj);
exports.MangaFormatSelection = exports.MangaFormatArray.map((key) => ({
    label: exports.MangaFormatObj[key].label,
    description: exports.MangaFormatObj[key].description,
    value: key,
}));
