export declare const UserRolesObj: {
    MEMBER: {
        label: string;
        level: number;
    };
    PREMIUM: {
        label: string;
        level: number;
    };
    MODERATOR: {
        label: string;
        level: number;
    };
    ANIME_MODERATOR: {
        label: string;
        level: number;
    };
    MANGA_MODERATOR: {
        label: string;
        level: number;
    };
    CHARACTER_MODERATOR: {
        label: string;
        level: number;
    };
    PERSON_MODERATOR: {
        label: string;
        level: number;
    };
    TRACK_MODERATOR: {
        label: string;
        level: number;
    };
    COMPANY_MODERATOR: {
        label: string;
        level: number;
    };
    ADMINISTRATOR: {
        label: string;
        level: number;
    };
    ACTUNIME: {
        label: string;
        level: number;
    };
};
export type IUserRoles = keyof typeof UserRolesObj;
export declare const UserRolesLevel: Record<IUserRoles, number>;
export declare const UserRolesLabel: Record<IUserRoles, string>;
export declare const UserRolesArray: IUserRoles[] & [string, ...string[]];
export declare const UserRolesSelection: {
    label: string;
    value: "MEMBER" | "PREMIUM" | "MODERATOR" | "ANIME_MODERATOR" | "MANGA_MODERATOR" | "CHARACTER_MODERATOR" | "PERSON_MODERATOR" | "TRACK_MODERATOR" | "COMPANY_MODERATOR" | "ADMINISTRATOR" | "ACTUNIME";
}[];
export declare const userHasRole: (userRoles: IUserRoles[], roles: IUserRoles | IUserRoles[]) => boolean;
export declare const getRoleLevel: (role: IUserRoles) => number;
export declare const userPermissionLevel: (userRoles: IUserRoles[]) => number;
export declare const userPermissionIsHigherThan: (userRoles: IUserRoles[], roles: IUserRoles | IUserRoles[]) => boolean;
export declare const UserAnimeListStatusObj: {
    PLANNING: {
        label: string;
        value: string;
    };
    WATCHING: {
        label: string;
        value: string;
    };
    PAUSED: {
        label: string;
        value: string;
    };
    COMPLETED: {
        label: string;
        value: string;
    };
    DROPPED: {
        label: string;
        value: string;
    };
};
export type IUserAnimeListStatus = keyof typeof UserAnimeListStatusObj;
export declare const UserAnimeListStatusArray: IUserAnimeListStatus[] & [string, ...string[]];
export declare const UserAnimeListStatusSelection: {
    label: string;
    value: "PAUSED" | "PLANNING" | "WATCHING" | "COMPLETED" | "DROPPED";
}[];
