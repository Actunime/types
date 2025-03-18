export declare const ImageLabelObj: {
    COVER: string;
    BANNER: string;
    AVATAR: string;
    LOGO: string;
};
export type IImageLabel = keyof typeof ImageLabelObj;
export declare const ImageLabelArray: IImageLabel[] & [string, ...string[]];
export declare const ImageLabelSelection: {
    label: string;
    value: "COVER" | "BANNER" | "AVATAR" | "LOGO";
}[];
//# sourceMappingURL=_imageUtil.d.ts.map