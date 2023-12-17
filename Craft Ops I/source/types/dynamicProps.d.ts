import type * as mc from "@minecraft/server";
import type { gameStates } from "../modules/state";

export type EntityDynamicProperties = {
    token: `${string}.${string}.${string}`;
    [x: string]: string | number | boolean | mc.Vector3 | undefined;
};

export type WorldDynamicProperties = {
    alivePlayers: string;
    state: gameStates;
    gameData: string;
    [x: string]: string | number | boolean | mc.Vector3 | undefined;
};
