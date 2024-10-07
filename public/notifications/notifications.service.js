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
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const expo_server_sdk_1 = require("expo-server-sdk");
let NotificationsService = class NotificationsService {
    constructor() {
        this.expo = new expo_server_sdk_1.Expo();
    }
    async sendPushNotification(targetTokens, message, data, title, subtitle, sound, badge, priority, channelId, image) {
        const messages = [];
        for (const pushToken of targetTokens) {
            if (!expo_server_sdk_1.Expo.isExpoPushToken(pushToken)) {
                console.error(`Push token ${pushToken} no es válido.`);
                continue;
            }
            messages.push({
                to: pushToken,
                sound: sound ?? 'default',
                body: message,
                data,
                title,
                subtitle,
                badge,
                priority,
                channelId,
            });
        }
        const chunks = this.expo.chunkPushNotifications(messages);
        const tickets = [];
        for (const chunk of chunks) {
            try {
                const ticketChunk = await this.expo.sendPushNotificationsAsync(chunk);
                tickets.push(...ticketChunk);
            }
            catch (error) {
                console.error('Error al enviar notificaciones:', error);
            }
        }
        return tickets;
    }
};
exports.NotificationsService = NotificationsService;
exports.NotificationsService = NotificationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], NotificationsService);
//# sourceMappingURL=notifications.service.js.map