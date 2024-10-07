"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const backend_1 = require("@clerk/backend");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    generateToken(user) {
        const payload = { email: user.email, sub: user._id };
        return this.jwtService.sign(payload);
    }
    sendNumber() {
        return true;
    }
    validatePinCode(number, email) {
        console.log('number', number);
        return number === '123456';
    }
    generateRandomNumber() {
        return Math.floor(100000 + Math.random() * 900000);
    }
    async login(email, password) {
        const user = await this.usersService.getUserByEmail(email);
        if (!user) {
            throw new common_1.HttpException('User not found', common_1.HttpStatus.UNAUTHORIZED);
        }
        if (!user.password) {
            throw new common_1.HttpException('Different signup method used, please login with the same method or reset your password', common_1.HttpStatus.UNAUTHORIZED);
        }
        const isMatch = await bcrypt.compare(password, user.password);
        console.log(isMatch);
        if (!isMatch) {
            throw new common_1.HttpException('Invalid credentials', common_1.HttpStatus.ACCEPTED);
        }
        if (user.isActive) {
            return {
                message: 'User exists but is not active',
                status: 'inactive',
            };
        }
        const payload = {
            email: user.email,
            sub: user._id,
            name: user.firstName,
            lstName: user.lastName,
            isActive: user.isActive,
            balance: user.balance,
        };
        return {
            access_token: this.generateToken(payload),
        };
    }
    async validateIdSession(id) {
        try {
            const expoKey = 'sk_test_Q93j3qhp7pZGmuRcChOEh7XLd9uIWQnp6dRapbQNvc';
            const clerkClient = (0, backend_1.createClerkClient)({
                secretKey: expoKey,
            });
            const session = await clerkClient.sessions.getSession(id);
            const userData = await clerkClient.users.getUser(session.userId);
            return userData;
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteSession(id) {
        try {
            const expoKey = 'sk_test_Q93j3qhp7pZGmuRcChOEh7XLd9uIWQnp6dRapbQNvc';
            const clerkClient = (0, backend_1.createClerkClient)({
                secretKey: expoKey,
            });
            await clerkClient.sessions.revokeSession(id);
            return {
                message: 'Session closed successfully',
            };
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async activeUser(email, code) {
        try {
            const user = await this.usersService.getUserByEmail(email);
            if (!user) {
                throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
            }
            if (user.isActive) {
                return {
                    message: 'User is already active',
                };
            }
            const isMatch = this.validatePinCode(code, email);
            if (!isMatch) {
                return {
                    message: 'Invalid code',
                };
            }
            user.isActive = true;
            await user.save();
            return {
                message: 'User activated successfully',
            };
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UsersService))),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map