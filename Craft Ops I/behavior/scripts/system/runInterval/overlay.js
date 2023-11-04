import { colors } from '../../modules/components';
export const overlay = {
    level: "system",
    eventType: "tickTimeout",
    delay: 1,

    /**
     * @param {import('@minecraft/server').world} world
     * @param {import('@minecraft/server').system} system
     */
    execute(world, system) {
        let playerList = world.getAllPlayers().filter((player) => player.zm.inGame == true);
        world.getAllPlayers().forEach((player) => {
            if (playerList.length == 0) {
                player.zm.display.bottomLeft("§r");
                player.zm.display.bottomRight("§r");
                return;
            }
            let bottomLeft = "§r§fTEST";
            let bottomRight = "§r";

            let scorePlayers = [];
            for (let i = 0; i < playerList.length; i++) {
                if (playerList[i] == player) {
                    scorePlayers.push(colors[i][1] + player.zm.points);
                } else {
                    scorePlayers.push(colors[i][0] + player.zm.points);
                }
            }

            bottomRight = scorePlayers.join("\n");

            player.zm.display.bottomLeft(bottomLeft);
            player.zm.display.bottomRight(bottomRight + "");
        });
    }
};