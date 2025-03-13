import { Schema } from "mongoose";
import { IMediaBase } from "./_mediaType";
import { IPaginationResponse } from "./_paginationType";
import { IPatchStatus, IPatchType, ITargetPath } from "./utils";

export interface IPatch<T = any, Type = IPatchType> {
  _id: Schema.Types.ObjectId; // ID Mongoose
  id: string; // ID de la demande
  ref?: { id: string; } // Reference a un autre patch
  type: Type; // Type de demande
  status: IPatchStatus; // Statut de la demande
  target: { id: string; } // ID Media cible
  targetPath: ITargetPath; // Path Media cible
  description?: string; // Description ajouté par le demandeur
  reason?: string; // Raison d'un refus
  original: T; // Données du media avant modification
  changes: T; // Modifications apportées
  isChangesUpdated: boolean; // Si un modérateur a effectué des modifications en plus; (permet de bloqué l'auteur de faire de nouvelle modification)
  author: { id: string; } // Auteur de la demande
  moderator?: { id: string; } // Modérateur qui vérifie
  createdAt: Date; // Date de création de la modification
  updatedAt: Date; // Date de mise à jour de la modification
}

export type IPatchOptionnal<T = any, Type = IPatchType> =
  Type extends "CREATE" ?
  Pick<IPatch<T>, 'id' | 'type' | 'target' | 'targetPath' | 'original' | 'description' | 'author' | 'ref'>
  :
  Type extends "UPDATE" ?
  Pick<IPatch<T>, 'id' | 'type' | 'target' | 'targetPath' | 'original' | 'description' | 'changes' | 'author' | 'ref'>
  :
  Type extends "MODERATOR_CREATE" ?
  Pick<IPatch<T>, 'id' |  'type' | 'status' | 'target' | 'targetPath' | 'original' | 'description' | 'moderator' | 'author' | 'ref'>
  : Type extends "MODERATOR_UPDATE" ?
  Pick<IPatch<T>, 'id' | 'type' | 'status' | 'target' | 'targetPath' | 'original' | 'description' | 'changes' | 'moderator' | 'author' | 'ref'>
  : IPatch<T, Type>;

export type IPatchPaginationResponse = IPaginationResponse<IPatch>;
