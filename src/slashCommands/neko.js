const { SlashCommandBuilder } = require("@discordjs/builders")
const { ChannelType } = require("discord.js")
const akaneko = require('akaneko');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("neko")
        .setDescription("El bot respondera con una neko.")
        .addBooleanOption(option =>
            option.setName('nsfw')
                .setDescription('+18')),

    /**
     * 
     * @param {import("discord.js").Client<true>} client 
     * @param {import("discord.js").ChatInputCommandInteraction<"cached">} interaction 
     */
    async run(client,interaction){
        if(interaction.channel?.type==ChannelType.GuildText){
            let nsfw = interaction.options.getBoolean("nsfw");
            //interaction.reply("No va el comando por ahora");
            
            if(nsfw!=null && nsfw){
                if(await !interaction.channel.nsfw){
                    interaction.reply("En este canal no te puedo mandar fotos nsfw :(");
                } else {
                    interaction.reply(await akaneko.lewdNeko());   
                }
            } else {
                interaction.reply(await akaneko.neko());
            }
        }
    }
}
