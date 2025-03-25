export const PatchTypeObj = {
    CREATE: "Création",
    UPDATE: "Modification",
    DELETE: "Suppression",
    RESTORE: "Restauration",
};
export const PatchTypeArray = Object.keys(PatchTypeObj);
export const PatchTypeSelection = PatchTypeArray.map((key) => ({
    label: PatchTypeObj[key],
    value: key,
}));
export const PatchStatusObj = {
    PENDING: "En attente",
    PROGRESS: "En cours de vérification",
    ACCEPTED: "Accepté",
    REJECTED: "Refusé"
};
export const PatchStatusArray = Object.keys(PatchStatusObj);
export const PatchStatusSelection = PatchStatusArray.map((key) => ({
    label: PatchStatusObj[key],
    value: key,
}));
