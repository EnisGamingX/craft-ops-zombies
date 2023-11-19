import { system, world } from "@minecraft/server";
system.beforeEvents.watchdogTerminate.subscribe((data) => {
    data.cancel = true;
    for (let player of world.getAllPlayers()) {
        if (!player.isOp())
            continue;
        player.sendMessage(`Server tried to crash:\n${data.terminateReason}`);
    }
});
