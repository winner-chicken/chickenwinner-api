import { ExpoPushTicket } from 'expo-server-sdk';
export declare class NotificationsService {
    private expo;
    constructor();
    sendPushNotification(targetTokens: string[], message: string, data?: object, title?: string, subtitle?: string, sound?: 'default' | null, badge?: number, priority?: 'default' | 'normal' | 'high', channelId?: string, image?: string): Promise<ExpoPushTicket[]>;
}
