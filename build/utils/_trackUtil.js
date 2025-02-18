"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackTypeSelection = exports.TrackTypeArray = exports.TrackTypeObj = void 0;
exports.TrackTypeObj = {
    OPENING: {
        label: "Opening",
        description: "Générique de début",
        value: "OPENING",
    },
    ENDING: {
        label: "Ending",
        description: "Générique de fin",
        value: "ENDING",
    },
    OST: {
        label: "OST",
        description: "Musique de fond",
        value: "OST",
    },
    INSERT: {
        label: "INSERT",
        description: "Musique insérée pendant une scène",
        value: "INSERT",
    },
};
exports.TrackTypeArray = Object.keys(exports.TrackTypeObj);
exports.TrackTypeSelection = exports.TrackTypeArray.map((key) => ({
    label: exports.TrackTypeObj[key].label,
    description: exports.TrackTypeObj[key].description,
    value: key,
}));
