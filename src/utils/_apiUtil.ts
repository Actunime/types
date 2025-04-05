export const APICodeObj = {
  OK: { label: 'OK', value: 200 },
  NOT_FOUND: { label: 'Données introuvables', value: 404 },
  SERVER_ERROR: { label: 'Erreur serveur', value: 500 },
  EMPTY_CHANGES: { label: 'Aucun changement', value: 400 },
  BAD_ENTRY: { label: 'Mauvaise entrée', value: 400 },
  FORBIDDEN: { label: 'Interdit', value: 403 },
  UNAUTHORIZED: { label: 'Non autorisé', value: 401 },
  BAD_REQUEST: { label: 'Mauvaise requête', value: 400 },
  BAD_RESPONSE: { label: 'Mauvaise réponse', value: 400 },
  TOO_MANY_REQUESTS: { label: 'Trop de requêtes', value: 429 },
};

export type IAPICode = keyof typeof APICodeObj;
export const APICodeArray = Object.keys(APICodeObj) as IAPICode[] &
  [string, ...string[]];
export const APICodeSelection = APICodeArray.map((key) => ({
  label: APICodeObj[key].label,
  value: key,
}));
