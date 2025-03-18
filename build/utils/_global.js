"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetPathSelection = exports.TargetPathArray = exports.TargetPathObj = void 0;
exports.TargetPathObj = {
    User: "Utilisateur",
    // Medias
    Groupe: "Groupe",
    Manga: "Manga",
    Anime: "Anime",
    Person: "Personne",
    Character: "Personnage",
    Track: "Musique",
    Company: "Société",
    //
    Image: "Image",
    Patch: "Mise à jour",
    Activity: "Activité",
    Report: "Signalement",
};
exports.TargetPathArray = Object.keys(exports.TargetPathObj);
exports.TargetPathSelection = exports.TargetPathArray.map((key) => ({
    label: exports.TargetPathObj[key],
    value: key,
}));
