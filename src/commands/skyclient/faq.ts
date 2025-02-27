import { MessageEmbed } from 'discord.js';
import { BotCommand } from '../../extensions/BotCommand';
import utils from '../../functions/utils';

export default class faq extends BotCommand {
    constructor() {
        super('faq', {
            aliases: ['faq'],
            args: [
                { id: "question", type: "string" }
            ],

            slash: true,
            slashGuilds: utils.slashGuilds,
            slashOptions: [
                {
                    name: 'question',
                    description: 'ID of the issue you want to see',
                    type: 'STRING',
                    choices: [
                        {
                            name: 'Are any of the mods bannable?',
                            value: 'anymodsbannable'
                        },
                        {
                            name: "Where's the download?",
                            value: 'wheredownload'
                        },
                        {
                            name: 'How do I update a mod?',
                            value: 'howupdate'
                        }
                    ]
                }
            ],
            description: 'A bunch of the frequently asked questions about SkyClien\'t!'
        });
    }

    async exec(message, args) {
        if (utils.SkyClientGuilds.includes(message.guild.id)) {
            const embed = new MessageEmbed()

            if (!args.question) { return message.reply('<#780185114352549919>') }

            if (args.question.toLowerCase() == 'anymodsbannable') {
                embed.setTitle('Are any of the mods bannable?')
                embed.setDescription('No.')
            }

            if (args.question.toLowerCase() == 'wheredownload') {
                embed.setTitle("Where's the download?")
                embed.setDescription(`<#780940408175853609> if on Windows 10 (untested on 11)
                <#782998702289059860> if on literally anything else (you will need [java 8](https://adoptopenjdk.net/?variant=openjdk8&jvmVariant=hotspot))`)
            }

            if (args.question.toLowerCase() == 'howupdate') {
                embed.setTitle('How do I update a mod?')
                embed.setDescription('Go to your mods folder ([instructions on how to get to it here](https://youtu.be/Y7AyoDMsFdY)), delete the old version of the mod, and put the new version in.')
            }

            message.reply({ embeds: [embed] })
        }
    }
}