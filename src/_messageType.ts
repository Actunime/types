// import { ITargetPath } from "@actunime/utils/_global";
import { IUser } from "./_userType";

export interface IMessage {
  id: string;
  content: string;
  changes: { content: string; at: Date }[];
  replyTo?: { id: string; data?: IMessage };
  replys?: IMessage[]; // Virtual
  author: { id: string; data?: IUser };
  target: { id: string; data?: any };
  targetPath: string; // ITargetPath;
  deleted: boolean;
  deletedBy?: { id: string; data?: IUser };
  deletedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}
