import 'dotenv/config';

import { NikoClient } from './structures/Client.js';
const client = new NikoClient();

(async () => {
    await client.login(process.env.DISCORD_BOT_TOKEN!);
})();
