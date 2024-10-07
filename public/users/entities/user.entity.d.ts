import { UserBaseSchema } from 'src/shared/entities/user.base.entity';
export declare class User extends UserBaseSchema {
    firstName: string;
    middleName: string;
    lastName: string;
    maternalSurname: string;
    birthDate: Date;
    email: string;
    password: string;
    phoneNumber: string;
    creditCardNumber: string;
    bankInstitution: string;
    cvv: string;
    profilePicture: string;
    isBanned: boolean;
    isActive: boolean;
    verificationCode: string;
    resetPasswordCode: string;
    balance: number;
    username: string;
    expoToken: string;
    state: string;
    city: string;
    address: string;
    postalCode: string;
    country: string;
    googleId: string;
    facebookId: string;
    appleId: string;
    latitude: number;
    longitude: number;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, import("mongoose").Document<unknown, any, User> & User & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & Required<{
    _id: unknown;
}>>;
