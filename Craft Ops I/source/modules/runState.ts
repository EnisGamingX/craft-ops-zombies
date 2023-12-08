import { Player, world } from "@minecraft/server";
import { playerDie } from "./gameEvents";

world.afterEvents.entityDie.subscribe(
    (data) => {
        if (!(data.deadEntity instanceof Player)) return;
        playerDie(data.deadEntity);
    },
    { entityTypes: ["minecraft:player"] }
);
