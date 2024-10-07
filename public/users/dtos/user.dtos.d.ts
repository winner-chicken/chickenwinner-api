import { User } from '../entities/user.entity';
export declare class UserDto extends User {
}
declare const CreateSocialUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<User>>;
export declare class CreateSocialUserDto extends CreateSocialUserDto_base {
    firstName: string;
    lastName: string;
    email: string;
    profilePicture: string;
    facebookId?: string;
    googleId?: string;
    appleId?: string;
    birthDate: Date;
}
declare const CreateEmailUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<User>>;
export declare class CreateEmailUserDto extends CreateEmailUserDto_base {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    birthDate: Date;
}
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<UserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
}
export {};
