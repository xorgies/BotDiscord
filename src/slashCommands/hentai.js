const { SlashCommandBuilder } = require("@discordjs/builders")
const { ChannelType } = require("discord.js")
const akaneko = require('akaneko');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("hentai")
        .setDescription("El bot respondera con hentai.")
        .addStringOption(option =>
            option.setName('tipo')
                .setDescription('Tipo de h')
                .setRequired(true)
                .addChoices(
                    { name: "ass", value:"ass"},
                    { name: "bdsm", value:"bdsm"},
                    { name: "blowjob", value:"blowjob"},
                    { name: "cum", value:"cum"},
                    { name: "doujin", value:"doujin"},
                    { name: "feet", value:"feet"},
                    { name: "femdom", value:"femdom"},
                    { name: "foxgirl", value:"foxgirl"},
                    { name: "gifs", value:"gifs"},
                    { name: "glasses", value:"glasses"},
                    { name: "hentai", value:"hentai"},
                    { name: "netorare", value:"netorare"},
                    { name: "maid", value:"maid"},
                    { name: "masturbation", value:"masturbation"},
                    { name: "orgy", value:"orgy"},
                    { name: "panties", value:"panties"},
                    { name: "pussy", value:"pussy"},
                    { name: "school", value:"school"},
                    { name: "succubus", value:"succubus"},
                    { name: "tentacles", value:"tentacles"},
                    { name: "thighs", value:"thighs"},
                    { name: "uglyBastard", value:"uglyBastard"},
                    { name: "uniform", value:"uniform"},
                    { name: "yuri", value:"yuri"},
                    { name: "zettaiRyouiki", value:"zettaiRyouiki"}
                )),

    /**
     * 
     * @param {import("discord.js").Client<true>} client 
     * @param {import("discord.js").ChatInputCommandInteraction<"cached">} interaction 
     */
    async run(client,interaction){
        if(interaction.channel?.type==ChannelType.GuildText){
            if(await interaction.channel.nsfw){
                let categoria = interaction.options.getString('tipo');
                switch(categoria){
                    case "ass":
                        interaction.reply(await akaneko.nsfw.ass());
                        break;
                    case "bdsm":
                        interaction.reply(await akaneko.nsfw.bdsm());
                        break;
                    case "blowjob":
                        interaction.reply(await akaneko.nsfw.blowjob());
                        break;
                    case "cum":
                        interaction.reply(await akaneko.nsfw.cum());
                        break;
                    case "doujin":
                        interaction.reply(await akaneko.nsfw.doujin());
                        break;
                    case "feet":
                        interaction.reply(await akaneko.nsfw.feet());
                        break;
                    case "gifs":
                        interaction.reply(await akaneko.nsfw.gifs());
                        break;
                    case "glasses":
                        interaction.reply(await akaneko.nsfw.glasses());
                        break;
                    case "hentai":
                        interaction.reply(await akaneko.nsfw.hentai());
                        break;
                    case "netorare":
                        interaction.reply(await akaneko.nsfw.netorare());
                        break;
                    case "maid":
                        interaction.reply(await akaneko.nsfw.maid());
                        break;
                    case "masturbation":
                        interaction.reply(await akaneko.nsfw.masturbation());
                        break;
                    case "orgy":
                        interaction.reply(await akaneko.nsfw.orgy());
                        break;
                    case "panties":
                        interaction.reply(await akaneko.nsfw.panties());
                        break;
                    case "pussy":
                        interaction.reply(await akaneko.nsfw.pussy());
                        break;
                    case "school":
                        interaction.reply(await akaneko.nsfw.school());
                        break;
                    case "succubus":
                        interaction.reply(await akaneko.nsfw.succubus());
                        break;
                    case "tentacles":
                        interaction.reply(await akaneko.nsfw.tentacles());
                        break;
                    case "thighs":
                        interaction.reply(await akaneko.nsfw.thighs());
                        break;
                    case "uglyBastard":
                        interaction.reply(await akaneko.nsfw.uglyBastard());
                        break;
                    case "uniform":
                        interaction.reply(await akaneko.nsfw.uniform());
                        break;
                    case "yaoi":
                        interaction.reply(await akaneko.nsfw.yaoi());
                        break;
                    case "yuri":
                        interaction.reply(await akaneko.nsfw.yuri());
                        break;
                    case "zettaiRyouiki":
                        interaction.reply(await akaneko.nsfw.zettaiRyouiki());
                        break;
                    default:
                        interaction.reply(`No tengo fotos de la categoría ${categoria}`);
                }
                
            } else {
                interaction.reply("En este canal no te puedo mandar fotos :(");
            }
        }
    }
}