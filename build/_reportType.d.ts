import { ITargetPath, ITargetPathTypeFull } from "./utils/_global";
import { IReportStatus, IReportSubject } from "./utils/_reportUtil";
import { IPaginationResponse } from "./_paginationType";
import { IMediaDB, IMediaRelation } from "./_mediaType";
import { IUserFull } from "./_userType";
export interface IReportRoot<TPath extends ITargetPath = ITargetPath> {
    status: IReportStatus;
    target: IMediaRelation;
    targetPath: TPath;
    subject: IReportSubject;
    message: string;
    author: IMediaRelation;
}
export type IReport<TPath extends ITargetPath = ITargetPath> = IReportRoot<TPath> & {
    id: string;
};
export interface IReportFull<TPath extends ITargetPath = ITargetPath> extends IReport<TPath> {
    target: IMediaRelation & ITargetPathTypeFull<TPath>;
    author: IUserFull;
}
export type IReportDB = IMediaDB & IReport;
export type IReportPaginationResponse = IPaginationResponse<IReport>;
