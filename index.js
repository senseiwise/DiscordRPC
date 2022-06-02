const clientId = 'clientID here'
const DiscordRPC = require("discord-rpc");
const RPC = new DiscordRPC.Client({ transport: 'ipc'});

DiscordRPC.register(clientId);

async function setActivity() {
    if (!RPC) return;
    RPC.setActivity({
        details: `Join Pingrhub`,
        state: `Watching Pingrhub`,
        largeImageKey: `pingr`,
        largeImageText: `pingrhub`,
        instance: false,
        buttons: [
            {
                label: `Server`,
                url: `https://discord.gg/pings`,
            },
            {
                label: `Twitter`,
                url: `https://twitter.com/senseiwisee`,
            }
        ]
    })
}

RPC.on('ready', async () => {
    setActivity();
    console.log(`The RPC has been connected to user senseiwise#0001`)
    setInterval(() => {
        setActivity();
    }, 15 * 1000);
})
RPC.login({ clientId: clientId }).catch(err => console.log(err))
