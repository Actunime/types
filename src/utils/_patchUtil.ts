export const PatchTypeObj = {
  CREATE: "Création",
  UPDATE: "Modification",
  DELETE: "Suppression",
  RESTORE: "Restauration",
};

export type IPatchType = keyof typeof PatchTypeObj;
export const PatchTypeArray = Object.keys(PatchTypeObj) as IPatchType[] &
[string, ...string[]];
export const PatchTypeSelection = PatchTypeArray.map((key) => ({
  label: PatchTypeObj[key],
  value: key,
}));

export const PatchStatusObj = {
  PENDING: "En attente",
  PROGRESS: "En cours de vérification",
  ACCEPTED: "Accepté",
  REJECTED: "Refusé"
};

export type IPatchStatus = keyof typeof PatchStatusObj;
export const PatchStatusArray = Object.keys(PatchStatusObj) as IPatchStatus[] &
[string, ...string[]];

export const PatchStatusSelection = PatchStatusArray.map((key) => ({
  label: PatchStatusObj[key],
  value: key,
}));