import { ComponentType, MessageComponentInteraction } from 'discord.js';

export type ComponentBase = {
    name: string;
    type: ComponentType;
    execute: (interaction: MessageComponentInteraction) => Promise<void> | void;
};
