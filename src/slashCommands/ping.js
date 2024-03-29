const { SlashCommandBuilder } = require("@discordjs/builders")
//const { MessageEmbed } = require("discord.js")
//const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("El bot respondera con su ping en ms."),

    /**
     * 
     * @param {import("discord.js").Client<true>} client 
     * @param {import("discord.js").ChatInputCommandInteraction<"cached">} interaction 
     */
    async run(client,interaction){
        //interaction.reply({ content: `**Pong! ${client.ws.ping}ms**`})
        interaction.reply(`**Pong!** Mi latencia es de **${client.ws.ping} ms**.`)
    }
}