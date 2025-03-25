export const TargetPathObj = {
    User: "Utilisateur",
    Groupe: "Groupe",
    Manga: "Manga",
    Anime: "Anime",
    Person: "Personne",
    Character: "Personnage",
    Track: "Musique",
    Company: "Société",
    Image: "Image",
    Patch: "Mise à jour",
    Activity: "Activité",
    Report: "Signalement",
};
export const TargetPathArray = Object.keys(TargetPathObj);
export const TargetPathSelection = TargetPathArray.map((key) => ({
    label: TargetPathObj[key],
    value: key,
}));
