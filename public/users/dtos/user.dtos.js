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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = exports.CreateEmailUserDto = exports.CreateSocialUserDto = exports.UserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const user_entity_1 = require("../entities/user.entity");
class UserDto extends user_entity_1.User {
}
exports.UserDto = UserDto;
class CreateSocialUserDto extends (0, mapped_types_1.PartialType)(user_entity_1.User) {
}
exports.CreateSocialUserDto = CreateSocialUserDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'El nombre debe ser un texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre no puede estar vacío' }),
    __metadata("design:type", String)
], CreateSocialUserDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'El apellido debe ser un texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El apellido no puede estar vacío' }),
    __metadata("design:type", String)
], CreateSocialUserDto.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'El correo electrónico debe ser un texto' }),
    (0, class_validator_1.IsEmail)({}, { message: 'El correo electrónico debe ser válido' }),
    __metadata("design:type", String)
], CreateSocialUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'La imagen de perfil debe ser un texto' }),
    (0, class_validator_1.IsUrl)({}, { message: 'La imagen de perfil debe ser una URL válida' }),
    __metadata("design:type", String)
], CreateSocialUserDto.prototype, "profilePicture", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'El ID de Facebook debe ser un texto' }),
    __metadata("design:type", String)
], CreateSocialUserDto.prototype, "facebookId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'El ID de Google debe ser un texto' }),
    __metadata("design:type", String)
], CreateSocialUserDto.prototype, "googleId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'El ID de Apple debe ser un texto' }),
    __metadata("design:type", String)
], CreateSocialUserDto.prototype, "appleId", void 0);
__decorate([
    (0, class_validator_1.IsDate)({ message: 'La fecha de nacimiento debe ser una fecha válida' }),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsNotEmpty)({ message: 'La fecha de nacimiento no puede estar vacía' }),
    __metadata("design:type", Date)
], CreateSocialUserDto.prototype, "birthDate", void 0);
class CreateEmailUserDto extends (0, mapped_types_1.PartialType)(user_entity_1.User) {
}
exports.CreateEmailUserDto = CreateEmailUserDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'El nombre debe ser un texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre no puede estar vacío' }),
    __metadata("design:type", String)
], CreateEmailUserDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'El apellido debe ser un texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El apellido no puede estar vacío' }),
    __metadata("design:type", String)
], CreateEmailUserDto.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'La contraseña debe ser un texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'La contraseña no puede estar vacía' }),
    __metadata("design:type", String)
], CreateEmailUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'El correo electrónico debe ser válido' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El correo electrónico no puede estar vacío' }),
    __metadata("design:type", String)
], CreateEmailUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsDate)({ message: 'La fecha de nacimiento debe ser una fecha válida' }),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsNotEmpty)({ message: 'La fecha de nacimiento no puede estar vacía' }),
    __metadata("design:type", Date)
], CreateEmailUserDto.prototype, "birthDate", void 0);
class UpdateUserDto extends (0, mapped_types_1.PartialType)(UserDto) {
}
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=user.dtos.js.map