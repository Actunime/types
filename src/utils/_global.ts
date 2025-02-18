import {
  IActivity,
  IAnime,
  ICharacter,
  ICompany,
  IGroupe,
  IManga,
  IPerson,
  IReport,
  ITrack,
  IPatch,
  IUser,
  IAccount,
  IImage,
  IUserAnimeListe,
} from "../";

export const TargetPathObj = {
  User: "Utilisateur",
  Account: "Compte",
  UserProfile: "Profil",
  UserPreferences: "Préférences",
  UserAnimeListe: "Liste d'animes",
  UserDeleteAnimeFromListe: "Supprimer un anime de la liste",
  // Medias
  Groupe: "Groupe",
  Manga: "Manga",
  Anime: "Anime",
  Person: "Personne",
  Character: "Personnage",
  Track: "Musique",
  Company: "Société",
  //
  Image: "Image",
  Patch: "Mise à jour",
  Activity: "Activité",
  Report: "Signalement",
  DisabledUser: "Compte désactivé",
  PremiumUser: "Compte premium",
};

export type ITargetPath = keyof typeof TargetPathObj;
export const TargetPathArray = Object.keys(TargetPathObj) as ITargetPath[] &
[string, ...string[]];
export const TargetPathSelection = TargetPathArray.map((key) => ({
  label: TargetPathObj[key],
  value: key,
}));

export type ITargetPathType<T extends ITargetPath> =
  T extends "Account"
  ? IAccount
  : T extends "User"
  ? IUser
  : T extends "Groupe"
  ? IGroupe
  : T extends "Manga"
  ? IManga
  : T extends "Anime"
  ? IAnime
  : T extends "Character"
  ? ICharacter
  : T extends "Person"
  ? IPerson
  : T extends "Track"
  ? ITrack
  : T extends "Company"
  ? ICompany
  : T extends "Patch"
  ? IPatch
  : T extends "Activity"
  ? IActivity
  : T extends "Report"
  ? IReport
  : T extends "Image"
  ? IImage
  : T extends "UserProfile"
  ? IUser
  : T extends "UserPreferences"
  ? IUser
  : T extends "UserAnimeListe"
  ? IUserAnimeListe
  : T extends "UserDeleteAnimeFromListe"
  ? IUserAnimeListe
  : T extends "DisabledUser"
  ? IUser
  : T extends "PremiumUser"
  ? IUser
  : any;
