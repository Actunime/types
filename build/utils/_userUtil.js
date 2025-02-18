"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAnimeListStatusSelection = exports.UserAnimeListStatusArray = exports.UserAnimeListStatusObj = exports.userPermissionIsHigherThan = exports.userPermissionLevel = exports.getRoleLevel = exports.userHasRole = exports.UserRolesSelection = exports.UserRolesArray = exports.UserRolesLabel = exports.UserRolesLevel = exports.UserRolesObj = void 0;
exports.UserRolesObj = {
    MEMBER: { label: "Membre", level: 0 },
    PREMIUM: { label: "Premium", level: 1 }, // 1 << 0"Premium",
    MODERATOR: { label: "Modérateur", level: 1 << 1 }, // 1 << 1"Modérateur",
    ANIME_MODERATOR: { label: "Modérateur - Anime", level: 1 << 2 }, // 1 << 2"Modérateur - Anime",
    MANGA_MODERATOR: { label: "Modérateur - Manga", level: 1 << 3 }, // 1 << 3"Modérateur - Manga",
    CHARACTER_MODERATOR: { label: "Modérateur - Personnage", level: 1 << 4 }, // 1 << 4"Modérateur - Personnage",
    PERSON_MODERATOR: { label: "Modérateur - Personnes", level: 1 << 5 }, // 1 << 5"Modérateur - Personnes",
    TRACK_MODERATOR: { label: "Modérateur - Musique", level: 1 << 6 }, // 1 << 6"Modérateur - Musique",
    COMPANY_MODERATOR: { label: "Modérateur - Société", level: 1 << 7 }, // 1 << 7"Modérateur - Société",
    ADMINISTRATOR: { label: "Administrateur", level: 1 << 8 }, // 1 << 8"Administrateur",
    ACTUNIME: { label: "Actunime", level: 1 << 9 }, // 1 << 9"Actunime",
};
exports.UserRolesLevel = Object.fromEntries(Object.keys(exports.UserRolesObj).map((key) => [
    key,
    exports.UserRolesObj[key].level,
]));
exports.UserRolesLabel = Object.fromEntries(Object.keys(exports.UserRolesObj).map((key) => [
    key,
    exports.UserRolesObj[key].label,
]));
exports.UserRolesArray = Object.keys(exports.UserRolesObj);
exports.UserRolesSelection = exports.UserRolesArray.map((key) => ({
    label: exports.UserRolesObj[key].label,
    value: key,
}));
const userHasRole = (userRoles, roles) => {
    if (Array.isArray(roles)) {
        return roles.every((role) => userRoles.includes(role));
    }
    else {
        return userRoles.includes(roles);
    }
};
exports.userHasRole = userHasRole;
const getRoleLevel = (role) => {
    const level = exports.UserRolesLevel[role];
    if (level === undefined) {
        throw "Rôle non reconnu";
    }
    return level;
};
exports.getRoleLevel = getRoleLevel;
const userPermissionLevel = (userRoles) => userRoles.reduce((acc, role) => acc | (0, exports.getRoleLevel)(role), 0);
exports.userPermissionLevel = userPermissionLevel;
const userPermissionIsHigherThan = (userRoles, roles) => {
    if (Array.isArray(roles)) {
        return roles.every((role) => (0, exports.userPermissionLevel)(userRoles) >= (0, exports.getRoleLevel)(role));
    }
    else {
        return (0, exports.userPermissionLevel)(userRoles) >= (0, exports.userPermissionLevel)([roles]);
    }
};
exports.userPermissionIsHigherThan = userPermissionIsHigherThan;
exports.UserAnimeListStatusObj = {
    PLANNING: { label: "En attente", value: "PLANNING" },
    WATCHING: { label: "En cours", value: "WATCHING" },
    PAUSED: { label: "En pause", value: "PAUSED" },
    COMPLETED: { label: "Terminé", value: "COMPLETED" },
    DROPPED: { label: "Abandonné", value: "DROPPED" },
};
exports.UserAnimeListStatusArray = Object.keys(exports.UserAnimeListStatusObj);
exports.UserAnimeListStatusSelection = exports.UserAnimeListStatusArray.map((key) => ({
    label: exports.UserAnimeListStatusObj[key].label,
    value: key,
}));
