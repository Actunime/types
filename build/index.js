// src/utils/_activityUtil.ts
var ActivityTypeObj = {
  PUBLIC: "Public",
  MEMBER: "Membre",
  MODERATION: "Mode\u0301ration",
  SYSTEM: "Syst\xE8me"
};
var ActivityTypeArray = Object.keys(
  ActivityTypeObj
);
var ActivityTypeSelection = ActivityTypeArray.map((key) => ({
  label: ActivityTypeObj[key],
  value: key
}));
var ActivityActionObj = {
  ROLES_CHANGES: "Changement de ro\u0302les",
  PREMIUM_CHANGES: "Mise a jour du premium",
  DISABLE_MEMBER: "D\xE9sactivation d'un membre",
  ENABLE_MEMBER: "Activation d'un membre",
  REPORT_STATUS_CHANGES: "Changement du statut du signalement",
  UPDATE_STATUS_CHANGES: "Changement du statut de la mise \xE0 jour",
  UPDATE_EDIT_CHANGES: "Edition de la mise \xE0 jour",
  CREATE_ANIME: "Creation d'un anime",
  CREATE_MANGA: "Creation d'un manga",
  CREATE_PERSON: "Creation d'une personne",
  CREATE_GROUPE: "Creation d'un groupe",
  CREATE_CHARACTER: "Creation d'un personnage",
  CREATE_TRACK: "Creation d'une musique",
  CREATE_COMPANY: "Creation d'une soci\xE9t\xE9",
  CREATE_REPORT: "Creation d'un signalement",
  CREATE_IMAGE: "Creation d'une image",
  UPDATE_ANIME: "Modification d'un anime",
  UPDATE_MANGA: "Modification d'un manga",
  UPDATE_PERSON: "Modification d'une personne",
  UPDATE_GROUPE: "Modification d'un groupe",
  UPDATE_CHARACTER: "Modification d'un personnage",
  UPDATE_TRACK: "Modification d'une musique",
  UPDATE_COMPANY: "Modification d'une soci\xE9t\xE9",
  UPDATE_REPORT: "Modification d'un signalement",
  UPDATE_PATCH: "Modification d'une mise \xE0 jour",
  UPDATE_IMAGE: "Modification d'une image",
  REQUEST_ANIME: "Demande d'un anime",
  REQUEST_MANGA: "Demande d'un manga",
  REQUEST_PERSON: "Demande d'une personne",
  REQUEST_GROUPE: "Demande d'un groupe",
  REQUEST_CHARACTER: "Demande d'un personnage",
  REQUEST_TRACK: "Demande d'une musique",
  REQUEST_COMPANY: "Demande d'une soci\xE9t\xE9",
  REQUEST_IMAGE: "Demande d'une image",
  ACCEPT_CREATE_REQUEST_ANIME: "Acceptation de la demande d'ajout d'un anime",
  ACCEPT_CREATE_REQUEST_MANGA: "Acceptation de la demande d'ajout d'un manga",
  ACCEPT_CREATE_REQUEST_PERSON: "Acceptation de la demande d'ajout d'une personne",
  ACCEPT_CREATE_REQUEST_GROUPE: "Acceptation de la demande d'ajout d'un groupe",
  ACCEPT_CREATE_REQUEST_CHARACTER: "Acceptation de la demande d'ajout d'un personnage",
  ACCEPT_CREATE_REQUEST_TRACK: "Acceptation de la demande d'ajout d'une musique",
  ACCEPT_CREATE_REQUEST_COMPANY: "Acceptation de la demande d'ajout d'une soci\xE9t\xE9",
  ACCEPT_CREATE_REQUEST_IMAGE: "Acceptation de la demande d'ajout d'une image",
  UPDATE_CREATE_REQUEST_ANIME: "Modification de la demande d'ajout d'un anime",
  UPDATE_CREATE_REQUEST_MANGA: "Modification de la demande d'ajout d'un manga",
  UPDATE_CREATE_REQUEST_PERSON: "Modification de la demande d'ajout d'une personne",
  UPDATE_CREATE_REQUEST_GROUPE: "Modification de la demande d'ajout d'un groupe",
  UPDATE_CREATE_REQUEST_CHARACTER: "Modification de la demande d'ajout d'un personnage",
  UPDATE_CREATE_REQUEST_TRACK: "Modification de la demande d'ajout d'une musique",
  UPDATE_CREATE_REQUEST_COMPANY: "Modification de la demande d'ajout d'une soci\xE9t\xE9",
  UPDATE_CREATE_REQUEST_IMAGE: "Modification de la demande d'ajout d'une image",
  DENY_CREATE_REQUEST_ANIME: "Refus de la demande d'ajout d'un anime",
  DENY_CREATE_REQUEST_MANGA: "Refus de la demande d'ajout d'un manga",
  DENY_CREATE_REQUEST_PERSON: "Refus de la demande d'ajout d'une personne",
  DENY_CREATE_REQUEST_GROUPE: "Refus de la demande d'ajout d'un groupe",
  DENY_CREATE_REQUEST_CHARACTER: "Refus de la demande d'ajout d'un personnage",
  DENY_CREATE_REQUEST_TRACK: "Refus de la demande d'ajout d'une musique",
  DENY_CREATE_REQUEST_COMPANY: "Refus de la demande d'ajout d'une soci\xE9t\xE9",
  DENY_CREATE_REQUEST_IMAGE: "Refus de la demande d'ajout d'une image",
  DELETE_CREATE_REQUEST_ANIME: "Suppression de la demande d'ajout d'un anime",
  DELETE_CREATE_REQUEST_MANGA: "Suppression de la demande d'ajout d'un manga",
  DELETE_CREATE_REQUEST_PERSON: "Suppression de la demande d'ajout d'une personne",
  DELETE_CREATE_REQUEST_GROUPE: "Suppression de la demande d'ajout d'un groupe",
  DELETE_CREATE_REQUEST_CHARACTER: "Suppression de la demande d'ajout d'un personnage",
  DELETE_CREATE_REQUEST_TRACK: "Suppression de la demande d'ajout d'une musique",
  DELETE_CREATE_REQUEST_COMPANY: "Suppression de la demande d'ajout d'une soci\xE9t\xE9",
  DELETE_CREATE_REQUEST_IMAGE: "Suppression de la demande d'ajout d'une image",
  LOGOUT: "Deconnexion",
  LOGIN: "Connexion",
  SIGNUP: "Inscription",
  PROFILE_CHANGES: "Changement de profil"
};
var ActivityActionArray = Object.keys(
  ActivityActionObj
);
var ActivityActionSelection = ActivityActionArray.map((key) => ({
  label: ActivityActionObj[key],
  value: key
}));

// src/utils/_animeUtil.ts
var AnimeFormatObj = {
  SERIE: { label: "S\xE9rie", description: "Diffus\xE9 en \xE9pisodes r\xE9guliers." },
  SERIE_COURTE: {
    label: "S\xE9rie courte",
    description: "Diffus\xE9 en \xE9pisodes courts, g\xE9n\xE9ralement moins de 15 minutes chacun."
  },
  FILM: { label: "Film", description: "Produit comme un long m\xE9trage." },
  ONA: { label: "ONA", description: "Diffus\xE9 directement sur Internet." },
  OVA: {
    label: "OVA",
    description: "Destin\xE9 \xE0 la vente directe aux consommateurs."
  },
  SPECIAL: {
    label: "Sp\xE9cial",
    description: "Un \xE9pisode unique ou une s\xE9rie d'\xE9pisodes qui ne fait pas partie de la diffusion r\xE9guli\xE8re d'une s\xE9rie."
  }
};
var AnimeFormatArray = Object.keys(AnimeFormatObj);
var AnimeFormatSelection = AnimeFormatArray.map((key) => ({
  label: AnimeFormatObj[key].label,
  description: AnimeFormatObj[key].description,
  value: key
}));

// src/utils/_characterUtil.ts
var CharacterRoleObj = {
  PRINCIPAL: {
    label: "Principal",
    description: "Personnage principal de l'histoire."
  },
  SECONDAIRE: {
    label: "Secondaire",
    description: "Personnage secondaire de l'histoire."
  },
  FIGURANT: {
    label: "Figurant",
    description: "Personnage qui appara\xEEt dans l'histoire mais n'a pas d'influence directe sur celle-ci."
  },
  ANTAGONISTE: {
    label: "Antagoniste",
    description: "Personnage qui est l'ennemi principal de l'histoire."
  },
  SOUTIEN: {
    label: "Soutien",
    description: "Personnage qui apporte de l'aide et du soutien au personnage principal."
  }
};
var CharacterRoleArray = Object.keys(
  CharacterRoleObj
);
var CharacterRoleSelection = CharacterRoleArray.map((key) => ({
  label: CharacterRoleObj[key].label,
  description: CharacterRoleObj[key].description,
  value: key
}));
var CharacterGenderObj = {
  MASCULIN: {
    label: "Masculin",
    description: "Personnage qui a une apparence physique traditionnellement associ\xE9e \xE0 la masculinit\xE9."
  },
  FEMININ: {
    label: "F\xE9minin",
    description: "Personnage qui a une apparence physique traditionnellement associ\xE9e \xE0 la feminit\xE9."
  },
  NEUTRE: {
    label: "Neutre",
    description: "Personnage dont l'apparence physique n'est pas forc\xE9ment associ\xE9e \xE0 la masculinit\xE9 ou \xE0 la f\xE9minit\xE9, ou qui r\xE9presentent des caract\xE9ristiques des deux genres."
  },
  TRANSGENRE: {
    label: "Transgenre",
    description: "Personnage qui ne se identifie pas avec le genre traditionnel associ\xE9 \xE0 son apparence physique."
  },
  NON_BINAIRE: {
    label: "Non binaire",
    description: "Personnage qui ne se identifie pas avec les genres traditionnels masculin ou f\xE9minin, mais qui ne s'identifie pas non plus comme neutre."
  },
  GENRE_FLUIDE: {
    label: "Genre fluide",
    description: "Personnage dont l'identit\xE9 de genre est en constante \xE9volution et qui ne se situe pas dans l'une des cat\xE9gories traditionnelles."
  },
  AUTRE: {
    label: "Autre",
    description: "Personnage qui ne se trouve pas dans la liste ci-dessus."
  }
};
var CharacterGenderArray = Object.keys(
  CharacterGenderObj
);
var CharacterGenderSelection = CharacterGenderArray.map((key) => ({
  label: CharacterGenderObj[key].label,
  description: CharacterGenderObj[key].description,
  value: key
}));
var CharacterSpeciesObj = {
  HUMAIN: {
    label: "Humain",
    description: "Personnage qui a une apparence physique associ\xE9e \xE0 un humain, avec des caract\xE9ristiques comme des yeux, des cheveux, une peau claire, des mains et des pieds humains, etc."
  },
  ELFE: {
    label: "Elfe",
    description: "Personnage avec des caract\xE9ristiques physiques associ\xE9es \xE0 l'elfe."
  },
  NAIN: {
    label: "Nain",
    description: "Personnage avec des caract\xE9ristiques physiques associ\xE9es \xE0 un nain."
  },
  LEZARD: {
    label: "L\xE9zard",
    description: "Personnage avec des caract\xE9ristiques physiques associ\xE9es \xE0 un l\xE9zard."
  },
  DRAGON: {
    label: "Dragon",
    description: "Personnage avec des caract\xE9ristiques physiques associ\xE9es \xE0 un dragon."
  },
  ORC: {
    label: "Orc",
    description: "Personnage avec des caract\xE9ristiques physiques associ\xE9es \xE0 l'orc."
  },
  AUTRE: {
    label: "Autre",
    description: "Personnage dont la cat\xE9gorie ne correspond pas \xE0 celles propos\xE9es."
  }
};
var CharacterSpeciesArray = Object.keys(
  CharacterSpeciesObj
);
var CharacterSpeciesSelection = CharacterSpeciesArray.map((key) => ({
  label: CharacterSpeciesObj[key].label,
  description: CharacterSpeciesObj[key].description,
  value: key
}));

// src/utils/_companyUtil.ts
var CompanyTypeObj = {
  STUDIO: "Studio",
  PRODUCER: "Producteur"
};
var CompanyTypeArray = Object.keys(CompanyTypeObj);
var CompanyTypeSelection = CompanyTypeArray.map((key) => ({
  label: CompanyTypeObj[key],
  value: key
}));

// src/utils/_global.ts
var TargetPathObj = {
  User: "Utilisateur",
  // Medias
  Groupe: "Groupe",
  Manga: "Manga",
  Anime: "Anime",
  Person: "Personne",
  Character: "Personnage",
  Track: "Musique",
  Company: "Soci\xE9t\xE9",
  //
  Image: "Image",
  Patch: "Mise \xE0 jour",
  Activity: "Activit\xE9",
  Report: "Signalement"
};
var TargetPathArray = Object.keys(TargetPathObj);
var TargetPathSelection = TargetPathArray.map((key) => ({
  label: TargetPathObj[key],
  value: key
}));

// src/utils/_imageUtil.ts
var ImageLabelObj = {
  COVER: "Couverture",
  BANNER: "Banni\xE8re",
  AVATAR: "Avatar",
  LOGO: "Logo"
};
var ImageLabelArray = Object.keys(ImageLabelObj);
var ImageLabelSelection = ImageLabelArray.map((key) => ({
  label: ImageLabelObj[key],
  value: key
}));

// src/utils/_mangaUtil.ts
var MangaFormatObj = {
  MANGA: {
    label: "Manga",
    description: "Manga japonais."
  },
  MANHWA: {
    label: "Manhwa",
    description: "Une bande dessin\xE9e cor\xE9enne."
  },
  MANHUA: {
    label: "Manhua",
    description: "Une bande dessin\xE9e chinoise."
  },
  LIGHT_NOVEL: {
    label: "Light novel",
    description: "Un roman japonais qui est destin\xE9 \xE0 un public adulte et qui se lit sous forme de livres."
  },
  WEB_LOVEL: {
    label: "Web novel",
    description: "Un roman qui est publi\xE9 en ligne et qui se lit dans un navigateur."
  },
  GRAPHIC_NOVEL: {
    label: "Graphic novel",
    description: "Un livre qui contient des images en noir et blanc ou en couleur, qui raconte une histoire."
  },
  DOUJINSHI: {
    label: "Doujinshi",
    description: "Un travail amateur de bande dessin\xE9e, g\xE9n\xE9ralement cr\xE9\xE9 par des fans de la s\xE9rie ou de l'\u0153uvre originale."
  },
  ONE_SHOT: {
    label: "One shot",
    description: "Une histoire qui se termine apr\xE8s un seul chapitre ou un seul volume."
  },
  OTHER: {
    label: "Autre",
    description: "Le type de source n'est pas disponible dans ceux propos\xE9es."
  }
};
var MangaFormatArray = Object.keys(MangaFormatObj);
var MangaFormatSelection = MangaFormatArray.map((key) => ({
  label: MangaFormatObj[key].label,
  description: MangaFormatObj[key].description,
  value: key
}));

