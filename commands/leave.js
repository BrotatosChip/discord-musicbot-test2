const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
    info: {
        name: "leave",
        aliases: ["goaway", "disconnect"],
        description: "Leave The Voice Channel!",
        usage: "Leave",
    },

    run: async function (client, message, args) {
        let channel = message.member.voice.channel;
        if (!channel) return sendError("I'm sorry but you need to be in a voice channel!", message.channel);
        if (!message.guild.me.voice.channel) return sendError("I Am Not In Any Voice Channel!", message.channel);

        try {
            await message.guild.me.voice.channel.leave();
        } catch (error) {
            await message.guild.me.voice.kick(message.guild.me.id);
            return sendError("Trying To Leave The Voice Channel...", message.channel);
        }

        const Embed = new MessageEmbed()
            .setAuthor("Leave Voice Channel", "https://github.com/BrotatosChip/chip-smusicbbottest1/blob/52216d2781b6e383ccfc792bcd4bbcf9c4111e13/musicbot%20test%201/assets/Music.gif")
            .setColor("GREEN")
            .setTitle("Success")
            .setDescription("🎶 Left The Voice Channel.")
            .setTimestamp();

        return message.channel.send(Embed).catch(() => message.channel.send("🎶 Left The Voice Channel :C"));
    },
};
