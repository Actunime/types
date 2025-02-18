



export interface IAuthorizationCode {
    code: string;
    clientId: string;
    userId: string;
    device: string;
    createdAt: Date;
}