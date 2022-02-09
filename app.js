// This template was made by FusionTerror.
const DiscordRPC = require('discord-rpc'); // Requiring the discord-rpc package.
const client = new DiscordRPC.Client({ transport: 'ipc' }); // Creating a client variable with is our rpc client.
require('dotenv').config(); // Requiring the content of our .env file.

(async () => {
    client.on('ready', async () => { // Calling the ready event.
        await client.setActivity({ // Setting the Rich Presence Activity based on what is passed in here.
            buttons: [{ label: "Immettere Nome", url: "Immettere Link" }], //per aggiungere un bottone copiare da dalla prima parentesi { fino all'ultima } mettendo una virgola , in mezzo così da lasciare spazio
            details: "Name",
            largeImageKey: "Name of large image",
            largeImageText: "Text in large image",
            smallImageKey: "Name of small image",
            smallImageText: "Text in small image"
        }).catch(err => console.log(err));

        console.log("Discord Rich Presence has been applicated.");
    });

    await client.login({ clientId: process.env.applicationID }).catch(console.error); // Logging into our application.
})();
