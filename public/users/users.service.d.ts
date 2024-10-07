import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { CreateEmailUserDto, CreateSocialUserDto } from './dtos';
import { AuthService } from 'src/auth/auth.service';
export declare class UsersService {
    private userModel;
    private readonly authService;
    constructor(userModel: Model<User>, authService: AuthService);
    checkIfUserExists(email: string): Promise<boolean>;
    checkIfUserExistsByPhoneNumber(phoneNumber: string): Promise<boolean>;
    createUserByEmail(createUserDto: CreateEmailUserDto): Promise<unknown | {
        message: string;
    }>;
    getUserByEmail(email: string): Promise<User>;
    createUserBySocial(createUserDto: CreateSocialUserDto): Promise<unknown>;
}
