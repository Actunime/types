export declare const APICodeObj: {
    OK: {
        label: string;
        value: number;
    };
    NOT_FOUND: {
        label: string;
        value: number;
    };
    SERVER_ERROR: {
        label: string;
        value: number;
    };
    EMPTY_CHANGES: {
        label: string;
        value: number;
    };
    BAD_ENTRY: {
        label: string;
        value: number;
    };
    FORBIDDEN: {
        label: string;
        value: number;
    };
    UNAUTHORIZED: {
        label: string;
        value: number;
    };
    BAD_REQUEST: {
        label: string;
        value: number;
    };
    BAD_RESPONSE: {
        label: string;
        value: number;
    };
    TOO_MANY_REQUESTS: {
        label: string;
        value: number;
    };
};
export type IAPICode = keyof typeof APICodeObj;
export declare const APICodeArray: IAPICode[] & [string, ...string[]];
export declare const APICodeSelection: {
    label: string;
    value: "OK" | "NOT_FOUND" | "SERVER_ERROR" | "EMPTY_CHANGES" | "BAD_ENTRY" | "FORBIDDEN" | "UNAUTHORIZED" | "BAD_REQUEST" | "BAD_RESPONSE" | "TOO_MANY_REQUESTS";
}[];
