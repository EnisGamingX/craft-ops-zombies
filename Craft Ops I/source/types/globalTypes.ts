import type * as mc from "@minecraft/server";

export interface GameData {
    gameData: settings;
    playerData: PlayerData;
}

export type maps = "nacht";
export const perkList = [
    "jugger_nog",
    "stamin_up",
    "mule_kick",
    "double_tap",
    "quick_revive",
    "vulture_aid",
] as const;
export type perks = typeof perkList[number]

export interface PlayerData {
    [pid: string]: {
        points: number;
        playerNum: number;
        perks: perks[];
        isAlive: boolean;
        inGame: boolean;
    };
}

export interface settings {
    perkLimit: 0 | 4 | 6 | 100;
    difficulty: "easy" | "normal";
    round: number;
    map: maps;
}
