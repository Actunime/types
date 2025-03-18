import { ITargetPath } from "./utils/_global";
import { IReportStatus, IReportSubject } from "./utils/_reportUtil";
import { IPaginationResponse } from "./_paginationType";
import { IMediaDB, IMediaRelation } from "./_mediaType";
export interface IReportRoot {
    status: IReportStatus;
    by?: IMediaRelation;
    target: IMediaRelation;
    targetPath: ITargetPath;
    subject: IReportSubject;
    message: string;
    author: IMediaRelation;
}
export type IReport = IReportRoot & {
    id: string;
};
export type IReportDB = IMediaDB & IReport;
export type IReportPaginationResponse = IPaginationResponse<IReport>;
//# sourceMappingURL=_reportType.d.ts.map