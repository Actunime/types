export const ReportSubjectObj = {
    USER_IMAGE: "Les images que l'utilisateur utilise sont inappropriées",
    USER_INFO: "Les informations mis par l'utilisateur sont inappropriées",
};
export const ReportSubjectArray = Object.keys(ReportSubjectObj);
export const ReportSubjectSelection = ReportSubjectArray.map((key) => ({
    label: ReportSubjectObj[key],
    value: key,
}));
export const ReportStatusObj = {
    PENDING: "En attente",
    REJECTED: "Refusé",
    VERIFIED: "Vérifié",
};
export const ReportStatusArray = Object.keys(ReportStatusObj);
export const ReportStatusSelection = ReportStatusArray.map((key) => ({
    label: ReportStatusObj[key],
    value: key,
}));
//# sourceMappingURL=_reportUtil.js.map