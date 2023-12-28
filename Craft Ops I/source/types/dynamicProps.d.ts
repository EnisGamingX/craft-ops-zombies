import type * as mc from "@minecraft/server";
import type { gameStates } from "../modules/state";
import type { mapTypes } from "../modules/lobbyEvents/mapList";

export type EntityDynamicProperties = {
    token: `${string}.${string}.${string}`;
    [x: string]: string | number | boolean | mc.Vector3 | undefined;
};

export type WorldDynamicProperties = {
    alivePlayers: string | undefined;
    state: gameStates | undefined;
    gameData: string | undefined;
    startingRound: number | undefined;
    perkLimit: number | undefined;
    hellhounds: boolean | undefined;
    magic: boolean | undefined;
    map: mapTypes | undefined;
    difficulty: number | undefined;
    [x: string]: string | number | boolean | mc.Vector3 | undefined;
};
