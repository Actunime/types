export const CompanyTypeObj = {
    STUDIO: "Studio",
    PRODUCER: "Producteur",
};
export const CompanyTypeArray = Object.keys(CompanyTypeObj);
export const CompanyTypeSelection = CompanyTypeArray.map((key) => ({
    label: CompanyTypeObj[key],
    value: key,
}));
//# sourceMappingURL=_companyUtil.js.map