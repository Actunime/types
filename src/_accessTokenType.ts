



export interface IAccessToken {
    token: string;
    refreshToken: string;
    clientId: string;
    userId: string;
    device: string;
    lastActivity: Date;
    createdAt: Date;
}