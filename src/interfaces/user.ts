// export interface IUser {
//     ID: string;
//     username: string;
//     email: string;
//     picture: string;
//     isVerified: boolean;
//     provider: string;
//     socialID: string;
//     metadata: any;
//     createdAt: string;
//     updatedAt: string;
// }

export interface IUser {
    email: string;
    is_active: boolean;
    is_superuser: boolean;
    full_name: string;
    id: number;
}

export interface IUserUpdate {
    email?: string;
    full_name?: string;
    password?: string;
    is_active?: boolean;
    is_superuser?: boolean;
}

export interface IUserCreate {
    email: string;
    full_name?: string;
    password?: string;
    is_active?: boolean;
    is_superuser?: boolean;
}
