import { IActivity, IAnime, ICharacter, ICompany, IGroupe, IManga, IPerson, IReport, ITrack, IPatch, IUser, IImage, IImageFull, IUserFull, IGroupeFull, IMangaFull, IAnimeFull, ICharacterFull, IPersonFull, ITrackFull, ICompanyFull, IPatchFull, IActivityFull, IReportFull, IActivityDB, IAnimeDB, ICharacterDB, ICompanyDB, IGroupeDB, IImageDB, IMangaDB, IPatchDB, IPersonDB, IReportDB, ITrackDB, IUserDB, IUserPaginationResponse, IActivityPaginationResponse, IAnimePaginationResponse, ICharacterPaginationResponse, ICompanyPaginationResponse, IGroupePaginationResponse, IImagePaginationResponse, IMangaPaginationResponse, IPatchPaginationResponse, IPersonPaginationResponse, IReportPaginationResponse, ITrackPaginationResponse } from "../";
export declare const TargetPathObj: {
    User: string;
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
};
export type ITargetPath = keyof typeof TargetPathObj;
export declare const TargetPathArray: ITargetPath[] & [string, ...string[]];
export declare const TargetPathSelection: {
    label: string;
    value: "Groupe" | "Manga" | "Anime" | "Image" | "User" | "Person" | "Character" | "Track" | "Company" | "Patch" | "Activity" | "Report";
}[];
export type ITargetPathType<T extends ITargetPath> = T extends "User" ? IUser : T extends "Groupe" ? IGroupe : T extends "Manga" ? IManga : T extends "Anime" ? IAnime : T extends "Character" ? ICharacter : T extends "Person" ? IPerson : T extends "Track" ? ITrack : T extends "Company" ? ICompany : T extends "Patch" ? IPatch : T extends "Activity" ? IActivity : T extends "Report" ? IReport : T extends "Image" ? IImage : any;
export type ITargetPathTypeFull<T extends ITargetPath> = T extends "User" ? IUserFull : T extends "Groupe" ? IGroupeFull : T extends "Manga" ? IMangaFull : T extends "Anime" ? IAnimeFull : T extends "Character" ? ICharacterFull : T extends "Person" ? IPersonFull : T extends "Track" ? ITrackFull : T extends "Company" ? ICompanyFull : T extends "Patch" ? IPatchFull : T extends "Activity" ? IActivityFull : T extends "Report" ? IReportFull : T extends "Image" ? IImageFull : any;
export type ITargetPathTypeDB<T extends ITargetPath> = T extends "User" ? IUserDB : T extends "Groupe" ? IGroupeDB : T extends "Manga" ? IMangaDB : T extends "Anime" ? IAnimeDB : T extends "Character" ? ICharacterDB : T extends "Person" ? IPersonDB : T extends "Track" ? ITrackDB : T extends "Company" ? ICompanyDB : T extends "Patch" ? IPatchDB : T extends "Activity" ? IActivityDB : T extends "Report" ? IReportDB : T extends "Image" ? IImageDB : any;
export type ITargetPathTypePaginationResponse<T extends ITargetPath> = T extends "User" ? IUserPaginationResponse : T extends "Groupe" ? IGroupePaginationResponse : T extends "Manga" ? IMangaPaginationResponse : T extends "Anime" ? IAnimePaginationResponse : T extends "Character" ? ICharacterPaginationResponse : T extends "Person" ? IPersonPaginationResponse : T extends "Track" ? ITrackPaginationResponse : T extends "Company" ? ICompanyPaginationResponse : T extends "Patch" ? IPatchPaginationResponse : T extends "Activity" ? IActivityPaginationResponse : T extends "Report" ? IReportPaginationResponse : T extends "Image" ? IImagePaginationResponse : any;