// src/utils/_mediaUtil.ts
var MediaSourceObj = {
  ORIGINAL: {
    label: "Original",
    description: "A \xE9t\xE9 cr\xE9\xE9 de mani\xE8re originale et ne se base sur aucune \u0153uvre pr\xE9existante."
  },
  MANGA: {
    label: "Manga",
    description: "Bas\xE9 sur un manga japonais."
  },
  MANHWA: {
    label: "Manhwa",
    description: "Bas\xE9 sur un manhwa, une bande dessin\xE9e sud-cor\xE9enne."
  },
  MANHUA: {
    label: "Manhua",
    description: "Bas\xE9 sur un manhua, une bande dessin\xE9e chinoise."
  },
  LIGHT_NOVEL: {
    label: "Light novel",
    description: "Bas\xE9 sur un light novel, un type de roman japonais destin\xE9 aux jeunes adultes."
  },
  VISUAL_NOVEL: {
    label: "Visual novel",
    description: "Bas\xE9 sur un visual novel, un type de jeu vid\xE9o interactif japonais qui utilise principalement du texte narratif."
  },
  WEB_NOVEL: {
    label: "Web novel",
    description: "Bas\xE9 sur un web novel, un roman publi\xE9 en ligne."
  },
  GAME: {
    label: "Jeu video",
    description: "Bas\xE9 sur un jeu vid\xE9o."
  },
  NOVEL: {
    label: "Roman",
    description: "Bas\xE9 sur un roman."
  },
  ANIME: {
    label: "Anime",
    description: "Bas\xE9 sur une autre s\xE9rie d'anime."
  }
};
var MediaSourceArray = Object.keys(MediaSourceObj);
var MediaSourceSelection = MediaSourceArray.map((key) => ({
  label: MediaSourceObj[key].label,
  description: MediaSourceObj[key].description,
  value: key
}));
var MediaStatusObj = {
  AIRING: {
    label: "En cours",
    value: "AIRING",
    description: "L'anime est actuellement en cours de diffusion."
  },
  PAUSED: {
    label: "En pause",
    value: "PAUSED",
    description: "La diffusion de l'anime est temporairement interrompue."
  },
  ENDED: {
    label: "Termin\xE9",
    value: "ENDED",
    description: "L'anime a termin\xE9 sa diffusion."
  },
  STOPPED: {
    label: "Arr\xEAt\xE9",
    value: "STOPPED",
    description: "La diffusion de l'anime a \xE9t\xE9 arr\xEAt\xE9e avant la fin pr\xE9vue."
  },
  POSTONED: {
    label: "Report\xE9",
    value: "POSTONED",
    description: "La diffusion de l'anime a \xE9t\xE9 report\xE9e \xE0 une date ult\xE9rieure."
  },
  SOON: {
    label: "Bient\xF4t",
    value: "SOON",
    description: "L'anime commencera \xE0 \xEAtre diffus\xE9 prochainement."
  },
  any: {
    label: "Inconnu",
    value: "any",
    description: "Le statut de diffusion de l'anime est inconnu."
  }
};
var MediaStatusArray = Object.keys(MediaStatusObj);
var MediaStatusSelection = MediaStatusArray.map((key) => ({
  label: MediaStatusObj[key].label,
  description: MediaStatusObj[key].description,
  value: key
}));
var MediaParentLabelObj = {
  SEQUEL: {
    label: "Suite directe",
    description: "C\u2019est la continuation directe de l\u2019histoire principale."
  },
  SPIN_OFF: {
    label: "Spin-off",
    description: "Se concentre sur un personnage secondaire ou un aspect de l\u2019univers de la s\xE9rie originale. L\u2019intrigue est g\xE9n\xE9ralement ind\xE9pendante de l\u2019histoire principale."
  },
  ALTERNATIVE: {
    label: "Suite alternative",
    description: "Propose une version diff\xE9rente de l\u2019histoire originale, souvent avec des changements majeurs dans l\u2019intrigue, les personnages ou le monde."
  },
  REBOOT: {
    label: "R\xE9adaptation",
    description: "Reprend l\u2019histoire originale mais la raconte d\u2019une mani\xE8re nouvelle, souvent avec des changements dans le style, le ton ou l\u2019interpr\xE9tation des personnages."
  },
  FILM: {
    label: "Film",
    description: "Le film peut \xEAtre une continuation de l\u2019histoire, une histoire alternative, ou une r\xE9capitulation de la s\xE9rie avec des sc\xE8nes suppl\xE9mentaires."
  }
};
var MediaParentLabelArray = Object.keys(
  MediaParentLabelObj
);
var MediaParentLabelSelection = MediaParentLabelArray.map((key) => ({
  label: MediaParentLabelObj[key].label,
  description: MediaParentLabelObj[key].description,
  value: key
}));
var MediaGenresObj = {
  ACTION: {
    label: "Action",
    value: "ACTION",
    description: "Sa bouge beaucoup."
  },
  AVENTURE: {
    label: "Aventure",
    value: "AVENTURE",
    description: "Suiviez les aventures des personnage(s)."
  },
  COMEDIE: {
    label: "Com\xE9die",
    value: "COMEDIE",
    description: "Tr\xE8s dr\xF4le ou du moin c'est le but."
  },
  DRAME: {
    label: "Drame",
    value: "DRAME",
    description: "Drama."
  },
  FANTAISIE: {
    label: "Fantaisie",
    value: "FANTAISIE",
    description: "S'\xE9loigner de la r\xE9alit\xE9."
  },
  FANTASTIQUE: {
    label: "Fantastique",
    value: "FANTASTIQUE",
    description: "Le monde est fantastique."
  },
  HORREUR: {
    label: "Horreur",
    value: "HORREUR",
    description: "Le but c'est d'avoir peur."
  },
  ROMANCE: {
    label: "Romance",
    value: "ROMANCE",
    description: "Romance."
  },
  SCI_FI: {
    label: "Sci-fi",
    value: "SCI_FI",
    description: "Science-fiction."
  },
  SPORTS: {
    label: "Sports",
    value: "SPORTS",
    description: "Un sport est le th\xE8me principal de l'histoire."
  },
  THRILLER: {
    label: "Thriller",
    value: "THRILLER",
    description: "Le but c'est de faire peur."
  },
  MECHA: {
    label: "Mecha",
    value: "MECHA",
    description: "Des personnages utilisent des robots et des v\xE9hicules militaires."
  },
  MYSTERE: {
    label: "Myst\xE8re",
    value: "MYSTERE",
    description: "Des \xE9nigmes ou des myst\xE8res a r\xE9soudres."
  },
  PSYCHOLOGIQUE: {
    label: "Psychologique",
    value: "PSYCHOLOGIQUE",
    description: "Se concentre sur les \xE9tats \xE9motionnels intenses des personnages et sur la repr\xE9sentation de leurs pens\xE9es et de leur psychologie."
  },
  ISEKAI: {
    label: "Isekai",
    value: "ISEKAI",
    description: "Truck-kun."
  },
  HAREM: {
    label: "Harem",
    value: "HAREM",
    description: "Personnage masculin qui est entour\xE9 de personnages f\xE9minin."
  },
  REVERSE_HAREM: {
    label: "Reverse Harem",
    value: "REVERSE_HAREM",
    description: "Personnage f\xE9minin qui est entour\xE9 de personnages masculin."
  },
  ECCHI: {
    label: "Ecchi",
    value: "ECCHI",
    description: "Des personnages ont des situations \xE9rotiques explicites."
  },
  SLICE_OF_LIFE: {
    label: "Slice of Life",
    value: "SLICE_OF_LIFE",
    description: "Des personnages vivent des histoires quotidiennes."
  },
  YAOI: {
    label: "Yaoi",
    value: "YAOI",
    description: "Masculin + Masculin"
  },
  YURI: {
    label: "Yuri",
    value: "YURI",
    description: "Feminin + Feminin"
  },
  SHOUNEN: {
    label: "Sh\u014Dnen",
    value: "SHOUNEN",
    description: ""
  },
  SEINEN: {
    label: "Seinen",
    value: "SEINEN",
    description: ""
  },
  SHOJO: {
    label: "Sh\u014Djo",
    value: "SHOJO",
    description: ""
  },
  JOSEI: {
    label: "Josei",
    value: "JOSEI",
    description: ""
  },
  KODOMOMUKE: {
    label: "Kodomo Mukashi",
    value: "KODOMOMUKE",
    description: ""
  }
};
var MediaGenresArray = Object.keys(MediaGenresObj);
var MediaGenresSelection = MediaGenresArray.map((key) => ({
  label: MediaGenresObj[key].label,
  description: MediaGenresObj[key].description,
  value: key
}));
var dateTimeToZod = (date) => {
  if (!date) return void 0;
  if (typeof date === "string") date = new Date(date);
  const formatedYear = new Intl.DateTimeFormat("fr-FR", {
    timeZone: "Europe/Paris",
    year: "numeric"
  }).format(date);
  const formatedMonth = new Intl.DateTimeFormat("fr-FR", {
    timeZone: "Europe/Paris",
    month: "2-digit"
  }).format(date);
  const formatedDay = new Intl.DateTimeFormat("fr-FR", {
    timeZone: "Europe/Paris",
    day: "2-digit"
  }).format(date);
  const formatedTime = new Intl.DateTimeFormat("fr-FR", {
    timeZone: "Europe/Paris",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
  const formated = `${formatedYear}-${formatedMonth}-${formatedDay}T${formatedTime}`;
  return formated;
};
var dateToZod = (date) => {
  if (!date) return void 0;
  if (typeof date === "string") date = new Date(date);
  const formatedYear = new Intl.DateTimeFormat("fr-FR", {
    timeZone: "Europe/Paris",
    year: "numeric"
  }).format(date);
  const formatedMonth = new Intl.DateTimeFormat("fr-FR", {
    timeZone: "Europe/Paris",
    month: "2-digit"
  }).format(date);
  const formatedDay = new Intl.DateTimeFormat("fr-FR", {
    timeZone: "Europe/Paris",
    day: "2-digit"
  }).format(date);
  const formated = `${formatedYear}-${formatedMonth}-${formatedDay}`;
  return formated;
};

// src/utils/_patchUtil.ts
var PatchTypeObj = {
  CREATE: "Cr\xE9ation",
  UPDATE: "Modification",
  DELETE: "Suppression",
  RESTORE: "Restauration"
};
var PatchTypeArray = Object.keys(PatchTypeObj);
var PatchTypeSelection = PatchTypeArray.map((key) => ({
  label: PatchTypeObj[key],
  value: key
}));
var PatchStatusObj = {
  PENDING: "En attente",
  PROGRESS: "En cours de v\xE9rification",
  ACCEPTED: "Accept\xE9",
  REJECTED: "Refus\xE9"
};
var PatchStatusArray = Object.keys(PatchStatusObj);
var PatchStatusSelection = PatchStatusArray.map((key) => ({
  label: PatchStatusObj[key],
  value: key
}));

// src/utils/_personUtil.ts
var PersonRoleObj = {
  DOUBLAGE_SEIYU: "Seiy\u016B (Com\xE9dien de doublage)",
  AUTEUR: "Auteur de l'oeuvre",
  EDITEUR: "\xC9diteur",
  PRODUCTEUR: "Producteur",
  REALISATEUR: "R\xE9alisateur",
  REALISATEUR_EPISODES: "R\xE9alisateur \xE9pisodes",
  REALISATEUR_MISEENPAGE: "R\xE9alisateur mise en page",
  DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE: "Directeur artistique et cin\xE9matrographique",
  DIRECTEUR_ANIMATION: "Directeur d'animation",
  CONCEPTEUR: "Concepteur",
  ANIMATEUR_PRINCIPAL: "Animateur principal",
  ANIMATEUR_INTERMEDIAIRE: "Animateur interm\xE9diaire",
  COLORISTES: "Coloristes",
  DIRECTEUR_ENREGISTREMENT: "Directeur d'enregistrement",
  SCENARISTE: "Scenariste",
  ANIMATEUR_3D: "Animateur 3D",
  METTEUR_EN_SCENE: "Metteur en sc\xE8ne",
  SUPERVISEUR: "Superviseur",
  MONTEUR: "Monteur",
  RESPONSABLE_DROITS: "Responsable de droits",
  PRODUCTEUR_MUSIQUE: "Producteur musique",
  RESPONSABLE_MARKETING: "Responsable marketing",
  DIFFUSEUR: "Diffuseur",
  STORYBOARDER: "Storyboarder",
  ARTISTE_VFX: "Artiste VFX",
  INGENIEUR_SON: "Ing\xE9nieur Son",
  DIRECTEUR_DOUBLAGE: "Directeur doublage",
  TRADUCTEUR: "Traducteur",
  MANGAKA: "Mangaka",
  CHARACTER_DESIGNER: "Character Designer",
  DESSINATEUR_DECORS: "Dessinateur de decors",
  REALISATEUR_MISE_EN_PAGE: "Realisateur mise en page",
  COMPOSITEUR: "Compositeur",
  PAROLIER: "Parolier",
  ARRANGEUR: "Arrangeur",
  MUSICIEN: "Musicien",
  CHANTEUR_EUSE: "Chanteur/euse",
  CHEF_ORCHESTRE: "Chef d'orchestre",
  PRODUCTEUR_MUSICAL: "Producteur musical",
  DESIGNER_SONORE: "Designer sonore",
  MIXEUR: "Mixeur"
};
var PersonRoleArray = Object.keys(PersonRoleObj);
var PersonRoleSelection = PersonRoleArray.map((key) => ({
  label: PersonRoleObj[key],
  value: key
}));

// src/utils/_reportUtil.ts
var ReportSubjectObj = {
  USER_IMAGE: "Les images que l'utilisateur utilise sont inappropri\xE9es",
  USER_INFO: "Les informations mis par l'utilisateur sont inappropri\xE9es"
};
var ReportSubjectArray = Object.keys(
  ReportSubjectObj
);
var ReportSubjectSelection = ReportSubjectArray.map((key) => ({
  label: ReportSubjectObj[key],
  value: key
}));
var ReportStatusObj = {
  PENDING: "En attente",
  REJECTED: "Refus\xE9",
  VERIFIED: "V\xE9rifi\xE9"
};
var ReportStatusArray = Object.keys(
  ReportStatusObj
);
var ReportStatusSelection = ReportStatusArray.map((key) => ({
  label: ReportStatusObj[key],
  value: key
}));

// src/utils/_trackUtil.ts
var TrackTypeObj = {
  OPENING: {
    label: "Opening",
    description: "G\xE9n\xE9rique de d\xE9but",
    value: "OPENING"
  },
  ENDING: {
    label: "Ending",
    description: "G\xE9n\xE9rique de fin",
    value: "ENDING"
  },
  BGM: {
    label: "BGM",
    description: "Musique de fond",
    value: "BGM"
  },
  INSERT: {
    label: "INSERT",
    description: "Musique ponctuelle et unique",
    value: "INSERT"
  }
};
var TrackTypeArray = Object.keys(TrackTypeObj);
var TrackTypeSelection = TrackTypeArray.map((key) => ({
  label: TrackTypeObj[key].label,
  description: TrackTypeObj[key].description,
  value: key
}));

// src/utils/_userUtil.ts
var UserRolesObj = {
  MEMBER: { label: "Membre", level: 0 },
  PREMIUM: { label: "Premium", level: 1 },
  // 1 << 0"Premium",
  MODERATOR: { label: "Mod\xE9rateur", level: 1 << 1 },
  // 1 << 1"Modérateur",
  ANIME_MODERATOR: { label: "Mode\u0301rateur - Anime", level: 1 << 2 },
  // 1 << 2"Modérateur - Anime",
  MANGA_MODERATOR: { label: "Mode\u0301rateur - Manga", level: 1 << 3 },
  // 1 << 3"Modérateur - Manga",
  CHARACTER_MODERATOR: { label: "Mode\u0301rateur - Personnage", level: 1 << 4 },
  // 1 << 4"Modérateur - Personnage",
  PERSON_MODERATOR: { label: "Mode\u0301rateur - Personnes", level: 1 << 5 },
  // 1 << 5"Modérateur - Personnes",
  TRACK_MODERATOR: { label: "Mode\u0301rateur - Musique", level: 1 << 6 },
  // 1 << 6"Modérateur - Musique",
  COMPANY_MODERATOR: { label: "Mode\u0301rateur - Soci\xE9t\xE9", level: 1 << 7 },
  // 1 << 7"Modérateur - Société",
  ADMINISTRATOR: { label: "Administrateur", level: 1 << 8 },
  // 1 << 8"Administrateur",
  ACTUNIME: { label: "Actunime", level: 1 << 9 }
  // 1 << 9"Actunime",
};
var UserRolesLevel = Object.fromEntries(
  Object.keys(UserRolesObj).map((key) => [
    key,
    UserRolesObj[key].level
  ])
);
var UserRolesLabel = Object.fromEntries(
  Object.keys(UserRolesObj).map((key) => [
    key,
    UserRolesObj[key].label
  ])
);
var UserRolesArray = Object.keys(UserRolesObj);
var UserRolesSelection = UserRolesArray.map((key) => ({
  label: UserRolesObj[key].label,
  value: key
}));
var userHasRole = (userRoles, roles) => {
  if (Array.isArray(roles)) {
    return roles.every((role) => userRoles.includes(role));
  } else {
    return userRoles.includes(roles);
  }
};
var getRoleLevel = (role) => {
  const level = UserRolesLevel[role];
  if (level === void 0) {
    throw "R\xF4le non reconnu";
  }
  return level;
};
var userPermissionLevel = (userRoles) => userRoles.reduce((acc, role) => acc | getRoleLevel(role), 0);
var userPermissionIsHigherThan = (userRoles, roles) => {
  if (Array.isArray(roles)) {
    return roles.every(
      (role) => userPermissionLevel(userRoles) >= getRoleLevel(role)
    );
  } else {
    return userPermissionLevel(userRoles) >= userPermissionLevel([roles]);
  }
};
var UserAnimeListStatusObj = {
  PLANNING: { label: "En attente", value: "PLANNING" },
  WATCHING: { label: "En cours", value: "WATCHING" },
  PAUSED: { label: "En pause", value: "PAUSED" },
  COMPLETED: { label: "Termin\xE9", value: "COMPLETED" },
  DROPPED: { label: "Abandonn\xE9", value: "DROPPED" }
};
var UserAnimeListStatusArray = Object.keys(UserAnimeListStatusObj);
var UserAnimeListStatusSelection = UserAnimeListStatusArray.map((key) => ({
  label: UserAnimeListStatusObj[key].label,
  value: key
}));

// src/utils/_permissionUtil.ts
var PermissionsObj = {
  // Administrateurs modifications directes;
  GROUPE_VERIFY: "V\xE9rifier un groupe",
  GROUPE_CREATE: "Ajouter un groupe",
  GROUPE_PATCH: "Modifier un groupe",
  GROUPE_DELETE: "Supprimer un groupe",
  GROUPE_REQUEST_DELETE: "Supprimer la demande d'ajout/modification d'un groupe",
  /** */
  ANIME_VERIFY: "V\xE9rifier un anime",
  ANIME_CREATE: "Ajouter un anime",
  ANIME_PATCH: "Modifier un anime",
  ANIME_DELETE: "Supprimer un anime",
  ANIME_REQUEST_DELETE: "Supprimer la demande d'ajout/modification d'un anime",
  /** */
  MANGA_VERIFY: "V\xE9rifier un manga",
  MANGA_CREATE: "Ajouter un manga",
  MANGA_PATCH: "Modifier un manga",
  MANGA_DELETE: "Supprimer un manga",
  MANGA_REQUEST_DELETE: "Supprimer la demande d'ajout/modification d'un manga",
  /** */
  CHARACTER_VERIFY: "V\xE9rifier un personnage",
  CHARACTER_CREATE: "Ajouter un personnage",
  CHARACTER_PATCH: "Modifier un personnage",
  CHARACTER_DELETE: "Supprimer un personnage",
  CHARACTER_REQUEST_DELETE: "Supprimer la demande d'ajout/modification d'un personnage",
  /** */
  PERSON_VERIFY: "V\xE9rifier une personnalit\xE9",
  PERSON_CREATE: "Ajouter une personnalit\xE9",
  PERSON_PATCH: "Modifier une personnalit\xE9",
  PERSON_DELETE: "Supprimer une personnalit\xE9",
  PERSON_REQUEST_DELETE: "Supprimer la demande d'ajout/modification d'une personnalit\xE9",
  /** */
  COMPANY_VERIFY: "V\xE9rifier une soci\xE9t\xE9",
  COMPANY_CREATE: "Ajouter une soci\xE9t\xE9",
  COMPANY_PATCH: "Modifier une soci\xE9t\xE9",
  COMPANY_DELETE: "Supprimer une soci\xE9t\xE9",
  COMPANY_REQUEST_DELETE: "Supprimer la demande d'ajout/modification d'une soci\xE9t\xE9",
  /** */
  TRACK_VERIFY: "V\xE9rifier une musique",
  TRACK_CREATE: "Ajouter une musique",
  TRACK_PATCH: "Modifier une musique",
  TRACK_DELETE: "Supprimer une musique",
  TRACK_REQUEST_DELETE: "Supprimer la demande d'ajout/modification d'une musique",
  /** */
  IMAGE_VERIFY: "V\xE9rifier une image",
  IMAGE_CREATE: "Ajouter une image",
  IMAGE_PATCH: "Modifier une image",
  IMAGE_DELETE: "Supprimer une image",
  IMAGE_REQUEST_DELETE: "Supprimer la demande d'ajout/modification d'une image",
  /** */
  USER_CREATE: "Ajouter un utilisateur",
  USER_PATCH: "Modifier un utilisateur",
  USER_DELETE: "Supprimer un utilisateur",
  // Modérateurs gestions des demandes
  ANIME_REQUEST_VERIFY: "Accepter/Refuser la demande d'ajout/modification d'un anime",
  ANIME_REQUEST_PATCH: "Modifier la demande d'ajout/modification d'un anime",
  /** */
  GROUPE_REQUEST_VERIFY: "Accepter/Refuser la demande d'ajout/modification d'un groupe",
  GROUPE_REQUEST_PATCH: "Modifier la demande d'ajout/modification d'un groupe",
  /** */
  IMAGE_REQUEST_VERIFY: "Accepter/Refuser la demande d'ajout/modification d'une image",
  IMAGE_REQUEST_PATCH: "Modifier la demande d'ajout/modification d'une image",
  /** */
  MANGA_REQUEST_VERIFY: "Accepter/Refuser la demande d'ajout/modification d'un manga",
  MANGA_REQUEST_PATCH: "Modifier la demande d'ajout/modification d'un manga",
  /** */
  CHARACTER_REQUEST_VERIFY: "Accepter/Refuser la demande d'ajout/modification d'un personnage",
  CHARACTER_REQUEST_PATCH: "Modifier la demande d'ajout/modification d'un personnage",
  /** */
  PERSON_REQUEST_VERIFY: "Accepter/Refuser la demande d'ajout/modification d'une personne",
  PERSON_REQUEST_PATCH: "Modifier la demande d'ajout/modification d'une personne",
  /** */
  COMPANY_REQUEST_VERIFY: "Accepter/Refuser la demande d'ajout/modification d'une soci\xE9t\xE9",
  COMPANY_REQUEST_PATCH: "Modifier la demande d'ajout/modification d'une soci\xE9t\xE9",
  /** */
  TRACK_REQUEST_VERIFY: "Accepter/Refuser la demande d'ajout/modification d'une musique",
  TRACK_REQUEST_PATCH: "Modifier la demande d'ajout/modification d'une musique",
  // Membres permissions public
  ANIME_CREATE_REQUEST: "Demander l'ajout d'un anime",
  ANIME_PATCH_REQUEST: "Demande la modification d'un anime",
  /** */
  GROUPE_CREATE_REQUEST: "Demander l'ajout d'un groupe",
  GROUPE_PATCH_REQUEST: "Demande la modification d'un groupe",
  /** */
  IMAGE_CREATE_REQUEST: "Demander l'ajout d'une image",
  IMAGE_PATCH_REQUEST: "Demande la modification d'une image",
  /** */
  MANGA_CREATE_REQUEST: "Demander l'ajout d'un manga",
  MANGA_PATCH_REQUEST: "Demande la modification d'un manga",
  /** */
  CHARACTER_CREATE_REQUEST: "Demander l'ajout d'un personnage",
  CHARACTER_PATCH_REQUEST: "Demande la modification d'un personnage",
  /** */
  PERSON_CREATE_REQUEST: "Demander l'ajout d'une personnalit\xE9",
  PERSON_PATCH_REQUEST: "Demande la modification d'une personnalit\xE9",
  /** */
  COMPANY_CREATE_REQUEST: "Demander l'ajout d'une soci\xE9t\xE9",
  COMPANY_PATCH_REQUEST: "Demande la modification d'une soci\xE9t\xE9",
  /** */
  TRACK_CREATE_REQUEST: "Demander l'ajout d'une musique",
  TRACK_PATCH_REQUEST: "Demande la modification d'une musique"
};
var PermissionsArray = Object.keys(PermissionsObj);
var PermissionsSelection = PermissionsArray.map((key) => ({
  label: PermissionsObj[key],
  value: key
}));
var CheckPermissions = (Permissions, accountPermissions, strict = true) => {
  let valid = false;
  if (!strict)
    valid = Permissions.some(
      (role) => accountPermissions.find((r) => r === role)
    );
  else
    valid = Permissions.every(
      (role) => accountPermissions.find((r) => r === role)
    );
  return valid;
};

// src/utils/_apiUtil.ts
var APICodeObj = {
  OK: { label: "OK", value: 200 },
  NOT_FOUND: { label: "Donn\xE9es introuvables", value: 404 },
  SERVER_ERROR: { label: "Erreur serveur", value: 500 },
  EMPTY_CHANGES: { label: "Aucun changement", value: 400 },
  BAD_ENTRY: { label: "Mauvaise entr\xE9e", value: 400 },
  FORBIDDEN: { label: "Interdit", value: 403 },
  UNAUTHORIZED: { label: "Non autoris\xE9", value: 401 },
  BAD_REQUEST: { label: "Mauvaise requ\xEAte", value: 400 },
  BAD_RESPONSE: { label: "Mauvaise r\xE9ponse", value: 400 },
  TOO_MANY_REQUESTS: { label: "Trop de requ\xEAtes", value: 429 }
};
var APICodeArray = Object.keys(APICodeObj);
var APICodeSelection = APICodeArray.map((key) => ({
  label: APICodeObj[key].label,
  value: key
}));
export {
  APICodeArray,
  APICodeObj,
  APICodeSelection,
  ActivityActionArray,
  ActivityActionObj,
  ActivityActionSelection,
  ActivityTypeArray,
  ActivityTypeObj,
  ActivityTypeSelection,
  AnimeFormatArray,
  AnimeFormatObj,
  AnimeFormatSelection,
  CharacterGenderArray,
  CharacterGenderObj,
  CharacterGenderSelection,
  CharacterRoleArray,
  CharacterRoleObj,
  CharacterRoleSelection,
  CharacterSpeciesArray,
  CharacterSpeciesObj,
  CharacterSpeciesSelection,
  CheckPermissions,
  CompanyTypeArray,
  CompanyTypeObj,
  CompanyTypeSelection,
  ImageLabelArray,
  ImageLabelObj,
  ImageLabelSelection,
  MangaFormatArray,
  MangaFormatObj,
  MangaFormatSelection,
  MediaGenresArray,
  MediaGenresObj,
  MediaGenresSelection,
  MediaParentLabelArray,
  MediaParentLabelObj,
  MediaParentLabelSelection,
  MediaSourceArray,
  MediaSourceObj,
  MediaSourceSelection,
  MediaStatusArray,
  MediaStatusObj,
  MediaStatusSelection,
  PatchStatusArray,
  PatchStatusObj,
  PatchStatusSelection,
  PatchTypeArray,
  PatchTypeObj,
  PatchTypeSelection,
  PermissionsArray,
  PermissionsObj,
  PermissionsSelection,
  PersonRoleArray,
  PersonRoleObj,
  PersonRoleSelection,
  ReportStatusArray,
  ReportStatusObj,
  ReportStatusSelection,
  ReportSubjectArray,
  ReportSubjectObj,
  ReportSubjectSelection,
  TargetPathArray,
  TargetPathObj,
  TargetPathSelection,
  TrackTypeArray,
  TrackTypeObj,
  TrackTypeSelection,
  UserAnimeListStatusArray,
  UserAnimeListStatusObj,
  UserAnimeListStatusSelection,
  UserRolesArray,
  UserRolesLabel,
  UserRolesLevel,
  UserRolesObj,
  UserRolesSelection,
  dateTimeToZod,
  dateToZod,
  getRoleLevel,
  userHasRole,
  userPermissionIsHigherThan,
  userPermissionLevel
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3V0aWxzL19hY3Rpdml0eVV0aWwudHMiLCAiLi4vc3JjL3V0aWxzL19hbmltZVV0aWwudHMiLCAiLi4vc3JjL3V0aWxzL19jaGFyYWN0ZXJVdGlsLnRzIiwgIi4uL3NyYy91dGlscy9fY29tcGFueVV0aWwudHMiLCAiLi4vc3JjL3V0aWxzL19nbG9iYWwudHMiLCAiLi4vc3JjL3V0aWxzL19pbWFnZVV0aWwudHMiLCAiLi4vc3JjL3V0aWxzL19tYW5nYVV0aWwudHMiLCAiLi4vc3JjL3V0aWxzL19tZWRpYVV0aWwudHMiLCAiLi4vc3JjL3V0aWxzL19wYXRjaFV0aWwudHMiLCAiLi4vc3JjL3V0aWxzL19wZXJzb25VdGlsLnRzIiwgIi4uL3NyYy91dGlscy9fcmVwb3J0VXRpbC50cyIsICIuLi9zcmMvdXRpbHMvX3RyYWNrVXRpbC50cyIsICIuLi9zcmMvdXRpbHMvX3VzZXJVdGlsLnRzIiwgIi4uL3NyYy91dGlscy9fcGVybWlzc2lvblV0aWwudHMiLCAiLi4vc3JjL3V0aWxzL19hcGlVdGlsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgY29uc3QgQWN0aXZpdHlUeXBlT2JqID0ge1xuICBQVUJMSUM6IFwiUHVibGljXCIsXG4gIE1FTUJFUjogXCJNZW1icmVcIixcbiAgTU9ERVJBVElPTjogXCJNb2RlXHUwMzAxcmF0aW9uXCIsXG4gIFNZU1RFTTogXCJTeXN0XHUwMEU4bWVcIixcbn07XG5cbmV4cG9ydCB0eXBlIElBY3Rpdml0eVR5cGUgPSBrZXlvZiB0eXBlb2YgQWN0aXZpdHlUeXBlT2JqO1xuZXhwb3J0IGNvbnN0IEFjdGl2aXR5VHlwZUFycmF5ID0gT2JqZWN0LmtleXMoXG4gIEFjdGl2aXR5VHlwZU9iaixcbikgYXMgSUFjdGl2aXR5VHlwZVtdICYgW3N0cmluZywgLi4uc3RyaW5nW11dO1xuZXhwb3J0IGNvbnN0IEFjdGl2aXR5VHlwZVNlbGVjdGlvbiA9IEFjdGl2aXR5VHlwZUFycmF5Lm1hcCgoa2V5KSA9PiAoe1xuICBsYWJlbDogQWN0aXZpdHlUeXBlT2JqW2tleV0sXG4gIHZhbHVlOiBrZXksXG59KSk7XG5cbmV4cG9ydCBjb25zdCBBY3Rpdml0eUFjdGlvbk9iaiA9IHtcbiAgUk9MRVNfQ0hBTkdFUzogXCJDaGFuZ2VtZW50IGRlIHJvXHUwMzAybGVzXCIsXG4gIFBSRU1JVU1fQ0hBTkdFUzogXCJNaXNlIGEgam91ciBkdSBwcmVtaXVtXCIsXG4gIERJU0FCTEVfTUVNQkVSOiBcIkRcdTAwRTlzYWN0aXZhdGlvbiBkJ3VuIG1lbWJyZVwiLFxuICBFTkFCTEVfTUVNQkVSOiBcIkFjdGl2YXRpb24gZCd1biBtZW1icmVcIixcbiAgUkVQT1JUX1NUQVRVU19DSEFOR0VTOiBcIkNoYW5nZW1lbnQgZHUgc3RhdHV0IGR1IHNpZ25hbGVtZW50XCIsXG4gIFVQREFURV9TVEFUVVNfQ0hBTkdFUzogXCJDaGFuZ2VtZW50IGR1IHN0YXR1dCBkZSBsYSBtaXNlIFx1MDBFMCBqb3VyXCIsXG4gIFVQREFURV9FRElUX0NIQU5HRVM6IFwiRWRpdGlvbiBkZSBsYSBtaXNlIFx1MDBFMCBqb3VyXCIsXG5cbiAgQ1JFQVRFX0FOSU1FOiBcIkNyZWF0aW9uIGQndW4gYW5pbWVcIixcbiAgQ1JFQVRFX01BTkdBOiBcIkNyZWF0aW9uIGQndW4gbWFuZ2FcIixcbiAgQ1JFQVRFX1BFUlNPTjogXCJDcmVhdGlvbiBkJ3VuZSBwZXJzb25uZVwiLFxuICBDUkVBVEVfR1JPVVBFOiBcIkNyZWF0aW9uIGQndW4gZ3JvdXBlXCIsXG4gIENSRUFURV9DSEFSQUNURVI6IFwiQ3JlYXRpb24gZCd1biBwZXJzb25uYWdlXCIsXG4gIENSRUFURV9UUkFDSzogXCJDcmVhdGlvbiBkJ3VuZSBtdXNpcXVlXCIsXG4gIENSRUFURV9DT01QQU5ZOiBcIkNyZWF0aW9uIGQndW5lIHNvY2lcdTAwRTl0XHUwMEU5XCIsXG4gIENSRUFURV9SRVBPUlQ6IFwiQ3JlYXRpb24gZCd1biBzaWduYWxlbWVudFwiLFxuICBDUkVBVEVfSU1BR0U6IFwiQ3JlYXRpb24gZCd1bmUgaW1hZ2VcIixcblxuICBVUERBVEVfQU5JTUU6IFwiTW9kaWZpY2F0aW9uIGQndW4gYW5pbWVcIixcbiAgVVBEQVRFX01BTkdBOiBcIk1vZGlmaWNhdGlvbiBkJ3VuIG1hbmdhXCIsXG4gIFVQREFURV9QRVJTT046IFwiTW9kaWZpY2F0aW9uIGQndW5lIHBlcnNvbm5lXCIsXG4gIFVQREFURV9HUk9VUEU6IFwiTW9kaWZpY2F0aW9uIGQndW4gZ3JvdXBlXCIsXG4gIFVQREFURV9DSEFSQUNURVI6IFwiTW9kaWZpY2F0aW9uIGQndW4gcGVyc29ubmFnZVwiLFxuICBVUERBVEVfVFJBQ0s6IFwiTW9kaWZpY2F0aW9uIGQndW5lIG11c2lxdWVcIixcbiAgVVBEQVRFX0NPTVBBTlk6IFwiTW9kaWZpY2F0aW9uIGQndW5lIHNvY2lcdTAwRTl0XHUwMEU5XCIsXG4gIFVQREFURV9SRVBPUlQ6IFwiTW9kaWZpY2F0aW9uIGQndW4gc2lnbmFsZW1lbnRcIixcbiAgVVBEQVRFX1BBVENIOiBcIk1vZGlmaWNhdGlvbiBkJ3VuZSBtaXNlIFx1MDBFMCBqb3VyXCIsXG4gIFVQREFURV9JTUFHRTogXCJNb2RpZmljYXRpb24gZCd1bmUgaW1hZ2VcIixcblxuICBSRVFVRVNUX0FOSU1FOiBcIkRlbWFuZGUgZCd1biBhbmltZVwiLFxuICBSRVFVRVNUX01BTkdBOiBcIkRlbWFuZGUgZCd1biBtYW5nYVwiLFxuICBSRVFVRVNUX1BFUlNPTjogXCJEZW1hbmRlIGQndW5lIHBlcnNvbm5lXCIsXG4gIFJFUVVFU1RfR1JPVVBFOiBcIkRlbWFuZGUgZCd1biBncm91cGVcIixcbiAgUkVRVUVTVF9DSEFSQUNURVI6IFwiRGVtYW5kZSBkJ3VuIHBlcnNvbm5hZ2VcIixcbiAgUkVRVUVTVF9UUkFDSzogXCJEZW1hbmRlIGQndW5lIG11c2lxdWVcIixcbiAgUkVRVUVTVF9DT01QQU5ZOiBcIkRlbWFuZGUgZCd1bmUgc29jaVx1MDBFOXRcdTAwRTlcIixcbiAgUkVRVUVTVF9JTUFHRTogXCJEZW1hbmRlIGQndW5lIGltYWdlXCIsXG5cblxuICBBQ0NFUFRfQ1JFQVRFX1JFUVVFU1RfQU5JTUU6IFwiQWNjZXB0YXRpb24gZGUgbGEgZGVtYW5kZSBkJ2Fqb3V0IGQndW4gYW5pbWVcIixcbiAgQUNDRVBUX0NSRUFURV9SRVFVRVNUX01BTkdBOiBcIkFjY2VwdGF0aW9uIGRlIGxhIGRlbWFuZGUgZCdham91dCBkJ3VuIG1hbmdhXCIsXG4gIEFDQ0VQVF9DUkVBVEVfUkVRVUVTVF9QRVJTT046IFwiQWNjZXB0YXRpb24gZGUgbGEgZGVtYW5kZSBkJ2Fqb3V0IGQndW5lIHBlcnNvbm5lXCIsXG4gIEFDQ0VQVF9DUkVBVEVfUkVRVUVTVF9HUk9VUEU6IFwiQWNjZXB0YXRpb24gZGUgbGEgZGVtYW5kZSBkJ2Fqb3V0IGQndW4gZ3JvdXBlXCIsXG4gIEFDQ0VQVF9DUkVBVEVfUkVRVUVTVF9DSEFSQUNURVI6IFwiQWNjZXB0YXRpb24gZGUgbGEgZGVtYW5kZSBkJ2Fqb3V0IGQndW4gcGVyc29ubmFnZVwiLFxuICBBQ0NFUFRfQ1JFQVRFX1JFUVVFU1RfVFJBQ0s6IFwiQWNjZXB0YXRpb24gZGUgbGEgZGVtYW5kZSBkJ2Fqb3V0IGQndW5lIG11c2lxdWVcIixcbiAgQUNDRVBUX0NSRUFURV9SRVFVRVNUX0NPTVBBTlk6IFwiQWNjZXB0YXRpb24gZGUgbGEgZGVtYW5kZSBkJ2Fqb3V0IGQndW5lIHNvY2lcdTAwRTl0XHUwMEU5XCIsXG4gIEFDQ0VQVF9DUkVBVEVfUkVRVUVTVF9JTUFHRTogXCJBY2NlcHRhdGlvbiBkZSBsYSBkZW1hbmRlIGQnYWpvdXQgZCd1bmUgaW1hZ2VcIixcblxuICBVUERBVEVfQ1JFQVRFX1JFUVVFU1RfQU5JTUU6IFwiTW9kaWZpY2F0aW9uIGRlIGxhIGRlbWFuZGUgZCdham91dCBkJ3VuIGFuaW1lXCIsXG4gIFVQREFURV9DUkVBVEVfUkVRVUVTVF9NQU5HQTogXCJNb2RpZmljYXRpb24gZGUgbGEgZGVtYW5kZSBkJ2Fqb3V0IGQndW4gbWFuZ2FcIixcbiAgVVBEQVRFX0NSRUFURV9SRVFVRVNUX1BFUlNPTjogXCJNb2RpZmljYXRpb24gZGUgbGEgZGVtYW5kZSBkJ2Fqb3V0IGQndW5lIHBlcnNvbm5lXCIsXG4gIFVQREFURV9DUkVBVEVfUkVRVUVTVF9HUk9VUEU6IFwiTW9kaWZpY2F0aW9uIGRlIGxhIGRlbWFuZGUgZCdham91dCBkJ3VuIGdyb3VwZVwiLFxuICBVUERBVEVfQ1JFQVRFX1JFUVVFU1RfQ0hBUkFDVEVSOiBcIk1vZGlmaWNhdGlvbiBkZSBsYSBkZW1hbmRlIGQnYWpvdXQgZCd1biBwZXJzb25uYWdlXCIsXG4gIFVQREFURV9DUkVBVEVfUkVRVUVTVF9UUkFDSzogXCJNb2RpZmljYXRpb24gZGUgbGEgZGVtYW5kZSBkJ2Fqb3V0IGQndW5lIG11c2lxdWVcIixcbiAgVVBEQVRFX0NSRUFURV9SRVFVRVNUX0NPTVBBTlk6IFwiTW9kaWZpY2F0aW9uIGRlIGxhIGRlbWFuZGUgZCdham91dCBkJ3VuZSBzb2NpXHUwMEU5dFx1MDBFOVwiLFxuICBVUERBVEVfQ1JFQVRFX1JFUVVFU1RfSU1BR0U6IFwiTW9kaWZpY2F0aW9uIGRlIGxhIGRlbWFuZGUgZCdham91dCBkJ3VuZSBpbWFnZVwiLFxuXG4gIERFTllfQ1JFQVRFX1JFUVVFU1RfQU5JTUU6IFwiUmVmdXMgZGUgbGEgZGVtYW5kZSBkJ2Fqb3V0IGQndW4gYW5pbWVcIixcbiAgREVOWV9DUkVBVEVfUkVRVUVTVF9NQU5HQTogXCJSZWZ1cyBkZSBsYSBkZW1hbmRlIGQnYWpvdXQgZCd1biBtYW5nYVwiLFxuICBERU5ZX0NSRUFURV9SRVFVRVNUX1BFUlNPTjogXCJSZWZ1cyBkZSBsYSBkZW1hbmRlIGQnYWpvdXQgZCd1bmUgcGVyc29ubmVcIixcbiAgREVOWV9DUkVBVEVfUkVRVUVTVF9HUk9VUEU6IFwiUmVmdXMgZGUgbGEgZGVtYW5kZSBkJ2Fqb3V0IGQndW4gZ3JvdXBlXCIsXG4gIERFTllfQ1JFQVRFX1JFUVVFU1RfQ0hBUkFDVEVSOiBcIlJlZnVzIGRlIGxhIGRlbWFuZGUgZCdham91dCBkJ3VuIHBlcnNvbm5hZ2VcIixcbiAgREVOWV9DUkVBVEVfUkVRVUVTVF9UUkFDSzogXCJSZWZ1cyBkZSBsYSBkZW1hbmRlIGQnYWpvdXQgZCd1bmUgbXVzaXF1ZVwiLFxuICBERU5ZX0NSRUFURV9SRVFVRVNUX0NPTVBBTlk6IFwiUmVmdXMgZGUgbGEgZGVtYW5kZSBkJ2Fqb3V0IGQndW5lIHNvY2lcdTAwRTl0XHUwMEU5XCIsXG4gIERFTllfQ1JFQVRFX1JFUVVFU1RfSU1BR0U6IFwiUmVmdXMgZGUgbGEgZGVtYW5kZSBkJ2Fqb3V0IGQndW5lIGltYWdlXCIsXG5cbiAgREVMRVRFX0NSRUFURV9SRVFVRVNUX0FOSU1FOiBcIlN1cHByZXNzaW9uIGRlIGxhIGRlbWFuZGUgZCdham91dCBkJ3VuIGFuaW1lXCIsXG4gIERFTEVURV9DUkVBVEVfUkVRVUVTVF9NQU5HQTogXCJTdXBwcmVzc2lvbiBkZSBsYSBkZW1hbmRlIGQnYWpvdXQgZCd1biBtYW5nYVwiLFxuICBERUxFVEVfQ1JFQVRFX1JFUVVFU1RfUEVSU09OOiBcIlN1cHByZXNzaW9uIGRlIGxhIGRlbWFuZGUgZCdham91dCBkJ3VuZSBwZXJzb25uZVwiLFxuICBERUxFVEVfQ1JFQVRFX1JFUVVFU1RfR1JPVVBFOiBcIlN1cHByZXNzaW9uIGRlIGxhIGRlbWFuZGUgZCdham91dCBkJ3VuIGdyb3VwZVwiLFxuICBERUxFVEVfQ1JFQVRFX1JFUVVFU1RfQ0hBUkFDVEVSOiBcIlN1cHByZXNzaW9uIGRlIGxhIGRlbWFuZGUgZCdham91dCBkJ3VuIHBlcnNvbm5hZ2VcIixcbiAgREVMRVRFX0NSRUFURV9SRVFVRVNUX1RSQUNLOiBcIlN1cHByZXNzaW9uIGRlIGxhIGRlbWFuZGUgZCdham91dCBkJ3VuZSBtdXNpcXVlXCIsXG4gIERFTEVURV9DUkVBVEVfUkVRVUVTVF9DT01QQU5ZOiBcIlN1cHByZXNzaW9uIGRlIGxhIGRlbWFuZGUgZCdham91dCBkJ3VuZSBzb2NpXHUwMEU5dFx1MDBFOVwiLFxuICBERUxFVEVfQ1JFQVRFX1JFUVVFU1RfSU1BR0U6IFwiU3VwcHJlc3Npb24gZGUgbGEgZGVtYW5kZSBkJ2Fqb3V0IGQndW5lIGltYWdlXCIsXG5cbiAgTE9HT1VUOiBcIkRlY29ubmV4aW9uXCIsXG4gIExPR0lOOiBcIkNvbm5leGlvblwiLFxuICBTSUdOVVA6IFwiSW5zY3JpcHRpb25cIixcbiAgUFJPRklMRV9DSEFOR0VTOiBcIkNoYW5nZW1lbnQgZGUgcHJvZmlsXCIsXG59O1xuXG5leHBvcnQgdHlwZSBJQWN0aXZpdHlBY3Rpb24gPSBrZXlvZiB0eXBlb2YgQWN0aXZpdHlBY3Rpb25PYmo7XG5leHBvcnQgY29uc3QgQWN0aXZpdHlBY3Rpb25BcnJheSA9IE9iamVjdC5rZXlzKFxuICBBY3Rpdml0eUFjdGlvbk9iaixcbikgYXMgSUFjdGl2aXR5QWN0aW9uW10gJiBbc3RyaW5nLCAuLi5zdHJpbmdbXV07XG5leHBvcnQgY29uc3QgQWN0aXZpdHlBY3Rpb25TZWxlY3Rpb24gPSBBY3Rpdml0eUFjdGlvbkFycmF5Lm1hcCgoa2V5KSA9PiAoe1xuICBsYWJlbDogQWN0aXZpdHlBY3Rpb25PYmpba2V5XSxcbiAgdmFsdWU6IGtleSxcbn0pKTtcbiIsICJleHBvcnQgY29uc3QgQW5pbWVGb3JtYXRPYmogPSB7XG4gIFNFUklFOiB7IGxhYmVsOiBcIlNcdTAwRTlyaWVcIiwgZGVzY3JpcHRpb246IFwiRGlmZnVzXHUwMEU5IGVuIFx1MDBFOXBpc29kZXMgclx1MDBFOWd1bGllcnMuXCIgfSxcbiAgU0VSSUVfQ09VUlRFOiB7XG4gICAgbGFiZWw6IFwiU1x1MDBFOXJpZSBjb3VydGVcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiRGlmZnVzXHUwMEU5IGVuIFx1MDBFOXBpc29kZXMgY291cnRzLCBnXHUwMEU5blx1MDBFOXJhbGVtZW50IG1vaW5zIGRlIDE1IG1pbnV0ZXMgY2hhY3VuLlwiLFxuICB9LFxuICBGSUxNOiB7IGxhYmVsOiBcIkZpbG1cIiwgZGVzY3JpcHRpb246IFwiUHJvZHVpdCBjb21tZSB1biBsb25nIG1cdTAwRTl0cmFnZS5cIiB9LFxuICBPTkE6IHsgbGFiZWw6IFwiT05BXCIsIGRlc2NyaXB0aW9uOiBcIkRpZmZ1c1x1MDBFOSBkaXJlY3RlbWVudCBzdXIgSW50ZXJuZXQuXCIgfSxcbiAgT1ZBOiB7XG4gICAgbGFiZWw6IFwiT1ZBXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVzdGluXHUwMEU5IFx1MDBFMCBsYSB2ZW50ZSBkaXJlY3RlIGF1eCBjb25zb21tYXRldXJzLlwiLFxuICB9LFxuICBTUEVDSUFMOiB7XG4gICAgbGFiZWw6IFwiU3BcdTAwRTljaWFsXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlVuIFx1MDBFOXBpc29kZSB1bmlxdWUgb3UgdW5lIHNcdTAwRTlyaWUgZCdcdTAwRTlwaXNvZGVzIHF1aSBuZSBmYWl0IHBhcyBwYXJ0aWUgZGUgbGEgZGlmZnVzaW9uIHJcdTAwRTlndWxpXHUwMEU4cmUgZCd1bmUgc1x1MDBFOXJpZS5cIixcbiAgfSxcbn07XG5cbmV4cG9ydCB0eXBlIElBbmltZUZvcm1hdCA9IGtleW9mIHR5cGVvZiBBbmltZUZvcm1hdE9iajtcbmV4cG9ydCBjb25zdCBBbmltZUZvcm1hdEFycmF5ID0gT2JqZWN0LmtleXMoQW5pbWVGb3JtYXRPYmopIGFzIElBbmltZUZvcm1hdFtdICZcbiAgW3N0cmluZywgLi4uc3RyaW5nW11dO1xuZXhwb3J0IGNvbnN0IEFuaW1lRm9ybWF0U2VsZWN0aW9uID0gQW5pbWVGb3JtYXRBcnJheS5tYXAoKGtleSkgPT4gKHtcbiAgbGFiZWw6IEFuaW1lRm9ybWF0T2JqW2tleV0ubGFiZWwsXG4gIGRlc2NyaXB0aW9uOiBBbmltZUZvcm1hdE9ialtrZXldLmRlc2NyaXB0aW9uLFxuICB2YWx1ZToga2V5LFxufSkpO1xuIiwgImV4cG9ydCBjb25zdCBDaGFyYWN0ZXJSb2xlT2JqID0ge1xuICBQUklOQ0lQQUw6IHtcbiAgICBsYWJlbDogXCJQcmluY2lwYWxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQZXJzb25uYWdlIHByaW5jaXBhbCBkZSBsJ2hpc3RvaXJlLlwiLFxuICB9LFxuICBTRUNPTkRBSVJFOiB7XG4gICAgbGFiZWw6IFwiU2Vjb25kYWlyZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBlcnNvbm5hZ2Ugc2Vjb25kYWlyZSBkZSBsJ2hpc3RvaXJlLlwiLFxuICB9LFxuICBGSUdVUkFOVDoge1xuICAgIGxhYmVsOiBcIkZpZ3VyYW50XCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlBlcnNvbm5hZ2UgcXVpIGFwcGFyYVx1MDBFRXQgZGFucyBsJ2hpc3RvaXJlIG1haXMgbidhIHBhcyBkJ2luZmx1ZW5jZSBkaXJlY3RlIHN1ciBjZWxsZS1jaS5cIixcbiAgfSxcbiAgQU5UQUdPTklTVEU6IHtcbiAgICBsYWJlbDogXCJBbnRhZ29uaXN0ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBlcnNvbm5hZ2UgcXVpIGVzdCBsJ2VubmVtaSBwcmluY2lwYWwgZGUgbCdoaXN0b2lyZS5cIixcbiAgfSxcbiAgU09VVElFTjoge1xuICAgIGxhYmVsOiBcIlNvdXRpZW5cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiUGVyc29ubmFnZSBxdWkgYXBwb3J0ZSBkZSBsJ2FpZGUgZXQgZHUgc291dGllbiBhdSBwZXJzb25uYWdlIHByaW5jaXBhbC5cIixcbiAgfSxcbn07XG5cbmV4cG9ydCB0eXBlIElDaGFyYWN0ZXJSb2xlID0ga2V5b2YgdHlwZW9mIENoYXJhY3RlclJvbGVPYmo7XG5leHBvcnQgY29uc3QgQ2hhcmFjdGVyUm9sZUFycmF5ID0gT2JqZWN0LmtleXMoXG4gIENoYXJhY3RlclJvbGVPYmosXG4pIGFzIElDaGFyYWN0ZXJSb2xlW10gJiBbc3RyaW5nLCAuLi5zdHJpbmdbXV07XG5leHBvcnQgY29uc3QgQ2hhcmFjdGVyUm9sZVNlbGVjdGlvbiA9IENoYXJhY3RlclJvbGVBcnJheS5tYXAoKGtleSkgPT4gKHtcbiAgbGFiZWw6IENoYXJhY3RlclJvbGVPYmpba2V5XS5sYWJlbCxcbiAgZGVzY3JpcHRpb246IENoYXJhY3RlclJvbGVPYmpba2V5XS5kZXNjcmlwdGlvbixcbiAgdmFsdWU6IGtleSxcbn0pKTtcblxuZXhwb3J0IGNvbnN0IENoYXJhY3RlckdlbmRlck9iaiA9IHtcbiAgTUFTQ1VMSU46IHtcbiAgICBsYWJlbDogXCJNYXNjdWxpblwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJQZXJzb25uYWdlIHF1aSBhIHVuZSBhcHBhcmVuY2UgcGh5c2lxdWUgdHJhZGl0aW9ubmVsbGVtZW50IGFzc29jaVx1MDBFOWUgXHUwMEUwIGxhIG1hc2N1bGluaXRcdTAwRTkuXCIsXG4gIH0sXG4gIEZFTUlOSU46IHtcbiAgICBsYWJlbDogXCJGXHUwMEU5bWluaW5cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiUGVyc29ubmFnZSBxdWkgYSB1bmUgYXBwYXJlbmNlIHBoeXNpcXVlIHRyYWRpdGlvbm5lbGxlbWVudCBhc3NvY2lcdTAwRTllIFx1MDBFMCBsYSBmZW1pbml0XHUwMEU5LlwiLFxuICB9LFxuICBORVVUUkU6IHtcbiAgICBsYWJlbDogXCJOZXV0cmVcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiUGVyc29ubmFnZSBkb250IGwnYXBwYXJlbmNlIHBoeXNpcXVlIG4nZXN0IHBhcyBmb3JjXHUwMEU5bWVudCBhc3NvY2lcdTAwRTllIFx1MDBFMCBsYSBtYXNjdWxpbml0XHUwMEU5IG91IFx1MDBFMCBsYSBmXHUwMEU5bWluaXRcdTAwRTksIG91IHF1aSByXHUwMEU5cHJlc2VudGVudCBkZXMgY2FyYWN0XHUwMEU5cmlzdGlxdWVzIGRlcyBkZXV4IGdlbnJlcy5cIixcbiAgfSxcbiAgVFJBTlNHRU5SRToge1xuICAgIGxhYmVsOiBcIlRyYW5zZ2VucmVcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiUGVyc29ubmFnZSBxdWkgbmUgc2UgaWRlbnRpZmllIHBhcyBhdmVjIGxlIGdlbnJlIHRyYWRpdGlvbm5lbCBhc3NvY2lcdTAwRTkgXHUwMEUwIHNvbiBhcHBhcmVuY2UgcGh5c2lxdWUuXCIsXG4gIH0sXG4gIE5PTl9CSU5BSVJFOiB7XG4gICAgbGFiZWw6IFwiTm9uIGJpbmFpcmVcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiUGVyc29ubmFnZSBxdWkgbmUgc2UgaWRlbnRpZmllIHBhcyBhdmVjIGxlcyBnZW5yZXMgdHJhZGl0aW9ubmVscyBtYXNjdWxpbiBvdSBmXHUwMEU5bWluaW4sIG1haXMgcXVpIG5lIHMnaWRlbnRpZmllIHBhcyBub24gcGx1cyBjb21tZSBuZXV0cmUuXCIsXG4gIH0sXG4gIEdFTlJFX0ZMVUlERToge1xuICAgIGxhYmVsOiBcIkdlbnJlIGZsdWlkZVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJQZXJzb25uYWdlIGRvbnQgbCdpZGVudGl0XHUwMEU5IGRlIGdlbnJlIGVzdCBlbiBjb25zdGFudGUgXHUwMEU5dm9sdXRpb24gZXQgcXVpIG5lIHNlIHNpdHVlIHBhcyBkYW5zIGwndW5lIGRlcyBjYXRcdTAwRTlnb3JpZXMgdHJhZGl0aW9ubmVsbGVzLlwiLFxuICB9LFxuICBBVVRSRToge1xuICAgIGxhYmVsOiBcIkF1dHJlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGVyc29ubmFnZSBxdWkgbmUgc2UgdHJvdXZlIHBhcyBkYW5zIGxhIGxpc3RlIGNpLWRlc3N1cy5cIixcbiAgfSxcbn07XG5cbmV4cG9ydCB0eXBlIElDaGFyYWN0ZXJHZW5kZXIgPSBrZXlvZiB0eXBlb2YgQ2hhcmFjdGVyR2VuZGVyT2JqO1xuZXhwb3J0IGNvbnN0IENoYXJhY3RlckdlbmRlckFycmF5ID0gT2JqZWN0LmtleXMoXG4gIENoYXJhY3RlckdlbmRlck9iaixcbikgYXMgSUNoYXJhY3RlckdlbmRlcltdICYgW3N0cmluZywgLi4uc3RyaW5nW11dO1xuZXhwb3J0IGNvbnN0IENoYXJhY3RlckdlbmRlclNlbGVjdGlvbiA9IENoYXJhY3RlckdlbmRlckFycmF5Lm1hcCgoa2V5KSA9PiAoe1xuICBsYWJlbDogQ2hhcmFjdGVyR2VuZGVyT2JqW2tleV0ubGFiZWwsXG4gIGRlc2NyaXB0aW9uOiBDaGFyYWN0ZXJHZW5kZXJPYmpba2V5XS5kZXNjcmlwdGlvbixcbiAgdmFsdWU6IGtleSxcbn0pKTtcblxuZXhwb3J0IGNvbnN0IENoYXJhY3RlclNwZWNpZXNPYmogPSB7XG4gIEhVTUFJTjoge1xuICAgIGxhYmVsOiBcIkh1bWFpblwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJQZXJzb25uYWdlIHF1aSBhIHVuZSBhcHBhcmVuY2UgcGh5c2lxdWUgYXNzb2NpXHUwMEU5ZSBcdTAwRTAgdW4gaHVtYWluLCBhdmVjIGRlcyBjYXJhY3RcdTAwRTlyaXN0aXF1ZXMgY29tbWUgZGVzIHlldXgsIGRlcyBjaGV2ZXV4LCB1bmUgcGVhdSBjbGFpcmUsIGRlcyBtYWlucyBldCBkZXMgcGllZHMgaHVtYWlucywgZXRjLlwiLFxuICB9LFxuICBFTEZFOiB7XG4gICAgbGFiZWw6IFwiRWxmZVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJQZXJzb25uYWdlIGF2ZWMgZGVzIGNhcmFjdFx1MDBFOXJpc3RpcXVlcyBwaHlzaXF1ZXMgYXNzb2NpXHUwMEU5ZXMgXHUwMEUwIGwnZWxmZS5cIixcbiAgfSxcbiAgTkFJTjoge1xuICAgIGxhYmVsOiBcIk5haW5cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiUGVyc29ubmFnZSBhdmVjIGRlcyBjYXJhY3RcdTAwRTlyaXN0aXF1ZXMgcGh5c2lxdWVzIGFzc29jaVx1MDBFOWVzIFx1MDBFMCB1biBuYWluLlwiLFxuICB9LFxuICBMRVpBUkQ6IHtcbiAgICBsYWJlbDogXCJMXHUwMEU5emFyZFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJQZXJzb25uYWdlIGF2ZWMgZGVzIGNhcmFjdFx1MDBFOXJpc3RpcXVlcyBwaHlzaXF1ZXMgYXNzb2NpXHUwMEU5ZXMgXHUwMEUwIHVuIGxcdTAwRTl6YXJkLlwiLFxuICB9LFxuICBEUkFHT046IHtcbiAgICBsYWJlbDogXCJEcmFnb25cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiUGVyc29ubmFnZSBhdmVjIGRlcyBjYXJhY3RcdTAwRTlyaXN0aXF1ZXMgcGh5c2lxdWVzIGFzc29jaVx1MDBFOWVzIFx1MDBFMCB1biBkcmFnb24uXCIsXG4gIH0sXG4gIE9SQzoge1xuICAgIGxhYmVsOiBcIk9yY1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJQZXJzb25uYWdlIGF2ZWMgZGVzIGNhcmFjdFx1MDBFOXJpc3RpcXVlcyBwaHlzaXF1ZXMgYXNzb2NpXHUwMEU5ZXMgXHUwMEUwIGwnb3JjLlwiLFxuICB9LFxuICBBVVRSRToge1xuICAgIGxhYmVsOiBcIkF1dHJlXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlBlcnNvbm5hZ2UgZG9udCBsYSBjYXRcdTAwRTlnb3JpZSBuZSBjb3JyZXNwb25kIHBhcyBcdTAwRTAgY2VsbGVzIHByb3Bvc1x1MDBFOWVzLlwiLFxuICB9LFxufTtcblxuZXhwb3J0IHR5cGUgSUNoYXJhY3RlclNwZWNpZXMgPSBrZXlvZiB0eXBlb2YgQ2hhcmFjdGVyU3BlY2llc09iajtcbmV4cG9ydCBjb25zdCBDaGFyYWN0ZXJTcGVjaWVzQXJyYXkgPSBPYmplY3Qua2V5cyhcbiAgQ2hhcmFjdGVyU3BlY2llc09iaixcbikgYXMgSUNoYXJhY3RlclNwZWNpZXNbXSAmIFtzdHJpbmcsIC4uLnN0cmluZ1tdXTtcbmV4cG9ydCBjb25zdCBDaGFyYWN0ZXJTcGVjaWVzU2VsZWN0aW9uID0gQ2hhcmFjdGVyU3BlY2llc0FycmF5Lm1hcCgoa2V5KSA9PiAoe1xuICBsYWJlbDogQ2hhcmFjdGVyU3BlY2llc09ialtrZXldLmxhYmVsLFxuICBkZXNjcmlwdGlvbjogQ2hhcmFjdGVyU3BlY2llc09ialtrZXldLmRlc2NyaXB0aW9uLFxuICB2YWx1ZToga2V5LFxufSkpO1xuIiwgImV4cG9ydCBjb25zdCBDb21wYW55VHlwZU9iaiA9IHtcbiAgU1RVRElPOiBcIlN0dWRpb1wiLFxuICBQUk9EVUNFUjogXCJQcm9kdWN0ZXVyXCIsXG59O1xuXG5leHBvcnQgdHlwZSBJQ29tcGFueVR5cGUgPSBrZXlvZiB0eXBlb2YgQ29tcGFueVR5cGVPYmo7XG5leHBvcnQgY29uc3QgQ29tcGFueVR5cGVBcnJheSA9IE9iamVjdC5rZXlzKENvbXBhbnlUeXBlT2JqKSBhcyBJQ29tcGFueVR5cGVbXSAmXG4gIFtzdHJpbmcsIC4uLnN0cmluZ1tdXTtcbmV4cG9ydCBjb25zdCBDb21wYW55VHlwZVNlbGVjdGlvbiA9IENvbXBhbnlUeXBlQXJyYXkubWFwKChrZXkpID0+ICh7XG4gIGxhYmVsOiBDb21wYW55VHlwZU9ialtrZXldLFxuICB2YWx1ZToga2V5LFxufSkpO1xuIiwgImltcG9ydCB7XG4gIElBY3Rpdml0eSxcbiAgSUFuaW1lLFxuICBJQ2hhcmFjdGVyLFxuICBJQ29tcGFueSxcbiAgSUdyb3VwZSxcbiAgSU1hbmdhLFxuICBJUGVyc29uLFxuICBJUmVwb3J0LFxuICBJVHJhY2ssXG4gIElQYXRjaCxcbiAgSVVzZXIsXG4gIElJbWFnZSxcbiAgSUltYWdlRnVsbCxcbiAgSVVzZXJGdWxsLFxuICBJR3JvdXBlRnVsbCxcbiAgSU1hbmdhRnVsbCxcbiAgSUFuaW1lRnVsbCxcbiAgSUNoYXJhY3RlckZ1bGwsXG4gIElQZXJzb25GdWxsLFxuICBJVHJhY2tGdWxsLFxuICBJQ29tcGFueUZ1bGwsXG4gIElQYXRjaEZ1bGwsXG4gIElBY3Rpdml0eUZ1bGwsXG4gIElSZXBvcnRGdWxsLFxuICBJQWN0aXZpdHlEQixcbiAgSUFuaW1lREIsXG4gIElDaGFyYWN0ZXJEQixcbiAgSUNvbXBhbnlEQixcbiAgSUdyb3VwZURCLFxuICBJSW1hZ2VEQixcbiAgSU1hbmdhREIsXG4gIElQYXRjaERCLFxuICBJUGVyc29uREIsXG4gIElSZXBvcnREQixcbiAgSVRyYWNrREIsXG4gIElVc2VyREIsXG4gIElVc2VyUGFnaW5hdGlvblJlc3BvbnNlLFxuICBJQWN0aXZpdHlQYWdpbmF0aW9uUmVzcG9uc2UsXG4gIElBbmltZVBhZ2luYXRpb25SZXNwb25zZSxcbiAgSUNoYXJhY3RlclBhZ2luYXRpb25SZXNwb25zZSxcbiAgSUNvbXBhbnlQYWdpbmF0aW9uUmVzcG9uc2UsXG4gIElHcm91cGVQYWdpbmF0aW9uUmVzcG9uc2UsXG4gIElJbWFnZVBhZ2luYXRpb25SZXNwb25zZSxcbiAgSU1hbmdhUGFnaW5hdGlvblJlc3BvbnNlLFxuICBJUGF0Y2hQYWdpbmF0aW9uUmVzcG9uc2UsXG4gIElQZXJzb25QYWdpbmF0aW9uUmVzcG9uc2UsXG4gIElSZXBvcnRQYWdpbmF0aW9uUmVzcG9uc2UsXG4gIElUcmFja1BhZ2luYXRpb25SZXNwb25zZSxcbn0gZnJvbSBcIi4uL1wiO1xuXG5leHBvcnQgY29uc3QgVGFyZ2V0UGF0aE9iaiA9IHtcbiAgVXNlcjogXCJVdGlsaXNhdGV1clwiLFxuICAvLyBNZWRpYXNcbiAgR3JvdXBlOiBcIkdyb3VwZVwiLFxuICBNYW5nYTogXCJNYW5nYVwiLFxuICBBbmltZTogXCJBbmltZVwiLFxuICBQZXJzb246IFwiUGVyc29ubmVcIixcbiAgQ2hhcmFjdGVyOiBcIlBlcnNvbm5hZ2VcIixcbiAgVHJhY2s6IFwiTXVzaXF1ZVwiLFxuICBDb21wYW55OiBcIlNvY2lcdTAwRTl0XHUwMEU5XCIsXG4gIC8vXG4gIEltYWdlOiBcIkltYWdlXCIsXG4gIFBhdGNoOiBcIk1pc2UgXHUwMEUwIGpvdXJcIixcbiAgQWN0aXZpdHk6IFwiQWN0aXZpdFx1MDBFOVwiLFxuICBSZXBvcnQ6IFwiU2lnbmFsZW1lbnRcIixcbn07XG5cbmV4cG9ydCB0eXBlIElUYXJnZXRQYXRoID0ga2V5b2YgdHlwZW9mIFRhcmdldFBhdGhPYmo7XG5leHBvcnQgY29uc3QgVGFyZ2V0UGF0aEFycmF5ID0gT2JqZWN0LmtleXMoVGFyZ2V0UGF0aE9iaikgYXMgSVRhcmdldFBhdGhbXSAmXG5bc3RyaW5nLCAuLi5zdHJpbmdbXV07XG5leHBvcnQgY29uc3QgVGFyZ2V0UGF0aFNlbGVjdGlvbiA9IFRhcmdldFBhdGhBcnJheS5tYXAoKGtleSkgPT4gKHtcbiAgbGFiZWw6IFRhcmdldFBhdGhPYmpba2V5XSxcbiAgdmFsdWU6IGtleSxcbn0pKTtcblxuZXhwb3J0IHR5cGUgSVRhcmdldFBhdGhUeXBlPFQgZXh0ZW5kcyBJVGFyZ2V0UGF0aD4gPVxuICBUIGV4dGVuZHMgXCJVc2VyXCJcbiAgPyBJVXNlclxuICA6IFQgZXh0ZW5kcyBcIkdyb3VwZVwiXG4gID8gSUdyb3VwZVxuICA6IFQgZXh0ZW5kcyBcIk1hbmdhXCJcbiAgPyBJTWFuZ2FcbiAgOiBUIGV4dGVuZHMgXCJBbmltZVwiXG4gID8gSUFuaW1lXG4gIDogVCBleHRlbmRzIFwiQ2hhcmFjdGVyXCJcbiAgPyBJQ2hhcmFjdGVyXG4gIDogVCBleHRlbmRzIFwiUGVyc29uXCJcbiAgPyBJUGVyc29uXG4gIDogVCBleHRlbmRzIFwiVHJhY2tcIlxuICA/IElUcmFja1xuICA6IFQgZXh0ZW5kcyBcIkNvbXBhbnlcIlxuICA/IElDb21wYW55XG4gIDogVCBleHRlbmRzIFwiUGF0Y2hcIlxuICA/IElQYXRjaFxuICA6IFQgZXh0ZW5kcyBcIkFjdGl2aXR5XCJcbiAgPyBJQWN0aXZpdHlcbiAgOiBUIGV4dGVuZHMgXCJSZXBvcnRcIlxuICA/IElSZXBvcnRcbiAgOiBUIGV4dGVuZHMgXCJJbWFnZVwiXG4gID8gSUltYWdlXG4gIDogYW55O1xuXG5cbmV4cG9ydCB0eXBlIElUYXJnZXRQYXRoVHlwZUZ1bGw8VCBleHRlbmRzIElUYXJnZXRQYXRoPiA9XG4gIFQgZXh0ZW5kcyBcIlVzZXJcIlxuICA/IElVc2VyRnVsbFxuICA6IFQgZXh0ZW5kcyBcIkdyb3VwZVwiXG4gID8gSUdyb3VwZUZ1bGxcbiAgOiBUIGV4dGVuZHMgXCJNYW5nYVwiXG4gID8gSU1hbmdhRnVsbFxuICA6IFQgZXh0ZW5kcyBcIkFuaW1lXCJcbiAgPyBJQW5pbWVGdWxsXG4gIDogVCBleHRlbmRzIFwiQ2hhcmFjdGVyXCJcbiAgPyBJQ2hhcmFjdGVyRnVsbFxuICA6IFQgZXh0ZW5kcyBcIlBlcnNvblwiXG4gID8gSVBlcnNvbkZ1bGxcbiAgOiBUIGV4dGVuZHMgXCJUcmFja1wiXG4gID8gSVRyYWNrRnVsbFxuICA6IFQgZXh0ZW5kcyBcIkNvbXBhbnlcIlxuICA/IElDb21wYW55RnVsbFxuICA6IFQgZXh0ZW5kcyBcIlBhdGNoXCJcbiAgPyBJUGF0Y2hGdWxsXG4gIDogVCBleHRlbmRzIFwiQWN0aXZpdHlcIlxuICA/IElBY3Rpdml0eUZ1bGxcbiAgOiBUIGV4dGVuZHMgXCJSZXBvcnRcIlxuICA/IElSZXBvcnRGdWxsXG4gIDogVCBleHRlbmRzIFwiSW1hZ2VcIlxuICA/IElJbWFnZUZ1bGxcbiAgOiBhbnk7XG5cbmV4cG9ydCB0eXBlIElUYXJnZXRQYXRoVHlwZURCPFQgZXh0ZW5kcyBJVGFyZ2V0UGF0aD4gPVxuICBUIGV4dGVuZHMgXCJVc2VyXCJcbiAgPyBJVXNlckRCXG4gIDogVCBleHRlbmRzIFwiR3JvdXBlXCJcbiAgPyBJR3JvdXBlREJcbiAgOiBUIGV4dGVuZHMgXCJNYW5nYVwiXG4gID8gSU1hbmdhREJcbiAgOiBUIGV4dGVuZHMgXCJBbmltZVwiXG4gID8gSUFuaW1lREJcbiAgOiBUIGV4dGVuZHMgXCJDaGFyYWN0ZXJcIlxuICA/IElDaGFyYWN0ZXJEQlxuICA6IFQgZXh0ZW5kcyBcIlBlcnNvblwiXG4gID8gSVBlcnNvbkRCXG4gIDogVCBleHRlbmRzIFwiVHJhY2tcIlxuICA/IElUcmFja0RCXG4gIDogVCBleHRlbmRzIFwiQ29tcGFueVwiXG4gID8gSUNvbXBhbnlEQlxuICA6IFQgZXh0ZW5kcyBcIlBhdGNoXCJcbiAgPyBJUGF0Y2hEQlxuICA6IFQgZXh0ZW5kcyBcIkFjdGl2aXR5XCJcbiAgPyBJQWN0aXZpdHlEQlxuICA6IFQgZXh0ZW5kcyBcIlJlcG9ydFwiXG4gID8gSVJlcG9ydERCXG4gIDogVCBleHRlbmRzIFwiSW1hZ2VcIlxuICA/IElJbWFnZURCXG4gIDogYW55O1xuXG5leHBvcnQgdHlwZSBJVGFyZ2V0UGF0aFR5cGVQYWdpbmF0aW9uUmVzcG9uc2U8VCBleHRlbmRzIElUYXJnZXRQYXRoPiA9XG4gIFQgZXh0ZW5kcyBcIlVzZXJcIlxuICA/IElVc2VyUGFnaW5hdGlvblJlc3BvbnNlXG4gIDogVCBleHRlbmRzIFwiR3JvdXBlXCJcbiAgPyBJR3JvdXBlUGFnaW5hdGlvblJlc3BvbnNlXG4gIDogVCBleHRlbmRzIFwiTWFuZ2FcIlxuICA/IElNYW5nYVBhZ2luYXRpb25SZXNwb25zZVxuICA6IFQgZXh0ZW5kcyBcIkFuaW1lXCJcbiAgPyBJQW5pbWVQYWdpbmF0aW9uUmVzcG9uc2VcbiAgOiBUIGV4dGVuZHMgXCJDaGFyYWN0ZXJcIlxuICA/IElDaGFyYWN0ZXJQYWdpbmF0aW9uUmVzcG9uc2VcbiAgOiBUIGV4dGVuZHMgXCJQZXJzb25cIlxuICA/IElQZXJzb25QYWdpbmF0aW9uUmVzcG9uc2VcbiAgOiBUIGV4dGVuZHMgXCJUcmFja1wiXG4gID8gSVRyYWNrUGFnaW5hdGlvblJlc3BvbnNlXG4gIDogVCBleHRlbmRzIFwiQ29tcGFueVwiXG4gID8gSUNvbXBhbnlQYWdpbmF0aW9uUmVzcG9uc2VcbiAgOiBUIGV4dGVuZHMgXCJQYXRjaFwiXG4gID8gSVBhdGNoUGFnaW5hdGlvblJlc3BvbnNlXG4gIDogVCBleHRlbmRzIFwiQWN0aXZpdHlcIlxuICA/IElBY3Rpdml0eVBhZ2luYXRpb25SZXNwb25zZVxuICA6IFQgZXh0ZW5kcyBcIlJlcG9ydFwiXG4gID8gSVJlcG9ydFBhZ2luYXRpb25SZXNwb25zZVxuICA6IFQgZXh0ZW5kcyBcIkltYWdlXCJcbiAgPyBJSW1hZ2VQYWdpbmF0aW9uUmVzcG9uc2VcbiAgOiBhbnk7IiwgImV4cG9ydCBjb25zdCBJbWFnZUxhYmVsT2JqID0ge1xuICBDT1ZFUjogXCJDb3V2ZXJ0dXJlXCIsXG4gIEJBTk5FUjogXCJCYW5uaVx1MDBFOHJlXCIsXG4gIEFWQVRBUjogXCJBdmF0YXJcIixcbiAgTE9HTzogXCJMb2dvXCIsXG59O1xuXG5leHBvcnQgdHlwZSBJSW1hZ2VMYWJlbCA9IGtleW9mIHR5cGVvZiBJbWFnZUxhYmVsT2JqO1xuZXhwb3J0IGNvbnN0IEltYWdlTGFiZWxBcnJheSA9IE9iamVjdC5rZXlzKEltYWdlTGFiZWxPYmopIGFzIElJbWFnZUxhYmVsW10gJlxuW3N0cmluZywgLi4uc3RyaW5nW11dO1xuZXhwb3J0IGNvbnN0IEltYWdlTGFiZWxTZWxlY3Rpb24gPSBJbWFnZUxhYmVsQXJyYXkubWFwKChrZXkpID0+ICh7XG4gIGxhYmVsOiBJbWFnZUxhYmVsT2JqW2tleV0sXG4gIHZhbHVlOiBrZXksXG59KSk7IiwgImV4cG9ydCBjb25zdCBNYW5nYUZvcm1hdE9iaiA9IHtcbiAgTUFOR0E6IHtcbiAgICBsYWJlbDogXCJNYW5nYVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1hbmdhIGphcG9uYWlzLlwiLFxuICB9LFxuICBNQU5IV0E6IHtcbiAgICBsYWJlbDogXCJNYW5od2FcIixcbiAgICBkZXNjcmlwdGlvbjogXCJVbmUgYmFuZGUgZGVzc2luXHUwMEU5ZSBjb3JcdTAwRTllbm5lLlwiLFxuICB9LFxuICBNQU5IVUE6IHtcbiAgICBsYWJlbDogXCJNYW5odWFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJVbmUgYmFuZGUgZGVzc2luXHUwMEU5ZSBjaGlub2lzZS5cIixcbiAgfSxcbiAgTElHSFRfTk9WRUw6IHtcbiAgICBsYWJlbDogXCJMaWdodCBub3ZlbFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJVbiByb21hbiBqYXBvbmFpcyBxdWkgZXN0IGRlc3Rpblx1MDBFOSBcdTAwRTAgdW4gcHVibGljIGFkdWx0ZSBldCBxdWkgc2UgbGl0IHNvdXMgZm9ybWUgZGUgbGl2cmVzLlwiLFxuICB9LFxuICBXRUJfTE9WRUw6IHtcbiAgICBsYWJlbDogXCJXZWIgbm92ZWxcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVW4gcm9tYW4gcXVpIGVzdCBwdWJsaVx1MDBFOSBlbiBsaWduZSBldCBxdWkgc2UgbGl0IGRhbnMgdW4gbmF2aWdhdGV1ci5cIixcbiAgfSxcbiAgR1JBUEhJQ19OT1ZFTDoge1xuICAgIGxhYmVsOiBcIkdyYXBoaWMgbm92ZWxcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVW4gbGl2cmUgcXVpIGNvbnRpZW50IGRlcyBpbWFnZXMgZW4gbm9pciBldCBibGFuYyBvdSBlbiBjb3VsZXVyLCBxdWkgcmFjb250ZSB1bmUgaGlzdG9pcmUuXCIsXG4gIH0sXG4gIERPVUpJTlNISToge1xuICAgIGxhYmVsOiBcIkRvdWppbnNoaVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJVbiB0cmF2YWlsIGFtYXRldXIgZGUgYmFuZGUgZGVzc2luXHUwMEU5ZSwgZ1x1MDBFOW5cdTAwRTlyYWxlbWVudCBjclx1MDBFOVx1MDBFOSBwYXIgZGVzIGZhbnMgZGUgbGEgc1x1MDBFOXJpZSBvdSBkZSBsJ1x1MDE1M3V2cmUgb3JpZ2luYWxlLlwiLFxuICB9LFxuICBPTkVfU0hPVDoge1xuICAgIGxhYmVsOiBcIk9uZSBzaG90XCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlVuZSBoaXN0b2lyZSBxdWkgc2UgdGVybWluZSBhcHJcdTAwRThzIHVuIHNldWwgY2hhcGl0cmUgb3UgdW4gc2V1bCB2b2x1bWUuXCIsXG4gIH0sXG4gIE9USEVSOiB7XG4gICAgbGFiZWw6IFwiQXV0cmVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMZSB0eXBlIGRlIHNvdXJjZSBuJ2VzdCBwYXMgZGlzcG9uaWJsZSBkYW5zIGNldXggcHJvcG9zXHUwMEU5ZXMuXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgdHlwZSBJTWFuZ2FGb3JtYXQgPSBrZXlvZiB0eXBlb2YgTWFuZ2FGb3JtYXRPYmo7XG5leHBvcnQgY29uc3QgTWFuZ2FGb3JtYXRBcnJheSA9IE9iamVjdC5rZXlzKE1hbmdhRm9ybWF0T2JqKSBhcyBJTWFuZ2FGb3JtYXRbXSAmXG4gIFtzdHJpbmcsIC4uLnN0cmluZ1tdXTtcbmV4cG9ydCBjb25zdCBNYW5nYUZvcm1hdFNlbGVjdGlvbiA9IE1hbmdhRm9ybWF0QXJyYXkubWFwKChrZXkpID0+ICh7XG4gIGxhYmVsOiBNYW5nYUZvcm1hdE9ialtrZXldLmxhYmVsLFxuICBkZXNjcmlwdGlvbjogTWFuZ2FGb3JtYXRPYmpba2V5XS5kZXNjcmlwdGlvbixcbiAgdmFsdWU6IGtleSxcbn0pKTtcbiIsICJleHBvcnQgY29uc3QgTWVkaWFTb3VyY2VPYmogPSB7XHJcbiAgT1JJR0lOQUw6IHtcclxuICAgIGxhYmVsOiBcIk9yaWdpbmFsXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJBIFx1MDBFOXRcdTAwRTkgY3JcdTAwRTlcdTAwRTkgZGUgbWFuaVx1MDBFOHJlIG9yaWdpbmFsZSBldCBuZSBzZSBiYXNlIHN1ciBhdWN1bmUgXHUwMTUzdXZyZSBwclx1MDBFOWV4aXN0YW50ZS5cIixcclxuICB9LFxyXG4gIE1BTkdBOiB7XHJcbiAgICBsYWJlbDogXCJNYW5nYVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQmFzXHUwMEU5IHN1ciB1biBtYW5nYSBqYXBvbmFpcy5cIixcclxuICB9LFxyXG4gIE1BTkhXQToge1xyXG4gICAgbGFiZWw6IFwiTWFuaHdhXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJCYXNcdTAwRTkgc3VyIHVuIG1hbmh3YSwgdW5lIGJhbmRlIGRlc3Npblx1MDBFOWUgc3VkLWNvclx1MDBFOWVubmUuXCIsXHJcbiAgfSxcclxuICBNQU5IVUE6IHtcclxuICAgIGxhYmVsOiBcIk1hbmh1YVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQmFzXHUwMEU5IHN1ciB1biBtYW5odWEsIHVuZSBiYW5kZSBkZXNzaW5cdTAwRTllIGNoaW5vaXNlLlwiLFxyXG4gIH0sXHJcbiAgTElHSFRfTk9WRUw6IHtcclxuICAgIGxhYmVsOiBcIkxpZ2h0IG5vdmVsXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJCYXNcdTAwRTkgc3VyIHVuIGxpZ2h0IG5vdmVsLCB1biB0eXBlIGRlIHJvbWFuIGphcG9uYWlzIGRlc3Rpblx1MDBFOSBhdXggamV1bmVzIGFkdWx0ZXMuXCIsXHJcbiAgfSxcclxuICBWSVNVQUxfTk9WRUw6IHtcclxuICAgIGxhYmVsOiBcIlZpc3VhbCBub3ZlbFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiQmFzXHUwMEU5IHN1ciB1biB2aXN1YWwgbm92ZWwsIHVuIHR5cGUgZGUgamV1IHZpZFx1MDBFOW8gaW50ZXJhY3RpZiBqYXBvbmFpcyBxdWkgdXRpbGlzZSBwcmluY2lwYWxlbWVudCBkdSB0ZXh0ZSBuYXJyYXRpZi5cIixcclxuICB9LFxyXG4gIFdFQl9OT1ZFTDoge1xyXG4gICAgbGFiZWw6IFwiV2ViIG5vdmVsXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJCYXNcdTAwRTkgc3VyIHVuIHdlYiBub3ZlbCwgdW4gcm9tYW4gcHVibGlcdTAwRTkgZW4gbGlnbmUuXCIsXHJcbiAgfSxcclxuICBHQU1FOiB7XHJcbiAgICBsYWJlbDogXCJKZXUgdmlkZW9cIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkJhc1x1MDBFOSBzdXIgdW4gamV1IHZpZFx1MDBFOW8uXCIsXHJcbiAgfSxcclxuICBOT1ZFTDoge1xyXG4gICAgbGFiZWw6IFwiUm9tYW5cIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkJhc1x1MDBFOSBzdXIgdW4gcm9tYW4uXCIsXHJcbiAgfSxcclxuICBBTklNRToge1xyXG4gICAgbGFiZWw6IFwiQW5pbWVcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkJhc1x1MDBFOSBzdXIgdW5lIGF1dHJlIHNcdTAwRTlyaWUgZCdhbmltZS5cIixcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgSU1lZGlhU291cmNlID0ga2V5b2YgdHlwZW9mIE1lZGlhU291cmNlT2JqO1xyXG5leHBvcnQgY29uc3QgTWVkaWFTb3VyY2VBcnJheSA9IE9iamVjdC5rZXlzKE1lZGlhU291cmNlT2JqKSBhcyBJTWVkaWFTb3VyY2VbXSAmXHJcbltzdHJpbmcsIC4uLnN0cmluZ1tdXTtcclxuZXhwb3J0IGNvbnN0IE1lZGlhU291cmNlU2VsZWN0aW9uID0gTWVkaWFTb3VyY2VBcnJheS5tYXAoKGtleSkgPT4gKHtcclxuICBsYWJlbDogTWVkaWFTb3VyY2VPYmpba2V5XS5sYWJlbCxcclxuICBkZXNjcmlwdGlvbjogTWVkaWFTb3VyY2VPYmpba2V5XS5kZXNjcmlwdGlvbixcclxuICB2YWx1ZToga2V5LFxyXG59KSk7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgTWVkaWFGb3JtYXRPYmogPSB7XHJcbi8vICAgU0VSSUU6IHtcclxuLy8gICAgIGxhYmVsOiBcIlNcdTAwRTlyaWVcIixcclxuLy8gICAgIGRlc2NyaXB0aW9uOiBcIkRpZmZ1c1x1MDBFOSBlbiBcdTAwRTlwaXNvZGVzIHJcdTAwRTlndWxpZXJzLlwiLFxyXG4vLyAgIH0sXHJcbi8vICAgRklMTToge1xyXG4vLyAgICAgbGFiZWw6IFwiRmlsbVwiLFxyXG4vLyAgICAgZGVzY3JpcHRpb246IFwiUHJvZHVpdCBjb21tZSB1biBsb25nIG1cdTAwRTl0cmFnZS5cIixcclxuLy8gICB9LFxyXG4vLyAgIE9OQToge1xyXG4vLyAgICAgbGFiZWw6IFwiT05BXCIsXHJcbi8vICAgICBkZXNjcmlwdGlvbjogXCJEaWZmdXNcdTAwRTkgZGlyZWN0ZW1lbnQgc3VyIEludGVybmV0LlwiLFxyXG4vLyAgIH0sXHJcbi8vICAgT1ZBOiB7XHJcbi8vICAgICBsYWJlbDogXCJPVkFcIixcclxuLy8gICAgIGRlc2NyaXB0aW9uOiBcIkRlc3Rpblx1MDBFOSBcdTAwRTAgbGEgdmVudGUgZGlyZWN0ZSBhdXggY29uc29tbWF0ZXVycy5cIixcclxuLy8gICB9LFxyXG4vLyAgIFNQRUNJQUw6IHtcclxuLy8gICAgIGxhYmVsOiBcIlNwXHUwMEU5Y2lhbFwiLFxyXG4vLyAgICAgZGVzY3JpcHRpb246XHJcbi8vICAgICAgIFwiVW4gXHUwMEU5cGlzb2RlIHVuaXF1ZSBvdSB1bmUgc1x1MDBFOXJpZSBkJ1x1MDBFOXBpc29kZXMgcXVpIG5lIGZhaXQgcGFzIHBhcnRpZSBkZSBsYSBkaWZmdXNpb24gclx1MDBFOWd1bGlcdTAwRThyZSBkJ3VuZSBzXHUwMEU5cmllLlwiLFxyXG4vLyAgIH0sXHJcbi8vICAgVFZfU0hPUlQ6IHtcclxuLy8gICAgIGxhYmVsOiBcIlRWIFNob3J0XCIsXHJcbi8vICAgICBkZXNjcmlwdGlvbjpcclxuLy8gICAgICAgXCJEaWZmdXNcdTAwRTkgZW4gXHUwMEU5cGlzb2RlcyBjb3VydHMsIGdcdTAwRTluXHUwMEU5cmFsZW1lbnQgbW9pbnMgZGUgMTUgbWludXRlcyBjaGFjdW4uXCIsXHJcbi8vICAgfSxcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCB0eXBlIElNZWRpYUZvcm1hdCA9IGtleW9mIHR5cGVvZiBNZWRpYUZvcm1hdE9iajtcclxuLy8gZXhwb3J0IGNvbnN0IE1lZGlhRm9ybWF0QXJyYXkgPSBPYmplY3Qua2V5cyhNZWRpYUZvcm1hdE9iaikgYXMgSU1lZGlhRm9ybWF0W10gJlxyXG4vLyBbc3RyaW5nLCAuLi5zdHJpbmdbXV07XHJcbi8vIGV4cG9ydCBjb25zdCBNZWRpYUZvcm1hdFNlbGVjdGlvbiA9IE1lZGlhRm9ybWF0QXJyYXkubWFwKChrZXkpID0+ICh7XHJcbi8vICAgbGFiZWw6IE1lZGlhRm9ybWF0T2JqW2tleV0ubGFiZWwsXHJcbi8vICAgZGVzY3JpcHRpb246IE1lZGlhRm9ybWF0T2JqW2tleV0uZGVzY3JpcHRpb24sXHJcbi8vICAgdmFsdWU6IGtleSxcclxuLy8gfSkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lZGlhU3RhdHVzT2JqID0ge1xyXG4gIEFJUklORzoge1xyXG4gICAgbGFiZWw6IFwiRW4gY291cnNcIixcclxuICAgIHZhbHVlOiBcIkFJUklOR1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiTCdhbmltZSBlc3QgYWN0dWVsbGVtZW50IGVuIGNvdXJzIGRlIGRpZmZ1c2lvbi5cIixcclxuICB9LFxyXG4gIFBBVVNFRDoge1xyXG4gICAgbGFiZWw6IFwiRW4gcGF1c2VcIixcclxuICAgIHZhbHVlOiBcIlBBVVNFRFwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiTGEgZGlmZnVzaW9uIGRlIGwnYW5pbWUgZXN0IHRlbXBvcmFpcmVtZW50IGludGVycm9tcHVlLlwiLFxyXG4gIH0sXHJcbiAgRU5ERUQ6IHtcclxuICAgIGxhYmVsOiBcIlRlcm1pblx1MDBFOVwiLFxyXG4gICAgdmFsdWU6IFwiRU5ERURcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkwnYW5pbWUgYSB0ZXJtaW5cdTAwRTkgc2EgZGlmZnVzaW9uLlwiLFxyXG4gIH0sXHJcbiAgU1RPUFBFRDoge1xyXG4gICAgbGFiZWw6IFwiQXJyXHUwMEVBdFx1MDBFOVwiLFxyXG4gICAgdmFsdWU6IFwiU1RPUFBFRFwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiTGEgZGlmZnVzaW9uIGRlIGwnYW5pbWUgYSBcdTAwRTl0XHUwMEU5IGFyclx1MDBFQXRcdTAwRTllIGF2YW50IGxhIGZpbiBwclx1MDBFOXZ1ZS5cIixcclxuICB9LFxyXG4gIFBPU1RPTkVEOiB7XHJcbiAgICBsYWJlbDogXCJSZXBvcnRcdTAwRTlcIixcclxuICAgIHZhbHVlOiBcIlBPU1RPTkVEXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMYSBkaWZmdXNpb24gZGUgbCdhbmltZSBhIFx1MDBFOXRcdTAwRTkgcmVwb3J0XHUwMEU5ZSBcdTAwRTAgdW5lIGRhdGUgdWx0XHUwMEU5cmlldXJlLlwiLFxyXG4gIH0sXHJcbiAgU09PTjoge1xyXG4gICAgbGFiZWw6IFwiQmllbnRcdTAwRjR0XCIsXHJcbiAgICB2YWx1ZTogXCJTT09OXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJMJ2FuaW1lIGNvbW1lbmNlcmEgXHUwMEUwIFx1MDBFQXRyZSBkaWZmdXNcdTAwRTkgcHJvY2hhaW5lbWVudC5cIixcclxuICB9LFxyXG4gIGFueToge1xyXG4gICAgbGFiZWw6IFwiSW5jb25udVwiLFxyXG4gICAgdmFsdWU6IFwiYW55XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJMZSBzdGF0dXQgZGUgZGlmZnVzaW9uIGRlIGwnYW5pbWUgZXN0IGluY29ubnUuXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIElNZWRpYVN0YXR1cyA9IGtleW9mIHR5cGVvZiBNZWRpYVN0YXR1c09iajtcclxuZXhwb3J0IGNvbnN0IE1lZGlhU3RhdHVzQXJyYXkgPSBPYmplY3Qua2V5cyhNZWRpYVN0YXR1c09iaikgYXMgSU1lZGlhU3RhdHVzW10gJlxyXG5bc3RyaW5nLCAuLi5zdHJpbmdbXV07XHJcbmV4cG9ydCBjb25zdCBNZWRpYVN0YXR1c1NlbGVjdGlvbiA9IE1lZGlhU3RhdHVzQXJyYXkubWFwKChrZXkpID0+ICh7XHJcbiAgbGFiZWw6IE1lZGlhU3RhdHVzT2JqW2tleV0ubGFiZWwsXHJcbiAgZGVzY3JpcHRpb246IE1lZGlhU3RhdHVzT2JqW2tleV0uZGVzY3JpcHRpb24sXHJcbiAgdmFsdWU6IGtleSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lZGlhUGFyZW50TGFiZWxPYmogPSB7XHJcbiAgU0VRVUVMOiB7XHJcbiAgICBsYWJlbDogXCJTdWl0ZSBkaXJlY3RlXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJDXHUyMDE5ZXN0IGxhIGNvbnRpbnVhdGlvbiBkaXJlY3RlIGRlIGxcdTIwMTloaXN0b2lyZSBwcmluY2lwYWxlLlwiLFxyXG4gIH0sXHJcbiAgU1BJTl9PRkY6IHtcclxuICAgIGxhYmVsOiBcIlNwaW4tb2ZmXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJTZSBjb25jZW50cmUgc3VyIHVuIHBlcnNvbm5hZ2Ugc2Vjb25kYWlyZSBvdSB1biBhc3BlY3QgZGUgbFx1MjAxOXVuaXZlcnMgZGUgbGEgc1x1MDBFOXJpZSBvcmlnaW5hbGUuIExcdTIwMTlpbnRyaWd1ZSBlc3QgZ1x1MDBFOW5cdTAwRTlyYWxlbWVudCBpbmRcdTAwRTlwZW5kYW50ZSBkZSBsXHUyMDE5aGlzdG9pcmUgcHJpbmNpcGFsZS5cIixcclxuICB9LFxyXG4gIEFMVEVSTkFUSVZFOiB7XHJcbiAgICBsYWJlbDogXCJTdWl0ZSBhbHRlcm5hdGl2ZVwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiUHJvcG9zZSB1bmUgdmVyc2lvbiBkaWZmXHUwMEU5cmVudGUgZGUgbFx1MjAxOWhpc3RvaXJlIG9yaWdpbmFsZSwgc291dmVudCBhdmVjIGRlcyBjaGFuZ2VtZW50cyBtYWpldXJzIGRhbnMgbFx1MjAxOWludHJpZ3VlLCBsZXMgcGVyc29ubmFnZXMgb3UgbGUgbW9uZGUuXCIsXHJcbiAgfSxcclxuICBSRUJPT1Q6IHtcclxuICAgIGxhYmVsOiBcIlJcdTAwRTlhZGFwdGF0aW9uXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJSZXByZW5kIGxcdTIwMTloaXN0b2lyZSBvcmlnaW5hbGUgbWFpcyBsYSByYWNvbnRlIGRcdTIwMTl1bmUgbWFuaVx1MDBFOHJlIG5vdXZlbGxlLCBzb3V2ZW50IGF2ZWMgZGVzIGNoYW5nZW1lbnRzIGRhbnMgbGUgc3R5bGUsIGxlIHRvbiBvdSBsXHUyMDE5aW50ZXJwclx1MDBFOXRhdGlvbiBkZXMgcGVyc29ubmFnZXMuXCIsXHJcbiAgfSxcclxuICBGSUxNOiB7XHJcbiAgICBsYWJlbDogXCJGaWxtXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMZSBmaWxtIHBldXQgXHUwMEVBdHJlIHVuZSBjb250aW51YXRpb24gZGUgbFx1MjAxOWhpc3RvaXJlLCB1bmUgaGlzdG9pcmUgYWx0ZXJuYXRpdmUsIG91IHVuZSByXHUwMEU5Y2FwaXR1bGF0aW9uIGRlIGxhIHNcdTAwRTlyaWUgYXZlYyBkZXMgc2NcdTAwRThuZXMgc3VwcGxcdTAwRTltZW50YWlyZXMuXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIElNZWRpYVBhcmVudExhYmVsID0ga2V5b2YgdHlwZW9mIE1lZGlhUGFyZW50TGFiZWxPYmo7XHJcbmV4cG9ydCBjb25zdCBNZWRpYVBhcmVudExhYmVsQXJyYXkgPSBPYmplY3Qua2V5cyhcclxuICBNZWRpYVBhcmVudExhYmVsT2JqLFxyXG4pIGFzIElNZWRpYVBhcmVudExhYmVsW10gJiBbc3RyaW5nLCAuLi5zdHJpbmdbXV07XHJcbmV4cG9ydCBjb25zdCBNZWRpYVBhcmVudExhYmVsU2VsZWN0aW9uID0gTWVkaWFQYXJlbnRMYWJlbEFycmF5Lm1hcCgoa2V5KSA9PiAoe1xyXG4gIGxhYmVsOiBNZWRpYVBhcmVudExhYmVsT2JqW2tleV0ubGFiZWwsXHJcbiAgZGVzY3JpcHRpb246IE1lZGlhUGFyZW50TGFiZWxPYmpba2V5XS5kZXNjcmlwdGlvbixcclxuICB2YWx1ZToga2V5LFxyXG59KSk7XHJcblxyXG5leHBvcnQgY29uc3QgTWVkaWFHZW5yZXNPYmogPSB7XHJcbiAgQUNUSU9OOiB7XHJcbiAgICBsYWJlbDogXCJBY3Rpb25cIixcclxuICAgIHZhbHVlOiBcIkFDVElPTlwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiU2EgYm91Z2UgYmVhdWNvdXAuXCIsXHJcbiAgfSxcclxuICBBVkVOVFVSRToge1xyXG4gICAgbGFiZWw6IFwiQXZlbnR1cmVcIixcclxuICAgIHZhbHVlOiBcIkFWRU5UVVJFXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJTdWl2aWV6IGxlcyBhdmVudHVyZXMgZGVzIHBlcnNvbm5hZ2UocykuXCIsXHJcbiAgfSxcclxuICBDT01FRElFOiB7XHJcbiAgICBsYWJlbDogXCJDb21cdTAwRTlkaWVcIixcclxuICAgIHZhbHVlOiBcIkNPTUVESUVcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRyXHUwMEU4cyBkclx1MDBGNGxlIG91IGR1IG1vaW4gYydlc3QgbGUgYnV0LlwiLFxyXG4gIH0sXHJcbiAgRFJBTUU6IHtcclxuICAgIGxhYmVsOiBcIkRyYW1lXCIsXHJcbiAgICB2YWx1ZTogXCJEUkFNRVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiRHJhbWEuXCIsXHJcbiAgfSxcclxuICBGQU5UQUlTSUU6IHtcclxuICAgIGxhYmVsOiBcIkZhbnRhaXNpZVwiLFxyXG4gICAgdmFsdWU6IFwiRkFOVEFJU0lFXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJTJ1x1MDBFOWxvaWduZXIgZGUgbGEgclx1MDBFOWFsaXRcdTAwRTkuXCIsXHJcbiAgfSxcclxuICBGQU5UQVNUSVFVRToge1xyXG4gICAgbGFiZWw6IFwiRmFudGFzdGlxdWVcIixcclxuICAgIHZhbHVlOiBcIkZBTlRBU1RJUVVFXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJMZSBtb25kZSBlc3QgZmFudGFzdGlxdWUuXCIsXHJcbiAgfSxcclxuICBIT1JSRVVSOiB7XHJcbiAgICBsYWJlbDogXCJIb3JyZXVyXCIsXHJcbiAgICB2YWx1ZTogXCJIT1JSRVVSXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJMZSBidXQgYydlc3QgZCdhdm9pciBwZXVyLlwiLFxyXG4gIH0sXHJcbiAgUk9NQU5DRToge1xyXG4gICAgbGFiZWw6IFwiUm9tYW5jZVwiLFxyXG4gICAgdmFsdWU6IFwiUk9NQU5DRVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiUm9tYW5jZS5cIixcclxuICB9LFxyXG4gIFNDSV9GSToge1xyXG4gICAgbGFiZWw6IFwiU2NpLWZpXCIsXHJcbiAgICB2YWx1ZTogXCJTQ0lfRklcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlNjaWVuY2UtZmljdGlvbi5cIixcclxuICB9LFxyXG4gIFNQT1JUUzoge1xyXG4gICAgbGFiZWw6IFwiU3BvcnRzXCIsXHJcbiAgICB2YWx1ZTogXCJTUE9SVFNcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlVuIHNwb3J0IGVzdCBsZSB0aFx1MDBFOG1lIHByaW5jaXBhbCBkZSBsJ2hpc3RvaXJlLlwiLFxyXG4gIH0sXHJcbiAgVEhSSUxMRVI6IHtcclxuICAgIGxhYmVsOiBcIlRocmlsbGVyXCIsXHJcbiAgICB2YWx1ZTogXCJUSFJJTExFUlwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiTGUgYnV0IGMnZXN0IGRlIGZhaXJlIHBldXIuXCIsXHJcbiAgfSxcclxuICBNRUNIQToge1xyXG4gICAgbGFiZWw6IFwiTWVjaGFcIixcclxuICAgIHZhbHVlOiBcIk1FQ0hBXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJEZXMgcGVyc29ubmFnZXMgdXRpbGlzZW50IGRlcyByb2JvdHMgZXQgZGVzIHZcdTAwRTloaWN1bGVzIG1pbGl0YWlyZXMuXCIsXHJcbiAgfSxcclxuICBNWVNURVJFOiB7XHJcbiAgICBsYWJlbDogXCJNeXN0XHUwMEU4cmVcIixcclxuICAgIHZhbHVlOiBcIk1ZU1RFUkVcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkRlcyBcdTAwRTluaWdtZXMgb3UgZGVzIG15c3RcdTAwRThyZXMgYSByXHUwMEU5c291ZHJlcy5cIixcclxuICB9LFxyXG4gIFBTWUNIT0xPR0lRVUU6IHtcclxuICAgIGxhYmVsOiBcIlBzeWNob2xvZ2lxdWVcIixcclxuICAgIHZhbHVlOiBcIlBTWUNIT0xPR0lRVUVcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlNlIGNvbmNlbnRyZSBzdXIgbGVzIFx1MDBFOXRhdHMgXHUwMEU5bW90aW9ubmVscyBpbnRlbnNlcyBkZXMgcGVyc29ubmFnZXMgZXQgc3VyIGxhIHJlcHJcdTAwRTlzZW50YXRpb24gZGUgbGV1cnMgcGVuc1x1MDBFOWVzIGV0IGRlIGxldXIgcHN5Y2hvbG9naWUuXCIsXHJcbiAgfSxcclxuICBJU0VLQUk6IHtcclxuICAgIGxhYmVsOiBcIklzZWthaVwiLFxyXG4gICAgdmFsdWU6IFwiSVNFS0FJXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUcnVjay1rdW4uXCIsXHJcbiAgfSxcclxuICBIQVJFTToge1xyXG4gICAgbGFiZWw6IFwiSGFyZW1cIixcclxuICAgIHZhbHVlOiBcIkhBUkVNXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJQZXJzb25uYWdlIG1hc2N1bGluIHF1aSBlc3QgZW50b3VyXHUwMEU5IGRlIHBlcnNvbm5hZ2VzIGZcdTAwRTltaW5pbi5cIixcclxuICB9LFxyXG4gIFJFVkVSU0VfSEFSRU06IHtcclxuICAgIGxhYmVsOiBcIlJldmVyc2UgSGFyZW1cIixcclxuICAgIHZhbHVlOiBcIlJFVkVSU0VfSEFSRU1cIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlBlcnNvbm5hZ2UgZlx1MDBFOW1pbmluIHF1aSBlc3QgZW50b3VyXHUwMEU5IGRlIHBlcnNvbm5hZ2VzIG1hc2N1bGluLlwiLFxyXG4gIH0sXHJcbiAgRUNDSEk6IHtcclxuICAgIGxhYmVsOiBcIkVjY2hpXCIsXHJcbiAgICB2YWx1ZTogXCJFQ0NISVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiRGVzIHBlcnNvbm5hZ2VzIG9udCBkZXMgc2l0dWF0aW9ucyBcdTAwRTlyb3RpcXVlcyBleHBsaWNpdGVzLlwiLFxyXG4gIH0sXHJcbiAgU0xJQ0VfT0ZfTElGRToge1xyXG4gICAgbGFiZWw6IFwiU2xpY2Ugb2YgTGlmZVwiLFxyXG4gICAgdmFsdWU6IFwiU0xJQ0VfT0ZfTElGRVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiRGVzIHBlcnNvbm5hZ2VzIHZpdmVudCBkZXMgaGlzdG9pcmVzIHF1b3RpZGllbm5lcy5cIixcclxuICB9LFxyXG4gIFlBT0k6IHtcclxuICAgIGxhYmVsOiBcIllhb2lcIixcclxuICAgIHZhbHVlOiBcIllBT0lcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIk1hc2N1bGluICsgTWFzY3VsaW5cIixcclxuICB9LFxyXG4gIFlVUkk6IHtcclxuICAgIGxhYmVsOiBcIll1cmlcIixcclxuICAgIHZhbHVlOiBcIllVUklcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkZlbWluaW4gKyBGZW1pbmluXCIsXHJcbiAgfSxcclxuICBTSE9VTkVOOiB7XHJcbiAgICBsYWJlbDogXCJTaFx1MDE0RG5lblwiLFxyXG4gICAgdmFsdWU6IFwiU0hPVU5FTlwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgfSxcclxuICBTRUlORU46IHtcclxuICAgIGxhYmVsOiBcIlNlaW5lblwiLFxyXG4gICAgdmFsdWU6IFwiU0VJTkVOXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICB9LFxyXG4gIFNIT0pPOiB7XHJcbiAgICBsYWJlbDogXCJTaFx1MDE0RGpvXCIsXHJcbiAgICB2YWx1ZTogXCJTSE9KT1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgfSxcclxuICBKT1NFSToge1xyXG4gICAgbGFiZWw6IFwiSm9zZWlcIixcclxuICAgIHZhbHVlOiBcIkpPU0VJXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICB9LFxyXG5cclxuICBLT0RPTU9NVUtFOiB7XHJcbiAgICBsYWJlbDogXCJLb2RvbW8gTXVrYXNoaVwiLFxyXG4gICAgdmFsdWU6IFwiS09ET01PTVVLRVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIElNZWRpYUdlbnJlcyA9IGtleW9mIHR5cGVvZiBNZWRpYUdlbnJlc09iajtcclxuZXhwb3J0IGNvbnN0IE1lZGlhR2VucmVzQXJyYXkgPSBPYmplY3Qua2V5cyhNZWRpYUdlbnJlc09iaikgYXMgSU1lZGlhR2VucmVzW10gJlxyXG5bc3RyaW5nLCAuLi5zdHJpbmdbXV07XHJcbmV4cG9ydCBjb25zdCBNZWRpYUdlbnJlc1NlbGVjdGlvbiA9IE1lZGlhR2VucmVzQXJyYXkubWFwKChrZXkpID0+ICh7XHJcbiAgbGFiZWw6IE1lZGlhR2VucmVzT2JqW2tleV0ubGFiZWwsXHJcbiAgZGVzY3JpcHRpb246IE1lZGlhR2VucmVzT2JqW2tleV0uZGVzY3JpcHRpb24sXHJcbiAgdmFsdWU6IGtleSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGVUaW1lVG9ab2QgPSAoZGF0ZT86IERhdGUgfCBzdHJpbmcpID0+IHtcclxuICBpZiAoIWRhdGUpIHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG4gIGlmICh0eXBlb2YgZGF0ZSA9PT0gXCJzdHJpbmdcIikgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG5cclxuICBjb25zdCBmb3JtYXRlZFllYXIgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImZyLUZSXCIsIHtcclxuICAgIHRpbWVab25lOiBcIkV1cm9wZS9QYXJpc1wiLFxyXG4gICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgfSkuZm9ybWF0KGRhdGUpO1xyXG5cclxuICBjb25zdCBmb3JtYXRlZE1vbnRoID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJmci1GUlwiLCB7XHJcbiAgICB0aW1lWm9uZTogXCJFdXJvcGUvUGFyaXNcIixcclxuICAgIG1vbnRoOiBcIjItZGlnaXRcIixcclxuICB9KS5mb3JtYXQoZGF0ZSk7XHJcblxyXG4gIGNvbnN0IGZvcm1hdGVkRGF5ID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJmci1GUlwiLCB7XHJcbiAgICB0aW1lWm9uZTogXCJFdXJvcGUvUGFyaXNcIixcclxuICAgIGRheTogXCIyLWRpZ2l0XCIsXHJcbiAgfSkuZm9ybWF0KGRhdGUpO1xyXG5cclxuICBjb25zdCBmb3JtYXRlZFRpbWUgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImZyLUZSXCIsIHtcclxuICAgIHRpbWVab25lOiBcIkV1cm9wZS9QYXJpc1wiLFxyXG4gICAgaG91cjogXCIyLWRpZ2l0XCIsXHJcbiAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxyXG4gIH0pLmZvcm1hdChkYXRlKTtcclxuXHJcbiAgY29uc3QgZm9ybWF0ZWQgPSBgJHtmb3JtYXRlZFllYXJ9LSR7Zm9ybWF0ZWRNb250aH0tJHtmb3JtYXRlZERheX1UJHtmb3JtYXRlZFRpbWV9YDtcclxuXHJcbiAgcmV0dXJuIGZvcm1hdGVkO1xyXG5cclxuICAvLyByZXR1cm4gZGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KFwiLlwiKVswXTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkYXRlVG9ab2QgPSAoZGF0ZT86IERhdGUgfCBzdHJpbmcpID0+IHtcclxuICBpZiAoIWRhdGUpIHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG4gIGlmICh0eXBlb2YgZGF0ZSA9PT0gXCJzdHJpbmdcIikgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG5cclxuICBjb25zdCBmb3JtYXRlZFllYXIgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImZyLUZSXCIsIHtcclxuICAgIHRpbWVab25lOiBcIkV1cm9wZS9QYXJpc1wiLFxyXG4gICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgfSkuZm9ybWF0KGRhdGUpO1xyXG5cclxuICBjb25zdCBmb3JtYXRlZE1vbnRoID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJmci1GUlwiLCB7XHJcbiAgICB0aW1lWm9uZTogXCJFdXJvcGUvUGFyaXNcIixcclxuICAgIG1vbnRoOiBcIjItZGlnaXRcIixcclxuICB9KS5mb3JtYXQoZGF0ZSk7XHJcblxyXG4gIGNvbnN0IGZvcm1hdGVkRGF5ID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJmci1GUlwiLCB7XHJcbiAgICB0aW1lWm9uZTogXCJFdXJvcGUvUGFyaXNcIixcclxuICAgIGRheTogXCIyLWRpZ2l0XCIsXHJcbiAgfSkuZm9ybWF0KGRhdGUpO1xyXG5cclxuICBjb25zdCBmb3JtYXRlZCA9IGAke2Zvcm1hdGVkWWVhcn0tJHtmb3JtYXRlZE1vbnRofS0ke2Zvcm1hdGVkRGF5fWA7XHJcblxyXG4gIHJldHVybiBmb3JtYXRlZDtcclxufTtcclxuIiwgImV4cG9ydCBjb25zdCBQYXRjaFR5cGVPYmogPSB7XG4gIENSRUFURTogXCJDclx1MDBFOWF0aW9uXCIsXG4gIFVQREFURTogXCJNb2RpZmljYXRpb25cIixcbiAgREVMRVRFOiBcIlN1cHByZXNzaW9uXCIsXG4gIFJFU1RPUkU6IFwiUmVzdGF1cmF0aW9uXCIsXG59O1xuXG5leHBvcnQgdHlwZSBJUGF0Y2hUeXBlID0ga2V5b2YgdHlwZW9mIFBhdGNoVHlwZU9iajtcbmV4cG9ydCBjb25zdCBQYXRjaFR5cGVBcnJheSA9IE9iamVjdC5rZXlzKFBhdGNoVHlwZU9iaikgYXMgSVBhdGNoVHlwZVtdICZcbltzdHJpbmcsIC4uLnN0cmluZ1tdXTtcbmV4cG9ydCBjb25zdCBQYXRjaFR5cGVTZWxlY3Rpb24gPSBQYXRjaFR5cGVBcnJheS5tYXAoKGtleSkgPT4gKHtcbiAgbGFiZWw6IFBhdGNoVHlwZU9ialtrZXldLFxuICB2YWx1ZToga2V5LFxufSkpO1xuXG5leHBvcnQgY29uc3QgUGF0Y2hTdGF0dXNPYmogPSB7XG4gIFBFTkRJTkc6IFwiRW4gYXR0ZW50ZVwiLFxuICBQUk9HUkVTUzogXCJFbiBjb3VycyBkZSB2XHUwMEU5cmlmaWNhdGlvblwiLFxuICBBQ0NFUFRFRDogXCJBY2NlcHRcdTAwRTlcIixcbiAgUkVKRUNURUQ6IFwiUmVmdXNcdTAwRTlcIlxufTtcblxuZXhwb3J0IHR5cGUgSVBhdGNoU3RhdHVzID0ga2V5b2YgdHlwZW9mIFBhdGNoU3RhdHVzT2JqO1xuZXhwb3J0IGNvbnN0IFBhdGNoU3RhdHVzQXJyYXkgPSBPYmplY3Qua2V5cyhQYXRjaFN0YXR1c09iaikgYXMgSVBhdGNoU3RhdHVzW10gJlxuW3N0cmluZywgLi4uc3RyaW5nW11dO1xuXG5leHBvcnQgY29uc3QgUGF0Y2hTdGF0dXNTZWxlY3Rpb24gPSBQYXRjaFN0YXR1c0FycmF5Lm1hcCgoa2V5KSA9PiAoe1xuICBsYWJlbDogUGF0Y2hTdGF0dXNPYmpba2V5XSxcbiAgdmFsdWU6IGtleSxcbn0pKTsiLCAiZXhwb3J0IGNvbnN0IFBlcnNvblJvbGVPYmogPSB7XG4gIERPVUJMQUdFX1NFSVlVOiBcIlNlaXlcdTAxNkIgKENvbVx1MDBFOWRpZW4gZGUgZG91YmxhZ2UpXCIsXG4gIEFVVEVVUjogXCJBdXRldXIgZGUgbCdvZXV2cmVcIixcbiAgRURJVEVVUjogXCJcdTAwQzlkaXRldXJcIixcbiAgUFJPRFVDVEVVUjogXCJQcm9kdWN0ZXVyXCIsXG4gIFJFQUxJU0FURVVSOiBcIlJcdTAwRTlhbGlzYXRldXJcIixcbiAgUkVBTElTQVRFVVJfRVBJU09ERVM6IFwiUlx1MDBFOWFsaXNhdGV1ciBcdTAwRTlwaXNvZGVzXCIsXG4gIFJFQUxJU0FURVVSX01JU0VFTlBBR0U6IFwiUlx1MDBFOWFsaXNhdGV1ciBtaXNlIGVuIHBhZ2VcIixcbiAgRElSRUNURVVSX0FSVElTVElRVUVfQ0lORU1BVFJPR1JBUEhJUVVFOlxuICAgIFwiRGlyZWN0ZXVyIGFydGlzdGlxdWUgZXQgY2luXHUwMEU5bWF0cm9ncmFwaGlxdWVcIixcbiAgRElSRUNURVVSX0FOSU1BVElPTjogXCJEaXJlY3RldXIgZCdhbmltYXRpb25cIixcbiAgQ09OQ0VQVEVVUjogXCJDb25jZXB0ZXVyXCIsXG4gIEFOSU1BVEVVUl9QUklOQ0lQQUw6IFwiQW5pbWF0ZXVyIHByaW5jaXBhbFwiLFxuICBBTklNQVRFVVJfSU5URVJNRURJQUlSRTogXCJBbmltYXRldXIgaW50ZXJtXHUwMEU5ZGlhaXJlXCIsXG4gIENPTE9SSVNURVM6IFwiQ29sb3Jpc3Rlc1wiLFxuICBESVJFQ1RFVVJfRU5SRUdJU1RSRU1FTlQ6IFwiRGlyZWN0ZXVyIGQnZW5yZWdpc3RyZW1lbnRcIixcbiAgU0NFTkFSSVNURTogXCJTY2VuYXJpc3RlXCIsXG4gIEFOSU1BVEVVUl8zRDogXCJBbmltYXRldXIgM0RcIixcbiAgTUVUVEVVUl9FTl9TQ0VORTogXCJNZXR0ZXVyIGVuIHNjXHUwMEU4bmVcIixcbiAgU1VQRVJWSVNFVVI6IFwiU3VwZXJ2aXNldXJcIixcbiAgTU9OVEVVUjogXCJNb250ZXVyXCIsXG4gIFJFU1BPTlNBQkxFX0RST0lUUzogXCJSZXNwb25zYWJsZSBkZSBkcm9pdHNcIixcbiAgUFJPRFVDVEVVUl9NVVNJUVVFOiBcIlByb2R1Y3RldXIgbXVzaXF1ZVwiLFxuICBSRVNQT05TQUJMRV9NQVJLRVRJTkc6IFwiUmVzcG9uc2FibGUgbWFya2V0aW5nXCIsXG4gIERJRkZVU0VVUjogXCJEaWZmdXNldXJcIixcbiAgU1RPUllCT0FSREVSOiBcIlN0b3J5Ym9hcmRlclwiLFxuICBBUlRJU1RFX1ZGWDogXCJBcnRpc3RlIFZGWFwiLFxuICBJTkdFTklFVVJfU09OOiBcIkluZ1x1MDBFOW5pZXVyIFNvblwiLFxuICBESVJFQ1RFVVJfRE9VQkxBR0U6IFwiRGlyZWN0ZXVyIGRvdWJsYWdlXCIsXG4gIFRSQURVQ1RFVVI6IFwiVHJhZHVjdGV1clwiLFxuICBNQU5HQUtBOiBcIk1hbmdha2FcIixcbiAgQ0hBUkFDVEVSX0RFU0lHTkVSOiBcIkNoYXJhY3RlciBEZXNpZ25lclwiLFxuICBERVNTSU5BVEVVUl9ERUNPUlM6IFwiRGVzc2luYXRldXIgZGUgZGVjb3JzXCIsXG4gIFJFQUxJU0FURVVSX01JU0VfRU5fUEFHRTogXCJSZWFsaXNhdGV1ciBtaXNlIGVuIHBhZ2VcIixcbiAgQ09NUE9TSVRFVVI6IFwiQ29tcG9zaXRldXJcIixcbiAgUEFST0xJRVI6IFwiUGFyb2xpZXJcIixcbiAgQVJSQU5HRVVSOiBcIkFycmFuZ2V1clwiLFxuICBNVVNJQ0lFTjogXCJNdXNpY2llblwiLFxuICBDSEFOVEVVUl9FVVNFOiBcIkNoYW50ZXVyL2V1c2VcIixcbiAgQ0hFRl9PUkNIRVNUUkU6IFwiQ2hlZiBkJ29yY2hlc3RyZVwiLFxuICBQUk9EVUNURVVSX01VU0lDQUw6IFwiUHJvZHVjdGV1ciBtdXNpY2FsXCIsXG4gIERFU0lHTkVSX1NPTk9SRTogXCJEZXNpZ25lciBzb25vcmVcIixcbiAgTUlYRVVSOiBcIk1peGV1clwiLFxufTtcblxuZXhwb3J0IHR5cGUgSVBlcnNvblJvbGUgPSBrZXlvZiB0eXBlb2YgUGVyc29uUm9sZU9iajtcbmV4cG9ydCBjb25zdCBQZXJzb25Sb2xlQXJyYXkgPSBPYmplY3Qua2V5cyhQZXJzb25Sb2xlT2JqKSBhcyBJUGVyc29uUm9sZVtdICZcbiAgW3N0cmluZywgLi4uc3RyaW5nW11dO1xuZXhwb3J0IGNvbnN0IFBlcnNvblJvbGVTZWxlY3Rpb24gPSBQZXJzb25Sb2xlQXJyYXkubWFwKChrZXkpID0+ICh7XG4gIGxhYmVsOiBQZXJzb25Sb2xlT2JqW2tleV0sXG4gIHZhbHVlOiBrZXksXG59KSk7XG4iLCAiZXhwb3J0IGNvbnN0IFJlcG9ydFN1YmplY3RPYmogPSB7XG4gIFVTRVJfSU1BR0U6IFwiTGVzIGltYWdlcyBxdWUgbCd1dGlsaXNhdGV1ciB1dGlsaXNlIHNvbnQgaW5hcHByb3ByaVx1MDBFOWVzXCIsXG4gIFVTRVJfSU5GTzogXCJMZXMgaW5mb3JtYXRpb25zIG1pcyBwYXIgbCd1dGlsaXNhdGV1ciBzb250IGluYXBwcm9wcmlcdTAwRTllc1wiLFxufTtcblxuZXhwb3J0IHR5cGUgSVJlcG9ydFN1YmplY3QgPSBrZXlvZiB0eXBlb2YgUmVwb3J0U3ViamVjdE9iajtcbmV4cG9ydCBjb25zdCBSZXBvcnRTdWJqZWN0QXJyYXkgPSBPYmplY3Qua2V5cyhcbiAgUmVwb3J0U3ViamVjdE9iaixcbikgYXMgSVJlcG9ydFN1YmplY3RbXSAmIFtzdHJpbmcsIC4uLnN0cmluZ1tdXTtcbmV4cG9ydCBjb25zdCBSZXBvcnRTdWJqZWN0U2VsZWN0aW9uID0gUmVwb3J0U3ViamVjdEFycmF5Lm1hcCgoa2V5KSA9PiAoe1xuICBsYWJlbDogUmVwb3J0U3ViamVjdE9ialtrZXldLFxuICB2YWx1ZToga2V5LFxufSkpO1xuXG5leHBvcnQgY29uc3QgUmVwb3J0U3RhdHVzT2JqID0ge1xuICBQRU5ESU5HOiBcIkVuIGF0dGVudGVcIixcbiAgUkVKRUNURUQ6IFwiUmVmdXNcdTAwRTlcIixcbiAgVkVSSUZJRUQ6IFwiVlx1MDBFOXJpZmlcdTAwRTlcIixcbn07XG5leHBvcnQgdHlwZSBJUmVwb3J0U3RhdHVzID0ga2V5b2YgdHlwZW9mIFJlcG9ydFN0YXR1c09iajtcbmV4cG9ydCBjb25zdCBSZXBvcnRTdGF0dXNBcnJheSA9IE9iamVjdC5rZXlzKFxuICBSZXBvcnRTdGF0dXNPYmosXG4pIGFzIElSZXBvcnRTdGF0dXNbXSAmIFtzdHJpbmcsIC4uLnN0cmluZ1tdXTtcbmV4cG9ydCBjb25zdCBSZXBvcnRTdGF0dXNTZWxlY3Rpb24gPSBSZXBvcnRTdGF0dXNBcnJheS5tYXAoKGtleSkgPT4gKHtcbiAgbGFiZWw6IFJlcG9ydFN0YXR1c09ialtrZXldLFxuICB2YWx1ZToga2V5LFxufSkpO1xuIiwgImV4cG9ydCBjb25zdCBUcmFja1R5cGVPYmogPSB7XG4gIE9QRU5JTkc6IHtcbiAgICBsYWJlbDogXCJPcGVuaW5nXCIsXG4gICAgZGVzY3JpcHRpb246IFwiR1x1MDBFOW5cdTAwRTlyaXF1ZSBkZSBkXHUwMEU5YnV0XCIsXG4gICAgdmFsdWU6IFwiT1BFTklOR1wiLFxuICB9LFxuICBFTkRJTkc6IHtcbiAgICBsYWJlbDogXCJFbmRpbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJHXHUwMEU5blx1MDBFOXJpcXVlIGRlIGZpblwiLFxuICAgIHZhbHVlOiBcIkVORElOR1wiLFxuICB9LFxuICBCR006IHtcbiAgICBsYWJlbDogXCJCR01cIixcbiAgICBkZXNjcmlwdGlvbjogXCJNdXNpcXVlIGRlIGZvbmRcIixcbiAgICB2YWx1ZTogXCJCR01cIixcbiAgfSxcbiAgSU5TRVJUOiB7XG4gICAgbGFiZWw6IFwiSU5TRVJUXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTXVzaXF1ZSBwb25jdHVlbGxlIGV0IHVuaXF1ZVwiLFxuICAgIHZhbHVlOiBcIklOU0VSVFwiLFxuICB9LFxufTtcblxuZXhwb3J0IHR5cGUgSVRyYWNrVHlwZSA9IGtleW9mIHR5cGVvZiBUcmFja1R5cGVPYmo7XG5leHBvcnQgY29uc3QgVHJhY2tUeXBlQXJyYXkgPSBPYmplY3Qua2V5cyhUcmFja1R5cGVPYmopIGFzIElUcmFja1R5cGVbXSAmXG4gIFtzdHJpbmcsIC4uLnN0cmluZ1tdXTtcbmV4cG9ydCBjb25zdCBUcmFja1R5cGVTZWxlY3Rpb24gPSBUcmFja1R5cGVBcnJheS5tYXAoKGtleSkgPT4gKHtcbiAgbGFiZWw6IFRyYWNrVHlwZU9ialtrZXldLmxhYmVsLFxuICBkZXNjcmlwdGlvbjogVHJhY2tUeXBlT2JqW2tleV0uZGVzY3JpcHRpb24sXG4gIHZhbHVlOiBrZXksXG59KSk7XG4iLCAiZXhwb3J0IGNvbnN0IFVzZXJSb2xlc09iaiA9IHtcbiAgTUVNQkVSOiB7IGxhYmVsOiBcIk1lbWJyZVwiLCBsZXZlbDogMCB9LFxuICBQUkVNSVVNOiB7IGxhYmVsOiBcIlByZW1pdW1cIiwgbGV2ZWw6IDEgfSwgLy8gMSA8PCAwXCJQcmVtaXVtXCIsXG4gIE1PREVSQVRPUjogeyBsYWJlbDogXCJNb2RcdTAwRTlyYXRldXJcIiwgbGV2ZWw6IDEgPDwgMSB9LCAvLyAxIDw8IDFcIk1vZFx1MDBFOXJhdGV1clwiLFxuICBBTklNRV9NT0RFUkFUT1I6IHsgbGFiZWw6IFwiTW9kZVx1MDMwMXJhdGV1ciAtIEFuaW1lXCIsIGxldmVsOiAxIDw8IDIgfSwgLy8gMSA8PCAyXCJNb2RlXHUwMzAxcmF0ZXVyIC0gQW5pbWVcIixcbiAgTUFOR0FfTU9ERVJBVE9SOiB7IGxhYmVsOiBcIk1vZGVcdTAzMDFyYXRldXIgLSBNYW5nYVwiLCBsZXZlbDogMSA8PCAzIH0sIC8vIDEgPDwgM1wiTW9kZVx1MDMwMXJhdGV1ciAtIE1hbmdhXCIsXG4gIENIQVJBQ1RFUl9NT0RFUkFUT1I6IHsgbGFiZWw6IFwiTW9kZVx1MDMwMXJhdGV1ciAtIFBlcnNvbm5hZ2VcIiwgbGV2ZWw6IDEgPDwgNCB9LCAvLyAxIDw8IDRcIk1vZGVcdTAzMDFyYXRldXIgLSBQZXJzb25uYWdlXCIsXG4gIFBFUlNPTl9NT0RFUkFUT1I6IHsgbGFiZWw6IFwiTW9kZVx1MDMwMXJhdGV1ciAtIFBlcnNvbm5lc1wiLCBsZXZlbDogMSA8PCA1IH0sIC8vIDEgPDwgNVwiTW9kZVx1MDMwMXJhdGV1ciAtIFBlcnNvbm5lc1wiLFxuICBUUkFDS19NT0RFUkFUT1I6IHsgbGFiZWw6IFwiTW9kZVx1MDMwMXJhdGV1ciAtIE11c2lxdWVcIiwgbGV2ZWw6IDEgPDwgNiB9LCAvLyAxIDw8IDZcIk1vZGVcdTAzMDFyYXRldXIgLSBNdXNpcXVlXCIsXG4gIENPTVBBTllfTU9ERVJBVE9SOiB7IGxhYmVsOiBcIk1vZGVcdTAzMDFyYXRldXIgLSBTb2NpXHUwMEU5dFx1MDBFOVwiLCBsZXZlbDogMSA8PCA3IH0sIC8vIDEgPDwgN1wiTW9kZVx1MDMwMXJhdGV1ciAtIFNvY2lcdTAwRTl0XHUwMEU5XCIsXG4gIEFETUlOSVNUUkFUT1I6IHsgbGFiZWw6IFwiQWRtaW5pc3RyYXRldXJcIiwgbGV2ZWw6IDEgPDwgOCB9LCAvLyAxIDw8IDhcIkFkbWluaXN0cmF0ZXVyXCIsXG4gIEFDVFVOSU1FOiB7IGxhYmVsOiBcIkFjdHVuaW1lXCIsIGxldmVsOiAxIDw8IDkgfSwgLy8gMSA8PCA5XCJBY3R1bmltZVwiLFxufTtcblxuZXhwb3J0IHR5cGUgSVVzZXJSb2xlcyA9IGtleW9mIHR5cGVvZiBVc2VyUm9sZXNPYmo7XG5leHBvcnQgY29uc3QgVXNlclJvbGVzTGV2ZWwgPSBPYmplY3QuZnJvbUVudHJpZXMoXG4gIChPYmplY3Qua2V5cyhVc2VyUm9sZXNPYmopIGFzIElVc2VyUm9sZXNbXSkubWFwKChrZXkpID0+IFtcbiAgICBrZXksXG4gICAgVXNlclJvbGVzT2JqW2tleV0ubGV2ZWwsXG4gIF0pLFxuKSBhcyBSZWNvcmQ8SVVzZXJSb2xlcywgbnVtYmVyPjtcblxuZXhwb3J0IGNvbnN0IFVzZXJSb2xlc0xhYmVsID0gT2JqZWN0LmZyb21FbnRyaWVzKFxuICAoT2JqZWN0LmtleXMoVXNlclJvbGVzT2JqKSBhcyBJVXNlclJvbGVzW10pLm1hcCgoa2V5KSA9PiBbXG4gICAga2V5LFxuICAgIFVzZXJSb2xlc09ialtrZXldLmxhYmVsLFxuICBdKSxcbikgYXMgUmVjb3JkPElVc2VyUm9sZXMsIHN0cmluZz47XG5cbmV4cG9ydCBjb25zdCBVc2VyUm9sZXNBcnJheSA9IE9iamVjdC5rZXlzKFVzZXJSb2xlc09iaikgYXMgSVVzZXJSb2xlc1tdICZcbltzdHJpbmcsIC4uLnN0cmluZ1tdXTtcbmV4cG9ydCBjb25zdCBVc2VyUm9sZXNTZWxlY3Rpb24gPSBVc2VyUm9sZXNBcnJheS5tYXAoKGtleSkgPT4gKHtcbiAgbGFiZWw6IFVzZXJSb2xlc09ialtrZXldLmxhYmVsLFxuICB2YWx1ZToga2V5LFxufSkpO1xuXG5leHBvcnQgY29uc3QgdXNlckhhc1JvbGUgPSAoXG4gIHVzZXJSb2xlczogSVVzZXJSb2xlc1tdLFxuICByb2xlczogSVVzZXJSb2xlcyB8IElVc2VyUm9sZXNbXSxcbikgPT4ge1xuICBpZiAoQXJyYXkuaXNBcnJheShyb2xlcykpIHtcbiAgICByZXR1cm4gcm9sZXMuZXZlcnkoKHJvbGUpID0+IHVzZXJSb2xlcy5pbmNsdWRlcyhyb2xlKSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHVzZXJSb2xlcy5pbmNsdWRlcyhyb2xlcyk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRSb2xlTGV2ZWwgPSAocm9sZTogSVVzZXJSb2xlcykgPT4ge1xuICBjb25zdCBsZXZlbCA9IFVzZXJSb2xlc0xldmVsW3JvbGVdO1xuICBpZiAobGV2ZWwgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IFwiUlx1MDBGNGxlIG5vbiByZWNvbm51XCI7XG4gIH1cbiAgcmV0dXJuIGxldmVsO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZXJQZXJtaXNzaW9uTGV2ZWwgPSAodXNlclJvbGVzOiBJVXNlclJvbGVzW10pID0+XG4gIHVzZXJSb2xlcy5yZWR1Y2UoKGFjYywgcm9sZSkgPT4gYWNjIHwgZ2V0Um9sZUxldmVsKHJvbGUpLCAwKTtcblxuZXhwb3J0IGNvbnN0IHVzZXJQZXJtaXNzaW9uSXNIaWdoZXJUaGFuID0gKFxuICB1c2VyUm9sZXM6IElVc2VyUm9sZXNbXSxcbiAgcm9sZXM6IElVc2VyUm9sZXMgfCBJVXNlclJvbGVzW10sXG4pID0+IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocm9sZXMpKSB7XG4gICAgcmV0dXJuIHJvbGVzLmV2ZXJ5KFxuICAgICAgKHJvbGUpID0+IHVzZXJQZXJtaXNzaW9uTGV2ZWwodXNlclJvbGVzKSA+PSBnZXRSb2xlTGV2ZWwocm9sZSksXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdXNlclBlcm1pc3Npb25MZXZlbCh1c2VyUm9sZXMpID49IHVzZXJQZXJtaXNzaW9uTGV2ZWwoW3JvbGVzXSk7XG4gIH1cbn07XG5cblxuZXhwb3J0IGNvbnN0IFVzZXJBbmltZUxpc3RTdGF0dXNPYmogPSB7XG4gIFBMQU5OSU5HOiB7IGxhYmVsOiBcIkVuIGF0dGVudGVcIiwgdmFsdWU6IFwiUExBTk5JTkdcIiB9LFxuICBXQVRDSElORzogeyBsYWJlbDogXCJFbiBjb3Vyc1wiLCB2YWx1ZTogXCJXQVRDSElOR1wiIH0sXG4gIFBBVVNFRDogeyBsYWJlbDogXCJFbiBwYXVzZVwiLCB2YWx1ZTogXCJQQVVTRURcIiB9LFxuICBDT01QTEVURUQ6IHsgbGFiZWw6IFwiVGVybWluXHUwMEU5XCIsIHZhbHVlOiBcIkNPTVBMRVRFRFwiIH0sXG4gIERST1BQRUQ6IHsgbGFiZWw6IFwiQWJhbmRvbm5cdTAwRTlcIiwgdmFsdWU6IFwiRFJPUFBFRFwiIH0sXG59XG5cbmV4cG9ydCB0eXBlIElVc2VyQW5pbWVMaXN0U3RhdHVzID0ga2V5b2YgdHlwZW9mIFVzZXJBbmltZUxpc3RTdGF0dXNPYmo7XG5leHBvcnQgY29uc3QgVXNlckFuaW1lTGlzdFN0YXR1c0FycmF5ID0gT2JqZWN0LmtleXMoVXNlckFuaW1lTGlzdFN0YXR1c09iaikgYXMgSVVzZXJBbmltZUxpc3RTdGF0dXNbXSAmXG5bc3RyaW5nLCAuLi5zdHJpbmdbXV07XG5leHBvcnQgY29uc3QgVXNlckFuaW1lTGlzdFN0YXR1c1NlbGVjdGlvbiA9IFVzZXJBbmltZUxpc3RTdGF0dXNBcnJheS5tYXAoKGtleSkgPT4gKHtcbiAgbGFiZWw6IFVzZXJBbmltZUxpc3RTdGF0dXNPYmpba2V5XS5sYWJlbCxcbiAgdmFsdWU6IGtleSxcbn0pKTsiLCAiZXhwb3J0IGNvbnN0IFBlcm1pc3Npb25zT2JqID0ge1xyXG4gIC8vIEFkbWluaXN0cmF0ZXVycyBtb2RpZmljYXRpb25zIGRpcmVjdGVzO1xyXG4gIEdST1VQRV9WRVJJRlk6ICdWXHUwMEU5cmlmaWVyIHVuIGdyb3VwZScsXHJcbiAgR1JPVVBFX0NSRUFURTogJ0Fqb3V0ZXIgdW4gZ3JvdXBlJyxcclxuICBHUk9VUEVfUEFUQ0g6ICdNb2RpZmllciB1biBncm91cGUnLFxyXG4gIEdST1VQRV9ERUxFVEU6ICdTdXBwcmltZXIgdW4gZ3JvdXBlJyxcclxuICBHUk9VUEVfUkVRVUVTVF9ERUxFVEU6XHJcbiAgICBcIlN1cHByaW1lciBsYSBkZW1hbmRlIGQnYWpvdXQvbW9kaWZpY2F0aW9uIGQndW4gZ3JvdXBlXCIsXHJcbiAgLyoqICovXHJcbiAgQU5JTUVfVkVSSUZZOiAnVlx1MDBFOXJpZmllciB1biBhbmltZScsXHJcbiAgQU5JTUVfQ1JFQVRFOiAnQWpvdXRlciB1biBhbmltZScsXHJcbiAgQU5JTUVfUEFUQ0g6ICdNb2RpZmllciB1biBhbmltZScsXHJcbiAgQU5JTUVfREVMRVRFOiAnU3VwcHJpbWVyIHVuIGFuaW1lJyxcclxuICBBTklNRV9SRVFVRVNUX0RFTEVURTogXCJTdXBwcmltZXIgbGEgZGVtYW5kZSBkJ2Fqb3V0L21vZGlmaWNhdGlvbiBkJ3VuIGFuaW1lXCIsXHJcbiAgLyoqICovXHJcbiAgTUFOR0FfVkVSSUZZOiAnVlx1MDBFOXJpZmllciB1biBtYW5nYScsXHJcbiAgTUFOR0FfQ1JFQVRFOiAnQWpvdXRlciB1biBtYW5nYScsXHJcbiAgTUFOR0FfUEFUQ0g6ICdNb2RpZmllciB1biBtYW5nYScsXHJcbiAgTUFOR0FfREVMRVRFOiAnU3VwcHJpbWVyIHVuIG1hbmdhJyxcclxuICBNQU5HQV9SRVFVRVNUX0RFTEVURTogXCJTdXBwcmltZXIgbGEgZGVtYW5kZSBkJ2Fqb3V0L21vZGlmaWNhdGlvbiBkJ3VuIG1hbmdhXCIsXHJcbiAgLyoqICovXHJcbiAgQ0hBUkFDVEVSX1ZFUklGWTogJ1ZcdTAwRTlyaWZpZXIgdW4gcGVyc29ubmFnZScsXHJcbiAgQ0hBUkFDVEVSX0NSRUFURTogJ0Fqb3V0ZXIgdW4gcGVyc29ubmFnZScsXHJcbiAgQ0hBUkFDVEVSX1BBVENIOiAnTW9kaWZpZXIgdW4gcGVyc29ubmFnZScsXHJcbiAgQ0hBUkFDVEVSX0RFTEVURTogJ1N1cHByaW1lciB1biBwZXJzb25uYWdlJyxcclxuICBDSEFSQUNURVJfUkVRVUVTVF9ERUxFVEU6XHJcbiAgICBcIlN1cHByaW1lciBsYSBkZW1hbmRlIGQnYWpvdXQvbW9kaWZpY2F0aW9uIGQndW4gcGVyc29ubmFnZVwiLFxyXG4gIC8qKiAqL1xyXG4gIFBFUlNPTl9WRVJJRlk6ICdWXHUwMEU5cmlmaWVyIHVuZSBwZXJzb25uYWxpdFx1MDBFOScsXHJcbiAgUEVSU09OX0NSRUFURTogJ0Fqb3V0ZXIgdW5lIHBlcnNvbm5hbGl0XHUwMEU5JyxcclxuICBQRVJTT05fUEFUQ0g6ICdNb2RpZmllciB1bmUgcGVyc29ubmFsaXRcdTAwRTknLFxyXG4gIFBFUlNPTl9ERUxFVEU6ICdTdXBwcmltZXIgdW5lIHBlcnNvbm5hbGl0XHUwMEU5JyxcclxuICBQRVJTT05fUkVRVUVTVF9ERUxFVEU6XHJcbiAgICBcIlN1cHByaW1lciBsYSBkZW1hbmRlIGQnYWpvdXQvbW9kaWZpY2F0aW9uIGQndW5lIHBlcnNvbm5hbGl0XHUwMEU5XCIsXHJcbiAgLyoqICovXHJcbiAgQ09NUEFOWV9WRVJJRlk6ICdWXHUwMEU5cmlmaWVyIHVuZSBzb2NpXHUwMEU5dFx1MDBFOScsXHJcbiAgQ09NUEFOWV9DUkVBVEU6ICdBam91dGVyIHVuZSBzb2NpXHUwMEU5dFx1MDBFOScsXHJcbiAgQ09NUEFOWV9QQVRDSDogJ01vZGlmaWVyIHVuZSBzb2NpXHUwMEU5dFx1MDBFOScsXHJcbiAgQ09NUEFOWV9ERUxFVEU6ICdTdXBwcmltZXIgdW5lIHNvY2lcdTAwRTl0XHUwMEU5JyxcclxuICBDT01QQU5ZX1JFUVVFU1RfREVMRVRFOlxyXG4gICAgXCJTdXBwcmltZXIgbGEgZGVtYW5kZSBkJ2Fqb3V0L21vZGlmaWNhdGlvbiBkJ3VuZSBzb2NpXHUwMEU5dFx1MDBFOVwiLFxyXG4gIC8qKiAqL1xyXG4gIFRSQUNLX1ZFUklGWTogJ1ZcdTAwRTlyaWZpZXIgdW5lIG11c2lxdWUnLFxyXG4gIFRSQUNLX0NSRUFURTogJ0Fqb3V0ZXIgdW5lIG11c2lxdWUnLFxyXG4gIFRSQUNLX1BBVENIOiAnTW9kaWZpZXIgdW5lIG11c2lxdWUnLFxyXG4gIFRSQUNLX0RFTEVURTogJ1N1cHByaW1lciB1bmUgbXVzaXF1ZScsXHJcbiAgVFJBQ0tfUkVRVUVTVF9ERUxFVEU6XHJcbiAgICBcIlN1cHByaW1lciBsYSBkZW1hbmRlIGQnYWpvdXQvbW9kaWZpY2F0aW9uIGQndW5lIG11c2lxdWVcIixcclxuICAvKiogKi9cclxuICBJTUFHRV9WRVJJRlk6ICdWXHUwMEU5cmlmaWVyIHVuZSBpbWFnZScsXHJcbiAgSU1BR0VfQ1JFQVRFOiAnQWpvdXRlciB1bmUgaW1hZ2UnLFxyXG4gIElNQUdFX1BBVENIOiAnTW9kaWZpZXIgdW5lIGltYWdlJyxcclxuICBJTUFHRV9ERUxFVEU6ICdTdXBwcmltZXIgdW5lIGltYWdlJyxcclxuICBJTUFHRV9SRVFVRVNUX0RFTEVURTogXCJTdXBwcmltZXIgbGEgZGVtYW5kZSBkJ2Fqb3V0L21vZGlmaWNhdGlvbiBkJ3VuZSBpbWFnZVwiLFxyXG4gIC8qKiAqL1xyXG4gIFVTRVJfQ1JFQVRFOiAnQWpvdXRlciB1biB1dGlsaXNhdGV1cicsXHJcbiAgVVNFUl9QQVRDSDogJ01vZGlmaWVyIHVuIHV0aWxpc2F0ZXVyJyxcclxuICBVU0VSX0RFTEVURTogJ1N1cHByaW1lciB1biB1dGlsaXNhdGV1cicsXHJcblxyXG4gIC8vIE1vZFx1MDBFOXJhdGV1cnMgZ2VzdGlvbnMgZGVzIGRlbWFuZGVzXHJcbiAgQU5JTUVfUkVRVUVTVF9WRVJJRlk6XHJcbiAgICBcIkFjY2VwdGVyL1JlZnVzZXIgbGEgZGVtYW5kZSBkJ2Fqb3V0L21vZGlmaWNhdGlvbiBkJ3VuIGFuaW1lXCIsXHJcbiAgQU5JTUVfUkVRVUVTVF9QQVRDSDogXCJNb2RpZmllciBsYSBkZW1hbmRlIGQnYWpvdXQvbW9kaWZpY2F0aW9uIGQndW4gYW5pbWVcIixcclxuICAvKiogKi9cclxuICBHUk9VUEVfUkVRVUVTVF9WRVJJRlk6XHJcbiAgICBcIkFjY2VwdGVyL1JlZnVzZXIgbGEgZGVtYW5kZSBkJ2Fqb3V0L21vZGlmaWNhdGlvbiBkJ3VuIGdyb3VwZVwiLFxyXG4gIEdST1VQRV9SRVFVRVNUX1BBVENIOiBcIk1vZGlmaWVyIGxhIGRlbWFuZGUgZCdham91dC9tb2RpZmljYXRpb24gZCd1biBncm91cGVcIixcclxuICAvKiogKi9cclxuICBJTUFHRV9SRVFVRVNUX1ZFUklGWTpcclxuICAgIFwiQWNjZXB0ZXIvUmVmdXNlciBsYSBkZW1hbmRlIGQnYWpvdXQvbW9kaWZpY2F0aW9uIGQndW5lIGltYWdlXCIsXHJcbiAgSU1BR0VfUkVRVUVTVF9QQVRDSDogXCJNb2RpZmllciBsYSBkZW1hbmRlIGQnYWpvdXQvbW9kaWZpY2F0aW9uIGQndW5lIGltYWdlXCIsXHJcbiAgLyoqICovXHJcbiAgTUFOR0FfUkVRVUVTVF9WRVJJRlk6XHJcbiAgICBcIkFjY2VwdGVyL1JlZnVzZXIgbGEgZGVtYW5kZSBkJ2Fqb3V0L21vZGlmaWNhdGlvbiBkJ3VuIG1hbmdhXCIsXHJcbiAgTUFOR0FfUkVRVUVTVF9QQVRDSDogXCJNb2RpZmllciBsYSBkZW1hbmRlIGQnYWpvdXQvbW9kaWZpY2F0aW9uIGQndW4gbWFuZ2FcIixcclxuICAvKiogKi9cclxuICBDSEFSQUNURVJfUkVRVUVTVF9WRVJJRlk6XHJcbiAgICBcIkFjY2VwdGVyL1JlZnVzZXIgbGEgZGVtYW5kZSBkJ2Fqb3V0L21vZGlmaWNhdGlvbiBkJ3VuIHBlcnNvbm5hZ2VcIixcclxuICBDSEFSQUNURVJfUkVRVUVTVF9QQVRDSDpcclxuICAgIFwiTW9kaWZpZXIgbGEgZGVtYW5kZSBkJ2Fqb3V0L21vZGlmaWNhdGlvbiBkJ3VuIHBlcnNvbm5hZ2VcIixcclxuICAvKiogKi9cclxuICBQRVJTT05fUkVRVUVTVF9WRVJJRlk6XHJcbiAgICBcIkFjY2VwdGVyL1JlZnVzZXIgbGEgZGVtYW5kZSBkJ2Fqb3V0L21vZGlmaWNhdGlvbiBkJ3VuZSBwZXJzb25uZVwiLFxyXG4gIFBFUlNPTl9SRVFVRVNUX1BBVENIOlxyXG4gICAgXCJNb2RpZmllciBsYSBkZW1hbmRlIGQnYWpvdXQvbW9kaWZpY2F0aW9uIGQndW5lIHBlcnNvbm5lXCIsXHJcbiAgLyoqICovXHJcbiAgQ09NUEFOWV9SRVFVRVNUX1ZFUklGWTpcclxuICAgIFwiQWNjZXB0ZXIvUmVmdXNlciBsYSBkZW1hbmRlIGQnYWpvdXQvbW9kaWZpY2F0aW9uIGQndW5lIHNvY2lcdTAwRTl0XHUwMEU5XCIsXHJcbiAgQ09NUEFOWV9SRVFVRVNUX1BBVENIOlxyXG4gICAgXCJNb2RpZmllciBsYSBkZW1hbmRlIGQnYWpvdXQvbW9kaWZpY2F0aW9uIGQndW5lIHNvY2lcdTAwRTl0XHUwMEU5XCIsXHJcbiAgLyoqICovXHJcbiAgVFJBQ0tfUkVRVUVTVF9WRVJJRlk6XHJcbiAgICBcIkFjY2VwdGVyL1JlZnVzZXIgbGEgZGVtYW5kZSBkJ2Fqb3V0L21vZGlmaWNhdGlvbiBkJ3VuZSBtdXNpcXVlXCIsXHJcbiAgVFJBQ0tfUkVRVUVTVF9QQVRDSDogXCJNb2RpZmllciBsYSBkZW1hbmRlIGQnYWpvdXQvbW9kaWZpY2F0aW9uIGQndW5lIG11c2lxdWVcIixcclxuXHJcbiAgLy8gTWVtYnJlcyBwZXJtaXNzaW9ucyBwdWJsaWNcclxuICBBTklNRV9DUkVBVEVfUkVRVUVTVDogXCJEZW1hbmRlciBsJ2Fqb3V0IGQndW4gYW5pbWVcIixcclxuICBBTklNRV9QQVRDSF9SRVFVRVNUOiBcIkRlbWFuZGUgbGEgbW9kaWZpY2F0aW9uIGQndW4gYW5pbWVcIixcclxuICAvKiogKi9cclxuICBHUk9VUEVfQ1JFQVRFX1JFUVVFU1Q6IFwiRGVtYW5kZXIgbCdham91dCBkJ3VuIGdyb3VwZVwiLFxyXG4gIEdST1VQRV9QQVRDSF9SRVFVRVNUOiBcIkRlbWFuZGUgbGEgbW9kaWZpY2F0aW9uIGQndW4gZ3JvdXBlXCIsXHJcbiAgLyoqICovXHJcbiAgSU1BR0VfQ1JFQVRFX1JFUVVFU1Q6IFwiRGVtYW5kZXIgbCdham91dCBkJ3VuZSBpbWFnZVwiLFxyXG4gIElNQUdFX1BBVENIX1JFUVVFU1Q6IFwiRGVtYW5kZSBsYSBtb2RpZmljYXRpb24gZCd1bmUgaW1hZ2VcIixcclxuICAvKiogKi9cclxuICBNQU5HQV9DUkVBVEVfUkVRVUVTVDogXCJEZW1hbmRlciBsJ2Fqb3V0IGQndW4gbWFuZ2FcIixcclxuICBNQU5HQV9QQVRDSF9SRVFVRVNUOiBcIkRlbWFuZGUgbGEgbW9kaWZpY2F0aW9uIGQndW4gbWFuZ2FcIixcclxuICAvKiogKi9cclxuICBDSEFSQUNURVJfQ1JFQVRFX1JFUVVFU1Q6IFwiRGVtYW5kZXIgbCdham91dCBkJ3VuIHBlcnNvbm5hZ2VcIixcclxuICBDSEFSQUNURVJfUEFUQ0hfUkVRVUVTVDogXCJEZW1hbmRlIGxhIG1vZGlmaWNhdGlvbiBkJ3VuIHBlcnNvbm5hZ2VcIixcclxuICAvKiogKi9cclxuICBQRVJTT05fQ1JFQVRFX1JFUVVFU1Q6IFwiRGVtYW5kZXIgbCdham91dCBkJ3VuZSBwZXJzb25uYWxpdFx1MDBFOVwiLFxyXG4gIFBFUlNPTl9QQVRDSF9SRVFVRVNUOiBcIkRlbWFuZGUgbGEgbW9kaWZpY2F0aW9uIGQndW5lIHBlcnNvbm5hbGl0XHUwMEU5XCIsXHJcbiAgLyoqICovXHJcbiAgQ09NUEFOWV9DUkVBVEVfUkVRVUVTVDogXCJEZW1hbmRlciBsJ2Fqb3V0IGQndW5lIHNvY2lcdTAwRTl0XHUwMEU5XCIsXHJcbiAgQ09NUEFOWV9QQVRDSF9SRVFVRVNUOiBcIkRlbWFuZGUgbGEgbW9kaWZpY2F0aW9uIGQndW5lIHNvY2lcdTAwRTl0XHUwMEU5XCIsXHJcbiAgLyoqICovXHJcbiAgVFJBQ0tfQ1JFQVRFX1JFUVVFU1Q6IFwiRGVtYW5kZXIgbCdham91dCBkJ3VuZSBtdXNpcXVlXCIsXHJcbiAgVFJBQ0tfUEFUQ0hfUkVRVUVTVDogXCJEZW1hbmRlIGxhIG1vZGlmaWNhdGlvbiBkJ3VuZSBtdXNpcXVlXCIsXHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBJUGVybWlzc2lvbnMgPSBrZXlvZiB0eXBlb2YgUGVybWlzc2lvbnNPYmo7XHJcbmV4cG9ydCBjb25zdCBQZXJtaXNzaW9uc0FycmF5ID0gT2JqZWN0LmtleXMoUGVybWlzc2lvbnNPYmopIGFzIElQZXJtaXNzaW9uc1tdICZcclxuICBbc3RyaW5nLCAuLi5zdHJpbmdbXV07XHJcbmV4cG9ydCBjb25zdCBQZXJtaXNzaW9uc1NlbGVjdGlvbiA9IFBlcm1pc3Npb25zQXJyYXkubWFwKChrZXkpID0+ICh7XHJcbiAgbGFiZWw6IFBlcm1pc3Npb25zT2JqW2tleSBhcyBrZXlvZiB0eXBlb2YgUGVybWlzc2lvbnNPYmpdLFxyXG4gIHZhbHVlOiBrZXksXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGVja1Blcm1pc3Npb25zID0gKFxyXG4gIFBlcm1pc3Npb25zOiBJUGVybWlzc2lvbnNbXSxcclxuICBhY2NvdW50UGVybWlzc2lvbnM6IElQZXJtaXNzaW9uc1tdLFxyXG4gIHN0cmljdDogYm9vbGVhbiA9IHRydWVcclxuKSA9PiB7XHJcbiAgbGV0IHZhbGlkID0gZmFsc2U7XHJcblxyXG4gIGlmICghc3RyaWN0KVxyXG4gICAgdmFsaWQgPSBQZXJtaXNzaW9ucy5zb21lKChyb2xlKSA9PlxyXG4gICAgICBhY2NvdW50UGVybWlzc2lvbnMuZmluZCgocikgPT4gciA9PT0gcm9sZSlcclxuICAgICk7XHJcbiAgZWxzZVxyXG4gICAgdmFsaWQgPSBQZXJtaXNzaW9ucy5ldmVyeSgocm9sZSkgPT5cclxuICAgICAgYWNjb3VudFBlcm1pc3Npb25zLmZpbmQoKHIpID0+IHIgPT09IHJvbGUpXHJcbiAgICApO1xyXG4gIHJldHVybiB2YWxpZDtcclxufTtcclxuIiwgImV4cG9ydCBjb25zdCBBUElDb2RlT2JqID0ge1xyXG4gIE9LOiB7IGxhYmVsOiAnT0snLCB2YWx1ZTogMjAwIH0sXHJcbiAgTk9UX0ZPVU5EOiB7IGxhYmVsOiAnRG9ublx1MDBFOWVzIGludHJvdXZhYmxlcycsIHZhbHVlOiA0MDQgfSxcclxuICBTRVJWRVJfRVJST1I6IHsgbGFiZWw6ICdFcnJldXIgc2VydmV1cicsIHZhbHVlOiA1MDAgfSxcclxuICBFTVBUWV9DSEFOR0VTOiB7IGxhYmVsOiAnQXVjdW4gY2hhbmdlbWVudCcsIHZhbHVlOiA0MDAgfSxcclxuICBCQURfRU5UUlk6IHsgbGFiZWw6ICdNYXV2YWlzZSBlbnRyXHUwMEU5ZScsIHZhbHVlOiA0MDAgfSxcclxuICBGT1JCSURERU46IHsgbGFiZWw6ICdJbnRlcmRpdCcsIHZhbHVlOiA0MDMgfSxcclxuICBVTkFVVEhPUklaRUQ6IHsgbGFiZWw6ICdOb24gYXV0b3Jpc1x1MDBFOScsIHZhbHVlOiA0MDEgfSxcclxuICBCQURfUkVRVUVTVDogeyBsYWJlbDogJ01hdXZhaXNlIHJlcXVcdTAwRUF0ZScsIHZhbHVlOiA0MDAgfSxcclxuICBCQURfUkVTUE9OU0U6IHsgbGFiZWw6ICdNYXV2YWlzZSByXHUwMEU5cG9uc2UnLCB2YWx1ZTogNDAwIH0sXHJcbiAgVE9PX01BTllfUkVRVUVTVFM6IHsgbGFiZWw6ICdUcm9wIGRlIHJlcXVcdTAwRUF0ZXMnLCB2YWx1ZTogNDI5IH0sXHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBJQVBJQ29kZSA9IGtleW9mIHR5cGVvZiBBUElDb2RlT2JqO1xyXG5leHBvcnQgY29uc3QgQVBJQ29kZUFycmF5ID0gT2JqZWN0LmtleXMoQVBJQ29kZU9iaikgYXMgSUFQSUNvZGVbXSAmXHJcbiAgW3N0cmluZywgLi4uc3RyaW5nW11dO1xyXG5leHBvcnQgY29uc3QgQVBJQ29kZVNlbGVjdGlvbiA9IEFQSUNvZGVBcnJheS5tYXAoKGtleSkgPT4gKHtcclxuICBsYWJlbDogQVBJQ29kZU9ialtrZXldLmxhYmVsLFxyXG4gIHZhbHVlOiBrZXksXHJcbn0pKTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFPLElBQU0sa0JBQWtCO0FBQUEsRUFDN0IsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsWUFBWTtBQUFBLEVBQ1osUUFBUTtBQUNWO0FBR08sSUFBTSxvQkFBb0IsT0FBTztBQUFBLEVBQ3RDO0FBQ0Y7QUFDTyxJQUFNLHdCQUF3QixrQkFBa0IsSUFBSSxDQUFDLFNBQVM7QUFBQSxFQUNuRSxPQUFPLGdCQUFnQixHQUFHO0FBQUEsRUFDMUIsT0FBTztBQUNULEVBQUU7QUFFSyxJQUFNLG9CQUFvQjtBQUFBLEVBQy9CLGVBQWU7QUFBQSxFQUNmLGlCQUFpQjtBQUFBLEVBQ2pCLGdCQUFnQjtBQUFBLEVBQ2hCLGVBQWU7QUFBQSxFQUNmLHVCQUF1QjtBQUFBLEVBQ3ZCLHVCQUF1QjtBQUFBLEVBQ3ZCLHFCQUFxQjtBQUFBLEVBRXJCLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGtCQUFrQjtBQUFBLEVBQ2xCLGNBQWM7QUFBQSxFQUNkLGdCQUFnQjtBQUFBLEVBQ2hCLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUVkLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGtCQUFrQjtBQUFBLEVBQ2xCLGNBQWM7QUFBQSxFQUNkLGdCQUFnQjtBQUFBLEVBQ2hCLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUVkLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGdCQUFnQjtBQUFBLEVBQ2hCLG1CQUFtQjtBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUdmLDZCQUE2QjtBQUFBLEVBQzdCLDZCQUE2QjtBQUFBLEVBQzdCLDhCQUE4QjtBQUFBLEVBQzlCLDhCQUE4QjtBQUFBLEVBQzlCLGlDQUFpQztBQUFBLEVBQ2pDLDZCQUE2QjtBQUFBLEVBQzdCLCtCQUErQjtBQUFBLEVBQy9CLDZCQUE2QjtBQUFBLEVBRTdCLDZCQUE2QjtBQUFBLEVBQzdCLDZCQUE2QjtBQUFBLEVBQzdCLDhCQUE4QjtBQUFBLEVBQzlCLDhCQUE4QjtBQUFBLEVBQzlCLGlDQUFpQztBQUFBLEVBQ2pDLDZCQUE2QjtBQUFBLEVBQzdCLCtCQUErQjtBQUFBLEVBQy9CLDZCQUE2QjtBQUFBLEVBRTdCLDJCQUEyQjtBQUFBLEVBQzNCLDJCQUEyQjtBQUFBLEVBQzNCLDRCQUE0QjtBQUFBLEVBQzVCLDRCQUE0QjtBQUFBLEVBQzVCLCtCQUErQjtBQUFBLEVBQy9CLDJCQUEyQjtBQUFBLEVBQzNCLDZCQUE2QjtBQUFBLEVBQzdCLDJCQUEyQjtBQUFBLEVBRTNCLDZCQUE2QjtBQUFBLEVBQzdCLDZCQUE2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
