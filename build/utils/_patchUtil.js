"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchStatusSelection = exports.PatchStatusArray = exports.PatchStatusObj = exports.PatchTypeSelection = exports.PatchTypeArray = exports.PatchTypeObj = void 0;
exports.PatchTypeObj = {
    CREATE: "Création",
    UPDATE: "Modification",
    DELETE: "Suppression",
    RESTORE: "Restauration",
};
exports.PatchTypeArray = Object.keys(exports.PatchTypeObj);
exports.PatchTypeSelection = exports.PatchTypeArray.map((key) => ({
    label: exports.PatchTypeObj[key],
    value: key,
}));
exports.PatchStatusObj = {
    PENDING: "En attente",
    PROGRESS: "En cours de vérification",
    ACCEPTED: "Accepté",
    REJECTED: "Refusé"
};
exports.PatchStatusArray = Object.keys(exports.PatchStatusObj);
exports.PatchStatusSelection = exports.PatchStatusArray.map((key) => ({
    label: exports.PatchStatusObj[key],
    value: key,
}));
