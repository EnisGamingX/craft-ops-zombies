import { world, DynamicPropertiesDefinition, MinecraftEntityTypes } from "@minecraft/server";
world.sendMessage("§c[Zombies] §2Pack Re/Loaded");
import { gameData, perksList } from "./modules/components.js";

world.events.worldInitialize.subscribe(({ propertyRegistry }) => {
    let DPlayer = new DynamicPropertiesDefinition();

    perksList.forEach((perk) => { // Perks
        DPlayer.defineBoolean(perk);
    });

    gameData.forEach((data) => { // GameData
        DPlayer.defineBoolean(data);
    });

    propertyRegistry.registerEntityTypeDynamicProperties(DPlayer, MinecraftEntityTypes.player);

    let DWorld = new DynamicPropertiesDefinition();
    DWorld.defineNumber("map");
    propertyRegistry.registerWorldDynamicProperties(DWorld);
});

import './typings/main.js';
import './handlers/eventHandler.js';
import './handlers/systemHandler.js';