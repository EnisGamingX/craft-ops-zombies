import { world } from "@minecraft/server";
import { genToken } from "../modules/token";

world.afterEvents.playerSpawn.subscribe(({ initialSpawn, player }) => {
    if (!initialSpawn || player.getDynamicProperty("token")) return;
    player.setDynamicProperty("token", genToken(player.name));
});
