import "./types/main.js";
import { system, world } from "@minecraft/server";

system.beforeEvents.watchdogTerminate.subscribe((data) => {
    data.cancel = true;
    for (let player of world.getAllPlayers()) {
        if (player.isOp()) player.sendMessage(`Server tried to crash:\n${data.terminateReason}`);
    }
});

import "./modules/lobbyEvents/index.js";
// import "./modules/gameEvents/index.js";
import "./modules/runState";

// import "./events/initializePlayer.js";

// import "./types/main.js";
// import { hex } from "./modules/components.js";
// import { actionbarSplit, pad } from "./config/jsonUI.js";

// const abc = "abcdefghijklmnopqrstuvwxyz"

// const topLeft = pad("§nII", "right", actionbarSplit.topLeft, " ");
// const topRight = pad("§r§fPlaceholder Text", "left", actionbarSplit.topRight, " ");
// const bottomLeft = pad("§r§fPerks", "right", actionbarSplit.bottomLeft, " ");

// const playersDisplay =
//     "§r§1Player 1 abcdefg  §22100000000000000\n" +
//     "§r§3Player 2 abcdefg  §42100000000000000\n" +
//     "§r§5Player 3 abcdefg  §62100000000000000\n" +
//     "§r§7Player 4 abcdefg  §82100000000000000\n" +
//     "§r§9Player 5 abcdefg  §02100000000000000\n" +
//     "§r§ePlayer 6 abcdefg  §a2100000000000000\n" +
//     "§r§dPlayer 7 abcdefg  §g2100000000000000\n" +
//     "§r§cPlayer 8 abcdefg  §b2100000000000000";
// const bottomRight = pad(playersDisplay, "left", actionbarSplit.bottomRight, " ");
// const center = "§r§fPlaceholder";
// const display = topLeft + topRight + bottomLeft + bottomRight + center;

// system.runInterval(() => {
//     for (let player of world.getAllPlayers()) {
//         // player.onScreenDisplay.setActionBar(`${abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase() + abc + abc.toLocaleUpperCase()}`)
//         player.onScreenDisplay.setActionBar(display);
//     }
// }, 20);
