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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_entity_1 = require("./entities/user.entity");
const auth_service_1 = require("../auth/auth.service");
let UsersService = class UsersService {
    constructor(userModel, authService) {
        this.userModel = userModel;
        this.authService = authService;
    }
    async checkIfUserExists(email) {
        const user = await this.userModel.findOne({ email });
        return !!user;
    }
    async checkIfUserExistsByPhoneNumber(phoneNumber) {
        const user = await this.userModel.findOne({ phoneNumber });
        return !!user;
    }
    async createUserByEmail(createUserDto) {
        try {
            const exists = await this.checkIfUserExists(createUserDto.email);
            if (exists) {
                const user = await this.getUserByEmail(createUserDto.email);
                if (!user?.isActive) {
                    console.log('User already exists 2');
                    return {
                        message: 'User already exists but is not active',
                        token: this.authService.generateToken(user),
                    };
                }
                throw new common_1.HttpException('User already exists', common_1.HttpStatus.CONFLICT);
            }
            else {
                const user = new this.userModel(createUserDto);
                await user.save();
                const token = this.authService.generateToken(user);
                return { user, token };
            }
        }
        catch (error) {
            console.error('Error creating user:', error);
            throw new common_1.HttpException(error.message || 'User cannot be created', error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getUserByEmail(email) {
        return this.userModel.findOne({ email });
    }
    async createUserBySocial(createUserDto) {
        try {
            const exists = await this.checkIfUserExists(createUserDto.email);
            if (exists) {
                const user = await this.getUserByEmail(createUserDto.email);
                if (!user?.isActive) {
                    console.log('User already exists 2');
                    return {
                        message: 'User already exists but is not active',
                        token: this.authService.generateToken(user),
                    };
                }
                throw new common_1.HttpException('User already exists', common_1.HttpStatus.CONFLICT);
            }
            else {
                const user = new this.userModel(createUserDto);
                await user.save();
                const token = this.authService.generateToken(user);
                return {
                    user,
                    token,
                };
            }
        }
        catch (error) {
            console.error('Error creating user:', error);
            throw new common_1.HttpException(error.message || 'User cannot be created', error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => auth_service_1.AuthService))),
    __metadata("design:paramtypes", [mongoose_2.Model,
        auth_service_1.AuthService])
], UsersService);
//# sourceMappingURL=users.service.js.map