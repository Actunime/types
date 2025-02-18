"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchActionSelection = exports.PatchActionArray = exports.PatchActionObj = exports.PatchStatusSelection = exports.PatchStatusArray = exports.PatchStatusObj = exports.PatchTypeSelection = exports.PatchTypeArray = exports.PatchTypeObj = void 0;
exports.PatchTypeObj = {
    CREATE: "Création",
    CREATE_REQUEST: "Demande de création",
    PATCH: "Modification",
    UPDATE_REQUEST: "Demande de modification",
    DELETE: "Suppression",
    DELETE_FORCE: "Suppression forçé",
    DELETE_RESTORE: "Restauration",
};
exports.PatchTypeArray = Object.keys(exports.PatchTypeObj);
exports.PatchTypeSelection = exports.PatchTypeArray.map((key) => ({
    label: exports.PatchTypeObj[key],
    value: key,
}));
exports.PatchStatusObj = {
    PENDING: "En attente",
    IN_PROGRESS: "En cours",
    ACCEPTED: "Accepté",
    REJECTED: "Refusé",
    REVERTED: "Annulé",
};
exports.PatchStatusArray = Object.keys(exports.PatchStatusObj);
exports.PatchStatusSelection = exports.PatchStatusArray.map((key) => ({
    label: exports.PatchStatusObj[key],
    value: key,
}));
exports.PatchActionObj = {
    IN_PROGRESS: "En cours",
    REQUEST: "Demande",
    CHANGE: "Modification des modifications",
    ACCEPT: "Accepter",
    REJECT: "Refuser",
    REVERT: "Annuler",
    DIRECT_CREATE: "Creation sans détours",
    DIRECT_PATCH: "Mise a jour sans détours",
};
exports.PatchActionArray = Object.keys(exports.PatchActionObj);
exports.PatchActionSelection = exports.PatchActionArray.map((key) => ({
    label: exports.PatchActionObj[key],
    value: key,
}));
