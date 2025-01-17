import { ComponentType, type MessageComponentInteraction } from 'discord.js';
import { BaseComponent } from '../structures/Component.js';

export default class PingButton extends BaseComponent {
    public constructor() {
        super({
            name: 'ping-button',
            type: ComponentType.Button
        });
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public execute(interaction: MessageComponentInteraction): void {}
}
