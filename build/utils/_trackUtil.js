export const TrackTypeObj = {
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
    BGM: {
        label: "BGM",
        description: "Musique de fond",
        value: "BGM",
    },
    INSERT: {
        label: "INSERT",
        description: "Musique ponctuelle et unique",
        value: "INSERT",
    },
};
export const TrackTypeArray = Object.keys(TrackTypeObj);
export const TrackTypeSelection = TrackTypeArray.map((key) => ({
    label: TrackTypeObj[key].label,
    description: TrackTypeObj[key].description,
    value: key,
}));
//# sourceMappingURL=_trackUtil.js.map