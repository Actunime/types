export declare const TrackTypeObj: {
    OPENING: {
        label: string;
        description: string;
        value: string;
    };
    ENDING: {
        label: string;
        description: string;
        value: string;
    };
    BGM: {
        label: string;
        description: string;
        value: string;
    };
    INSERT: {
        label: string;
        description: string;
        value: string;
    };
};
export type ITrackType = keyof typeof TrackTypeObj;
export declare const TrackTypeArray: ITrackType[] & [string, ...string[]];
export declare const TrackTypeSelection: {
    label: string;
    description: string;
    value: "OPENING" | "ENDING" | "BGM" | "INSERT";
}[];
//# sourceMappingURL=_trackUtil.d.ts.map