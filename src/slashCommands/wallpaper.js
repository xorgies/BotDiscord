const { SlashCommandBuilder } = require("@discordjs/builders")
const { ChannelType } = require("discord.js")
const akaneko = require('akaneko');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("wallpaper")
        .setDescription("El bot respondera con un wallpaper.")
        .addStringOption(option =>
            option.setName('formato')
                .setDescription('Formato del wallpaper')
                .setRequired(true)
                .addChoices(
                    { name: "desktop", value:"desktop"},
                    { name: "mobile", value:"mobile"}
                ))
        .addBooleanOption(option =>
            option.setName('nsfw')
                .setDescription('Tipo del wallpaper')),

    /**
     * 
     * @param {import("discord.js").Client<true>} client 
     * @param {import("discord.js").ChatInputCommandInteraction<"cached">} interaction 
     */
    async run(client,interaction){
        if(interaction.channel?.type==ChannelType.GuildText){
            let nsfw = interaction.options.getBoolean("nsfw");
            let formato = interaction.options.getString("formato");
            interaction.reply("No va el comando por ahora");
            
            if(nsfw!=null && nsfw){
                if(await !interaction.channel.nsfw){
                    interaction.reply("En este canal no te puedo mandar fotos nsfw :(");
                } else {
                    switch(formato){
                        case "desktop":
                            interaction.reply(await akaneko.nsfw.wallpapers());
                            break;
                        case "mobile":
                            interaction.reply(await akaneko.nsfw.mobileWallpapers());
                            break;
                    }
                }
            } else {
                switch(formato){
                    case "desktop":
                        interaction.reply(await akaneko.wallpapers());
                        break;
                    case "mobile":
                        interaction.reply(await akaneko.mobileWallpapers());
                        break;
                }
            }
        }
    }
}