import { AuthService } from './auth.service';
import { PinCodeDto } from './dtos';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    validateSession(id: string): Promise<any>;
    login(body: any): Promise<{
        message: string;
        status: string;
        access_token?: undefined;
    } | {
        access_token: string;
        message?: undefined;
        status?: undefined;
    }>;
    validatePin(body: PinCodeDto): Promise<{
        message: string;
        status: string;
    }>;
}
