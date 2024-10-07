import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    generateToken(user: any): string;
    sendNumber(): boolean;
    validatePinCode(number: string, email: string): number is "123456";
    generateRandomNumber(): number;
    login(email: string, password: string): Promise<{
        message: string;
        status: string;
        access_token?: undefined;
    } | {
        access_token: string;
        message?: undefined;
        status?: undefined;
    }>;
    validateIdSession(id: string): Promise<any>;
    deleteSession(id: string): Promise<any>;
    activeUser(email: string, code: string): Promise<any>;
}
