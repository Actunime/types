"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageLabelSelection = exports.ImageLabelArray = exports.ImageLabelObj = void 0;
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
