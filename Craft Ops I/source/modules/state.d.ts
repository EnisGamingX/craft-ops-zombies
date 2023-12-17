import type * as mc from "@minecraft/server";

export type gameStates = "lobby" | "game";

export interface loopTypes {
    player: mc.Player;
}