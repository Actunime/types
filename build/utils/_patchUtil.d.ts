export declare const PatchTypeObj: {
    CREATE: string;
    UPDATE: string;
    DELETE: string;
    RESTORE: string;
};
export type IPatchType = keyof typeof PatchTypeObj;
export declare const PatchTypeArray: IPatchType[] & [string, ...string[]];
export declare const PatchTypeSelection: {
    label: string;
    value: "CREATE" | "UPDATE" | "DELETE" | "RESTORE";
}[];
export declare const PatchStatusObj: {
    PENDING: string;
    PROGRESS: string;
    ACCEPTED: string;
    REJECTED: string;
};
export type IPatchStatus = keyof typeof PatchStatusObj;
export declare const PatchStatusArray: IPatchStatus[] & [string, ...string[]];
export declare const PatchStatusSelection: {
    label: string;
    value: "PENDING" | "PROGRESS" | "ACCEPTED" | "REJECTED";
}[];
//# sourceMappingURL=_patchUtil.d.ts.map