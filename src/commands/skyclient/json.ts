import axios from "axios"
import { BotCommand } from '../../extensions/BotCommand';
import utils from "../../functions/utils";

export default class json extends BotCommand {
    constructor() {
        super('json', {
            aliases: ['json'],
            args: [
                { id: "type", type: "string" },
                { id: "thingToFind", match: "restContent", type: "string" }
            ]
        });
    }

    async exec(message, args) {
        const SkyClientGuilds = [
            `780181693100982273`, //main server
            `824680357936103497` //testing server
        ]
        if (SkyClientGuilds.includes(message.guild.id)) {

            if (args.type == `mod`) {
                const modJson = await axios(`https://raw.githubusercontent.com/nacrt/SkyblockClient-REPO/main/files/mods.json`, { method: "get" })

                for (let mod of modJson.data) {
                    if (mod.id == args.thingToFind) {
                        mod = JSON.stringify(mod, null, '  ')
                        message.channel.send(`${await utils.haste(mod)}`)
                    }
                }
            }
            else if (args.type == `pack`) {
                const packJson = await axios(`https://raw.githubusercontent.com/nacrt/SkyblockClient-REPO/main/files/packs.json`, { method: "get" })

                for (let pack of packJson.data) {
                    if (pack.id == args.thingToFind) {
                        pack = JSON.stringify(pack, null, '  ')
                        message.channel.send(`${await utils.haste(pack)}`)
                    }
                }
            }
        }
    }
}