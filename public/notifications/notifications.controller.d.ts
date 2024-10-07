import { NotificationsService } from './notifications.service';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    test(body: {
        tokens: string[];
        message: string;
        data?: object;
        title?: string;
        subtitle?: string;
        sound?: string;
        badge?: number;
        priority?: 'default' | 'normal' | 'high';
        channelId?: string;
        image?: string;
    }): Promise<import("expo-server-sdk").ExpoPushTicket[]>;
}
