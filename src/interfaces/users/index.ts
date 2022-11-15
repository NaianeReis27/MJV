export interface IUserRequest {
    name: string
    email: string
    password: string
}

export interface IUser {
    id: string
    name: string
    email: string
    createdAt: Date
    updatedAt: Date
}

export interface INewUser {
    id: string
    name: string
    email: string
    password?:string
    createdAt: Date
    updatedAt: Date
}

export interface IUserLogin {
    email: string
    password: string
}

export interface IUserUpdate {
    name?: string
    email?: string
    password?: string
    isAdm?: string
    isActive?: string
    createdAt?: string
    updatedAt?: string
    id?: string
}