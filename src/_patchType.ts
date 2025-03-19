import { IPaginationResponse } from "./_paginationType";
import { IPatchStatus, IPatchType, ITargetPath, ITargetPathType, ITargetPathTypeFull } from "./utils";
import { IMediaDB, IMediaRelation } from "./_mediaType";
import { IUserFull } from "./_userType";

export interface IPatchRoot<TPath extends ITargetPath = ITargetPath> {
  ref?: IMediaRelation // Reference a un autre patch
  type: IPatchType; // Type de demande
  status: IPatchStatus; // Statut de la demande
  target: IMediaRelation // ID Media cible
  targetPath: TPath; // Path Media cible
  description?: string; // Description ajouté par le demandeur
  reason?: string; // Raison d'un refus
  original: ITargetPathType<TPath>; // Données du media avant modification
  changes: any; // Modifications apportées
  isChangesUpdated: boolean; // Si un modérateur a effectué des modifications en plus; (permet de bloqué l'auteur de faire de nouvelle modification)
  author: IMediaRelation // Auteur de la demande
  moderator?: IMediaRelation // Modérateur qui vérifie
}

export type IPatch<TPath extends ITargetPath = ITargetPath> = IPatchRoot<TPath> & { id: string };
export interface IPatchFull<TPath extends ITargetPath = ITargetPath> extends IPatch<TPath> {
  ref: IPatchFull;
  target: IMediaRelation & ITargetPathTypeFull<TPath>;
  author: IUserFull;
  moderator?: IUserFull;
}
export type IPatchDB<TPath extends ITargetPath = ITargetPath> = IMediaDB & IPatch<TPath>;
export type IPatchPaginationResponse<TPath extends ITargetPath = ITargetPath> = IPaginationResponse<IPatch<TPath>>;
