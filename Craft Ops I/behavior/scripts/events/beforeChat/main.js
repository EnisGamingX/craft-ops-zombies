import { Player } from '@minecraft/server';

export const beforeChat = {
    level: "event",
    eventType: "beforeChat",
    delay: 0,

    /**
     * @param {import('@minecraft/server').world} world 
     * @param {import('@minecraft/server').BeforeChatEvent} data 
     */
    execute(world, data) {
        try {
            if (data.message == "!isAliveON") { data.cancel; world.sendMessage("true"); data.sender.zm.isAlive = true; }
            else if (data.message == "!isAliveOFF") { data.cancel; world.sendMessage("false"); data.sender.zm.isAlive = false; }

            else if (data.message == "!inGameON") { data.cancel; world.sendMessage("true"); data.sender.zm.inGame = true; }
            else if (data.message == "!inGameOFF") { data.cancel; world.sendMessage("false"); data.sender.zm.inGame = false; }
        } catch (e) { console.error(e); console.error(e.stack); }
    }
};