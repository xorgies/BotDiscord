const { SlashCommandBuilder } = require("@discordjs/builders")
const { ChannelType } = require("discord.js")
const akaneko = require('akaneko');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("lewdbomb")
        .setDescription("El bot respondera con una bomba H.")
        .addIntegerOption(option => 
            option.setName('tam')
                .setDescription('Tam de la bomba')
                .setRequired(true)
                .setMinValue(1)
                .setMaxValue(10)
        ),

    /**
     * 
     * @param {import("discord.js").Client<true>} client 
     * @param {import("discord.js").ChatInputCommandInteraction<"cached">} interaction 
     */
    async run(client,interaction){
        if(interaction.channel?.type==ChannelType.GuildText){
            if(await !interaction.channel.nsfw){
                interaction.reply("En este canal no te puedo mandar fotos nsfw :(");
            } else {
                let tam = interaction.options.getInteger("tam");
                interaction.reply(await akaneko.lewdBomb(tam));   
            }
        }
    }
}