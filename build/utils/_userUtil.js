export const UserRolesObj = {
    MEMBER: { label: "Membre", level: 0 },
    PREMIUM: { label: "Premium", level: 1 },
    MODERATOR: { label: "Modérateur", level: 1 << 1 },
    ANIME_MODERATOR: { label: "Modérateur - Anime", level: 1 << 2 },
    MANGA_MODERATOR: { label: "Modérateur - Manga", level: 1 << 3 },
    CHARACTER_MODERATOR: { label: "Modérateur - Personnage", level: 1 << 4 },
    PERSON_MODERATOR: { label: "Modérateur - Personnes", level: 1 << 5 },
    TRACK_MODERATOR: { label: "Modérateur - Musique", level: 1 << 6 },
    COMPANY_MODERATOR: { label: "Modérateur - Société", level: 1 << 7 },
    ADMINISTRATOR: { label: "Administrateur", level: 1 << 8 },
    ACTUNIME: { label: "Actunime", level: 1 << 9 },
};
export const UserRolesLevel = Object.fromEntries(Object.keys(UserRolesObj).map((key) => [
    key,
    UserRolesObj[key].level,
]));
export const UserRolesLabel = Object.fromEntries(Object.keys(UserRolesObj).map((key) => [
    key,
    UserRolesObj[key].label,
]));
export const UserRolesArray = Object.keys(UserRolesObj);
export const UserRolesSelection = UserRolesArray.map((key) => ({
    label: UserRolesObj[key].label,
    value: key,
}));
export const userHasRole = (userRoles, roles) => {
    if (Array.isArray(roles)) {
        return roles.every((role) => userRoles.includes(role));
    }
    else {
        return userRoles.includes(roles);
    }
};
export const getRoleLevel = (role) => {
    const level = UserRolesLevel[role];
    if (level === undefined) {
        throw "Rôle non reconnu";
    }
    return level;
};
export const userPermissionLevel = (userRoles) => userRoles.reduce((acc, role) => acc | getRoleLevel(role), 0);
export const userPermissionIsHigherThan = (userRoles, roles) => {
    if (Array.isArray(roles)) {
        return roles.every((role) => userPermissionLevel(userRoles) >= getRoleLevel(role));
    }
    else {
        return userPermissionLevel(userRoles) >= userPermissionLevel([roles]);
    }
};
export const UserAnimeListStatusObj = {
    PLANNING: { label: "En attente", value: "PLANNING" },
    WATCHING: { label: "En cours", value: "WATCHING" },
    PAUSED: { label: "En pause", value: "PAUSED" },
    COMPLETED: { label: "Terminé", value: "COMPLETED" },
    DROPPED: { label: "Abandonné", value: "DROPPED" },
};
export const UserAnimeListStatusArray = Object.keys(UserAnimeListStatusObj);
export const UserAnimeListStatusSelection = UserAnimeListStatusArray.map((key) => ({
    label: UserAnimeListStatusObj[key].label,
    value: key,
}));
//# sourceMappingURL=_userUtil.js.map