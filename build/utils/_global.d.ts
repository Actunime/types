import { IActivity, IAnime, ICharacter, ICompany, IGroupe, IManga, IPerson, IReport, ITrack, IPatch, IUser, IAccount, IImage, IUserAnimeListe } from "../";
export declare const TargetPathObj: {
    User: string;
    Account: string;
    UserProfile: string;
    UserPreferences: string;
    UserAnimeListe: string;
    UserDeleteAnimeFromListe: string;
    Groupe: string;
    Manga: string;
    Anime: string;
    Person: string;
    Character: string;
    Track: string;
    Company: string;
    Image: string;
    Patch: string;
    Activity: string;
    Report: string;
    DisabledUser: string;
    PremiumUser: string;
};
export type ITargetPath = keyof typeof TargetPathObj;
export declare const TargetPathArray: ITargetPath[] & [string, ...string[]];
export declare const TargetPathSelection: {
    label: string;
    value: "Groupe" | "Manga" | "Anime" | "Image" | "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Person" | "Character" | "Track" | "Company" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser";
}[];
export type ITargetPathType<T extends ITargetPath> = T extends "Account" ? IAccount : T extends "User" ? IUser : T extends "Groupe" ? IGroupe : T extends "Manga" ? IManga : T extends "Anime" ? IAnime : T extends "Character" ? ICharacter : T extends "Person" ? IPerson : T extends "Track" ? ITrack : T extends "Company" ? ICompany : T extends "Patch" ? IPatch : T extends "Activity" ? IActivity : T extends "Report" ? IReport : T extends "Image" ? IImage : T extends "UserProfile" ? IUser : T extends "UserPreferences" ? IUser : T extends "UserAnimeListe" ? IUserAnimeListe : T extends "UserDeleteAnimeFromListe" ? IUserAnimeListe : T extends "DisabledUser" ? IUser : T extends "PremiumUser" ? IUser : any;
//# sourceMappingURL=_global.d.ts.map