const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    //бан
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.get(args[0]));
    if (!bUser) return message.channel.send("Не удалось найти пользователя!")
    let breason = args.join(" ").slice(22);
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Что-то пашло не так, видемо у тебя нет прав)");
    if (bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("Хмм... Я не могу его забанить)");

    let banEmbed = new Discord.RichEmbed()
        .setDescription("Информация о бане")
        .setColor("#e56b00")
        .addField("Кого забанили", `${bUser} Его ID ${bUser.id}`)
        .addField("Был забанен тут!", message.channel)
        .addField("Во сколька", message.createdAt)
        .addField("Причина", breason);

    let banchannel = message.guild.channels.find(`name`, "moderator-log");
    if (!banchannel) return message.channel.send("Не могу найти канал для отправи репортов");

    message.guild.member(bUser).ban(breason);
    message.delete();
    banchannel.send(banEmbed);

}
module.exports.help = {
    name: "ban"
}