"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageLabelSelection = exports.ImageLabelArray = exports.ImageLabelObj = void 0;
exports.CreateImageCDN = CreateImageCDN;
exports.DeleteImageCDN = DeleteImageCDN;
exports.ImageLabelObj = {
    COVER: "Couverture",
    BANNER: "Bannière",
    AVATAR: "Avatar",
    LOGO: "Logo",
};
exports.ImageLabelArray = Object.keys(exports.ImageLabelObj);
exports.ImageLabelSelection = exports.ImageLabelArray.map((key) => ({
    label: exports.ImageLabelObj[key],
    value: key,
}));
async function CreateImageCDN({ IMAGE_LOCAL_HOST, IMAGE_PORT, ...value }) {
    const req = await fetch("http://" +
        (process.env.IMAGE_LOCAL_HOST || IMAGE_LOCAL_HOST || "localhost") +
        ":" +
        (process.env.IMAGE_PORT || IMAGE_PORT || "3006") +
        "/v1/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
    });
    if (req.status !== 200)
        throw new Error("Impossible de créer l'image");
}
async function DeleteImageCDN(value) {
    const req = await fetch("http://" +
        process.env.IMAGE_LOCAL_HOST +
        ":" +
        process.env.IMAGE_PORT +
        "/v1/delete", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
    });
    if (req.status !== 200)
        throw new Error("Impossible de supprimer l'image");
}
