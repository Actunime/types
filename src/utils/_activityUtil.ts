export const ActivityTypeObj = {
  PUBLIC: "Public",
  MEMBER: "Membre",
  MODERATION: "Modération",
  SYSTEM: "Système",
};

export type IActivityType = keyof typeof ActivityTypeObj;
export const ActivityTypeArray = Object.keys(
  ActivityTypeObj,
) as IActivityType[] & [string, ...string[]];
export const ActivityTypeSelection = ActivityTypeArray.map((key) => ({
  label: ActivityTypeObj[key],
  value: key,
}));

export const ActivityActionObj = {
  ROLES_CHANGES: "Changement de rôles",
  PREMIUM_CHANGES: "Mise a jour du premium",
  DISABLE_MEMBER: "Désactivation d'un membre",
  ENABLE_MEMBER: "Activation d'un membre",
  REPORT_STATUS_CHANGES: "Changement du statut du signalement",
  UPDATE_STATUS_CHANGES: "Changement du statut de la mise à jour",
  UPDATE_EDIT_CHANGES: "Edition de la mise à jour",

  CREATE_ANIME: "Creation d'un anime",
  CREATE_MANGA: "Creation d'un manga",
  CREATE_PERSON: "Creation d'une personne",
  CREATE_GROUPE: "Creation d'un groupe",
  CREATE_CHARACTER: "Creation d'un personnage",
  CREATE_TRACK: "Creation d'une musique",
  CREATE_COMPANY: "Creation d'une société",
  CREATE_REPORT: "Creation d'un signalement",
  CREATE_IMAGE: "Creation d'une image",

  UPDATE_ANIME: "Modification d'un anime",
  UPDATE_MANGA: "Modification d'un manga",
  UPDATE_PERSON: "Modification d'une personne",
  UPDATE_GROUPE: "Modification d'un groupe",
  UPDATE_CHARACTER: "Modification d'un personnage",
  UPDATE_TRACK: "Modification d'une musique",
  UPDATE_COMPANY: "Modification d'une société",
  UPDATE_REPORT: "Modification d'un signalement",
  UPDATE_PATCH: "Modification d'une mise à jour",
  UPDATE_IMAGE: "Modification d'une image",

  REQUEST_ANIME: "Demande d'un anime",
  REQUEST_MANGA: "Demande d'un manga",
  REQUEST_PERSON: "Demande d'une personne",
  REQUEST_GROUPE: "Demande d'un groupe",
  REQUEST_CHARACTER: "Demande d'un personnage",
  REQUEST_TRACK: "Demande d'une musique",
  REQUEST_COMPANY: "Demande d'une société",
  REQUEST_IMAGE: "Demande d'une image",


  ACCEPT_CREATE_REQUEST_ANIME: "Acceptation de la demande d'ajout d'un anime",
  ACCEPT_CREATE_REQUEST_MANGA: "Acceptation de la demande d'ajout d'un manga",
  ACCEPT_CREATE_REQUEST_PERSON: "Acceptation de la demande d'ajout d'une personne",
  ACCEPT_CREATE_REQUEST_GROUPE: "Acceptation de la demande d'ajout d'un groupe",
  ACCEPT_CREATE_REQUEST_CHARACTER: "Acceptation de la demande d'ajout d'un personnage",
  ACCEPT_CREATE_REQUEST_TRACK: "Acceptation de la demande d'ajout d'une musique",
  ACCEPT_CREATE_REQUEST_COMPANY: "Acceptation de la demande d'ajout d'une société",
  ACCEPT_CREATE_REQUEST_IMAGE: "Acceptation de la demande d'ajout d'une image",

  UPDATE_CREATE_REQUEST_ANIME: "Modification de la demande d'ajout d'un anime",
  UPDATE_CREATE_REQUEST_MANGA: "Modification de la demande d'ajout d'un manga",
  UPDATE_CREATE_REQUEST_PERSON: "Modification de la demande d'ajout d'une personne",
  UPDATE_CREATE_REQUEST_GROUPE: "Modification de la demande d'ajout d'un groupe",
  UPDATE_CREATE_REQUEST_CHARACTER: "Modification de la demande d'ajout d'un personnage",
  UPDATE_CREATE_REQUEST_TRACK: "Modification de la demande d'ajout d'une musique",
  UPDATE_CREATE_REQUEST_COMPANY: "Modification de la demande d'ajout d'une société",
  UPDATE_CREATE_REQUEST_IMAGE: "Modification de la demande d'ajout d'une image",

  DENY_CREATE_REQUEST_ANIME: "Refus de la demande d'ajout d'un anime",
  DENY_CREATE_REQUEST_MANGA: "Refus de la demande d'ajout d'un manga",
  DENY_CREATE_REQUEST_PERSON: "Refus de la demande d'ajout d'une personne",
  DENY_CREATE_REQUEST_GROUPE: "Refus de la demande d'ajout d'un groupe",
  DENY_CREATE_REQUEST_CHARACTER: "Refus de la demande d'ajout d'un personnage",
  DENY_CREATE_REQUEST_TRACK: "Refus de la demande d'ajout d'une musique",
  DENY_CREATE_REQUEST_COMPANY: "Refus de la demande d'ajout d'une société",
  DENY_CREATE_REQUEST_IMAGE: "Refus de la demande d'ajout d'une image",

  DELETE_CREATE_REQUEST_ANIME: "Suppression de la demande d'ajout d'un anime",
  DELETE_CREATE_REQUEST_MANGA: "Suppression de la demande d'ajout d'un manga",
  DELETE_CREATE_REQUEST_PERSON: "Suppression de la demande d'ajout d'une personne",
  DELETE_CREATE_REQUEST_GROUPE: "Suppression de la demande d'ajout d'un groupe",
  DELETE_CREATE_REQUEST_CHARACTER: "Suppression de la demande d'ajout d'un personnage",
  DELETE_CREATE_REQUEST_TRACK: "Suppression de la demande d'ajout d'une musique",
  DELETE_CREATE_REQUEST_COMPANY: "Suppression de la demande d'ajout d'une société",
  DELETE_CREATE_REQUEST_IMAGE: "Suppression de la demande d'ajout d'une image",

  LOGOUT: "Deconnexion",
  LOGIN: "Connexion",
  SIGNUP: "Inscription",
  PROFILE_CHANGES: "Changement de profil",
};

export type IActivityAction = keyof typeof ActivityActionObj;
export const ActivityActionArray = Object.keys(
  ActivityActionObj,
) as IActivityAction[] & [string, ...string[]];
export const ActivityActionSelection = ActivityActionArray.map((key) => ({
  label: ActivityActionObj[key],
  value: key,
}));
