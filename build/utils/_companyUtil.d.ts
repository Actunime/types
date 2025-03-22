export declare const CompanyTypeObj: {
    STUDIO: string;
    PRODUCER: string;
};
export type ICompanyType = keyof typeof CompanyTypeObj;
export declare const CompanyTypeArray: ICompanyType[] & [string, ...string[]];
export declare const CompanyTypeSelection: {
    label: string;
    value: "STUDIO" | "PRODUCER";
}[];
