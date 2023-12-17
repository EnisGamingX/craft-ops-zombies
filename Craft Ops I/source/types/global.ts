import type * as mc from "@minecraft/server";
import type { GameData } from "./globalTypes";
import { world } from "@minecraft/server";

class Zombies {
    constructor() {}

    getGameData(): GameData {
        return JSON.parse(world.getDynamicProperty("gameData"));
    }
    setGameData(data: GameData): void {
        world.setDynamicProperty("gameData", JSON.stringify(data));
    }
}

globalThis.zm = new Zombies();

declare global {
    var zm: Zombies;
}

export {};
