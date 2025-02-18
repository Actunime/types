"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetPathSelection = exports.TargetPathArray = exports.TargetPathObj = void 0;
exports.TargetPathObj = {
    User: "Utilisateur",
    Account: "Compte",
    UserProfile: "Profil",
    UserPreferences: "Préférences",
    UserAnimeListe: "Liste d'animes",
    UserDeleteAnimeFromListe: "Supprimer un anime de la liste",
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
    DisabledUser: "Compte désactivé",
    PremiumUser: "Compte premium",
};
exports.TargetPathArray = Object.keys(exports.TargetPathObj);
exports.TargetPathSelection = exports.TargetPathArray.map((key) => ({
    label: exports.TargetPathObj[key],
    value: key,
}));
