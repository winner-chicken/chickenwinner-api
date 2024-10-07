import { UsersService } from './users.service';
import { CreateEmailUserDto, CreateSocialUserDto } from './dtos';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createEmailUser(createUserDto: CreateEmailUserDto): Promise<{
        message: string;
        token: string;
        status?: undefined;
    } | {
        message: string;
        status: string;
        token: string;
    }>;
    createSocialUser(createUserDto: CreateSocialUserDto): Promise<{
        message: string;
        token: string;
        status?: undefined;
    } | {
        message: string;
        status: string;
        token: string;
    }>;
}
