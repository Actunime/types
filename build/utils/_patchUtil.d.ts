export declare const PatchTypeObj: {
    CREATE: string;
    CREATE_REQUEST: string;
    PATCH: string;
    UPDATE_REQUEST: string;
    DELETE: string;
    DELETE_FORCE: string;
    DELETE_RESTORE: string;
};
export type IPatchType = keyof typeof PatchTypeObj;
export declare const PatchTypeArray: IPatchType[] & [string, ...string[]];
export declare const PatchTypeSelection: {
    label: string;
    value: "CREATE" | "CREATE_REQUEST" | "PATCH" | "UPDATE_REQUEST" | "DELETE" | "DELETE_FORCE" | "DELETE_RESTORE";
}[];
export declare const PatchStatusObj: {
    PENDING: string;
    IN_PROGRESS: string;
    ACCEPTED: string;
    REJECTED: string;
    REVERTED: string;
};
export type IPatchStatus = keyof typeof PatchStatusObj;
export declare const PatchStatusArray: IPatchStatus[] & [string, ...string[]];
export declare const PatchStatusSelection: {
    label: string;
    value: "PENDING" | "IN_PROGRESS" | "ACCEPTED" | "REJECTED" | "REVERTED";
}[];
export declare const PatchActionObj: {
    IN_PROGRESS: string;
    REQUEST: string;
    CHANGE: string;
    ACCEPT: string;
    REJECT: string;
    REVERT: string;
    DIRECT_CREATE: string;
    DIRECT_PATCH: string;
};
export type IPatchAction = keyof typeof PatchActionObj;
export declare const PatchActionArray: IPatchAction[] & [string, ...string[]];
export declare const PatchActionSelection: {
    label: string;
    value: "IN_PROGRESS" | "REQUEST" | "CHANGE" | "ACCEPT" | "REJECT" | "REVERT" | "DIRECT_CREATE" | "DIRECT_PATCH";
}[];
//# sourceMappingURL=_patchUtil.d.ts.map