import { BaseGuildTextChannel, Message } from 'discord.js';

export type IQueueMetadata = {
    channel: BaseGuildTextChannel;
    lastPlayerStartMessage: Message;
};
