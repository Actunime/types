export const ImageLabelObj = {
    COVER: "Couverture",
    BANNER: "Bannière",
    AVATAR: "Avatar",
    LOGO: "Logo",
};
export const ImageLabelArray = Object.keys(ImageLabelObj);
export const ImageLabelSelection = ImageLabelArray.map((key) => ({
    label: ImageLabelObj[key],
    value: key,
}));
