const clientId = '986738145456447519'
const DiscordRPC = require("discord-rpc");
const RPC = new DiscordRPC.Client({ transport: 'ipc'});

DiscordRPC.register(clientId);

async function setActivity() {
    if (!RPC) return;
    RPC.setActivity({
        details: `senseiwise.xyz`,
        state: `Watching Web Requests`,
        largeImageKey: `sensei`,
        largeImageText: `senseiwise.xyz`,
        instance: false,
        buttons: [
            {
                label: `Sensei Wise ⚔️`,
                url: `https://senseiwise.xyz`,
            },
            {
                label: `Twitter 🐦`,
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