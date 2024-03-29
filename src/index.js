const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");
const config = require("../config.json");
const fs = require("fs");
let {readdirSync} = require("fs");
const akaneko = require('akaneko');

const client = new Client({
    intents: [
        GatewayIntentBits.AutoModerationConfiguration,
        GatewayIntentBits.AutoModerationExecution,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildScheduledEvents,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
    ],
    partials:[
        Partials.Channel,
        Partials.GuildMember,
        Partials.GuildScheduledEvent,
        Partials.Message,
        Partials.Reaction,
        Partials.ThreadMember,
        Partials.User,
    ]
});

client.slashCommands = new Collection();
const slashCommandsFiles = fs.readdirSync("./src/slashCommands").filter(file => file.endsWith("js"));

for(const file of slashCommandsFiles){
    const slash = require(`./slashCommands/${file}`);
    console.log(`Slash commands - ${file} cargado`);
    client.slashCommands.set(slash.data.name,slash);
}

client.on("interactionCreate", async (interaction) => {
    if (interaction.isChatInputCommand()){
        if(!interaction.isCommand()) return;

        const slashCommand = client.slashCommands.get(interaction.commandName);
    
        if(!slashCommand) return;
    
        try{
            await slashCommand.run(client, interaction);
        }catch(e){
            console.error(e);
        }
    }
   
})

client.on("ready", () => {
    console.log(`Listo como ${client.user.tag}`);
    
});

client.on("messageCreate", async(message) => {
    let mensaje = message.content;
    
    if (mensaje.toLowerCase().includes("sergio") && mensaje.toLowerCase().includes("odiamos")) {
        replyMessage(message,"Calla puto");
    }
});

client.login(config.token);

async function replyMessage(message,mensaje) {
    message.reply(mensaje);
}
