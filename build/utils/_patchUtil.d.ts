export declare const PatchTypeObj: {
    CREATE: string;
    UPDATE: string;
    MODERATOR_CREATE: string;
    MODERATOR_UPDATE: string;
};
export type IPatchType = keyof typeof PatchTypeObj;
export declare const PatchTypeArray: IPatchType[] & [string, ...string[]];
export declare const PatchTypeSelection: {
    label: string;
    value: "CREATE" | "UPDATE" | "MODERATOR_CREATE" | "MODERATOR_UPDATE";
}[];
export declare const PatchStatusObj: {
    PENDING: string;
    PROGRESS: string;
    ACCEPTED: string;
    DENIED: string;
};
export type IPatchStatus = keyof typeof PatchStatusObj;
export declare const PatchStatusArray: IPatchStatus[] & [string, ...string[]];
export declare const PatchStatusSelection: {
    label: string;
    value: "PENDING" | "PROGRESS" | "ACCEPTED" | "DENIED";
}[];
//# sourceMappingURL=_patchUtil.d.ts.map