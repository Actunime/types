export declare const ReportSubjectObj: {
    USER_IMAGE: string;
    USER_INFO: string;
};
export type IReportSubject = keyof typeof ReportSubjectObj;
export declare const ReportSubjectArray: IReportSubject[] & [string, ...string[]];
export declare const ReportSubjectSelection: {
    label: string;
    value: "USER_IMAGE" | "USER_INFO";
}[];
export declare const ReportStatusObj: {
    PENDING: string;
    REJECTED: string;
    VERIFIED: string;
};
export type IReportStatus = keyof typeof ReportStatusObj;
export declare const ReportStatusArray: IReportStatus[] & [string, ...string[]];
export declare const ReportStatusSelection: {
    label: string;
    value: "PENDING" | "REJECTED" | "VERIFIED";
}[];
