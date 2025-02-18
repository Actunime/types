"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyTypeSelection = exports.CompanyTypeArray = exports.CompanyTypeObj = void 0;
exports.CompanyTypeObj = {
    STUDIO: "Studio",
    PRODUCER: "Producteur",
};
exports.CompanyTypeArray = Object.keys(exports.CompanyTypeObj);
exports.CompanyTypeSelection = exports.CompanyTypeArray.map((key) => ({
    label: exports.CompanyTypeObj[key],
    value: key,
}));
