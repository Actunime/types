import { ITargetPath } from "./_global";
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
export declare function CreateImageCDN({ IMAGE_LOCAL_HOST, IMAGE_PORT, ...value }: {
    id: string;
    path: ITargetPath;
    value: string;
    valueIsUrl: boolean;
    IMAGE_LOCAL_HOST?: string;
    IMAGE_PORT?: string;
}): Promise<void>;
export declare function DeleteImageCDN(value: {
    id: string;
    path: ITargetPath;
}): Promise<void>;
//# sourceMappingURL=_imageUtil.d.ts.map