// This template was made by sonoCristy.
const DiscordRPC = require('discord-rpc');
const client = new DiscordRPC.Client({ transport: 'ipc' });
require('dotenv').config();

(async () => {
    client.on('ready', async () => {
        await client.setActivity({
            buttons: [{ label: "Immettere Nome", url: "Immettere Link" }], // Per aggiungere un bottone copiare da dalla prima parentesi { fino all'ultima } mettendo una virgola , in mezzo così da lasciare spazio
            details: "Name",
            largeImageKey: "Name of large image",
            largeImageText: "Text in large image",
            smallImageKey: "Name of small image",
            smallImageText: "Text in small image"
        }).catch(err => console.log(err));

        console.log("Discord Rich Presence has been applicated.");
    });

    await client.login({ clientId: process.env.applicationID }).catch(console.error);
})();
