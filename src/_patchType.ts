import { IPaginationResponse } from "./_paginationType";
import { IPatchStatus, IPatchType, ITargetPath } from "./utils";
import { IMediaDB, IMediaRelation } from "./_mediaType";

export interface IPatchRoot<T = any> {
  ref?: IMediaRelation // Reference a un autre patch
  type: IPatchType; // Type de demande
  status: IPatchStatus; // Statut de la demande
  target: IMediaRelation // ID Media cible
  targetPath: ITargetPath; // Path Media cible
  description?: string; // Description ajouté par le demandeur
  reason?: string; // Raison d'un refus
  original: T; // Données du media avant modification
  changes: T; // Modifications apportées
  isChangesUpdated: boolean; // Si un modérateur a effectué des modifications en plus; (permet de bloqué l'auteur de faire de nouvelle modification)
  author: IMediaRelation // Auteur de la demande
  moderator?: IMediaRelation // Modérateur qui vérifie
}

export type IPatch<T = any> = IPatchRoot<T> & { id: string };
export type IPatchDB<T = any> = IMediaDB & IPatch<T>;
export type IPatchPaginationResponse<T = any> = IPaginationResponse<IPatch<T>>;
