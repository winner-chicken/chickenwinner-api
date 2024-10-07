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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const hashpass_pipe_1 = require("./pipes/hashpass.pipe");
const dtos_1 = require("./dtos");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async createEmailUser(createUserDto) {
        const userCreated = await this.usersService.createUserByEmail(createUserDto);
        if (userCreated) {
            const { message, token } = userCreated;
            if (message === 'User already exists but is not active') {
                return {
                    message,
                    token,
                };
            }
            return {
                message: 'User created successfully',
                status: 'code-sended',
                token,
            };
        }
    }
    async createSocialUser(createUserDto) {
        const userCreated = await this.usersService.createUserBySocial(createUserDto);
        if (userCreated) {
            const { message, token } = userCreated;
            if (message === 'User already exists but is not active') {
                return {
                    message,
                    token,
                };
            }
            return {
                message: 'User created successfully',
                status: 'code-sended',
                token,
            };
        }
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)('register'),
    (0, common_1.UsePipes)(new hashpass_pipe_1.HashpassPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CreateEmailUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createEmailUser", null);
__decorate([
    (0, common_1.Post)('register-social'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CreateSocialUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createSocialUser", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map