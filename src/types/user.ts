export interface User {
    uid: string;
    name: string;
    email: string;
    password?: string;
    token: string;
}