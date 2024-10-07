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
exports.UserBaseSchema = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const uuid_1 = require("uuid");
let UserBaseSchema = class UserBaseSchema extends mongoose_2.Document {
};
exports.UserBaseSchema = UserBaseSchema;
__decorate([
    (0, mongoose_1.Prop)({ unique: true, default: uuid_1.v4 }),
    __metadata("design:type", String)
], UserBaseSchema.prototype, "uk", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: Date.now }),
    __metadata("design:type", Date)
], UserBaseSchema.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: Date.now }),
    __metadata("design:type", Date)
], UserBaseSchema.prototype, "updatedAt", void 0);
exports.UserBaseSchema = UserBaseSchema = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, id: false })
], UserBaseSchema);
//# sourceMappingURL=user.base.entity.js.map