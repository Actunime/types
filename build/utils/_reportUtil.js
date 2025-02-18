"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportStatusSelection = exports.ReportStatusArray = exports.ReportStatusObj = exports.ReportSubjectSelection = exports.ReportSubjectArray = exports.ReportSubjectObj = void 0;
exports.ReportSubjectObj = {
    USER_IMAGE: "Les images que l'utilisateur utilise sont inappropriées",
    USER_INFO: "Les informations mis par l'utilisateur sont inappropriées",
};
exports.ReportSubjectArray = Object.keys(exports.ReportSubjectObj);
exports.ReportSubjectSelection = exports.ReportSubjectArray.map((key) => ({
    label: exports.ReportSubjectObj[key],
    value: key,
}));
exports.ReportStatusObj = {
    PENDING: "En attente",
    REJECTED: "Refusé",
    VERIFIED: "Vérifié",
};
exports.ReportStatusArray = Object.keys(exports.ReportStatusObj);
exports.ReportStatusSelection = exports.ReportStatusArray.map((key) => ({
    label: exports.ReportStatusObj[key],
    value: key,
}));
