import type * as mc from "@minecraft/server";

export interface GameData {
    gameData: settings;
    playerData: PlayerData;
}

export type maps = "nacht";
export type perks =
    | "jugger_nog"
    | "stamin_up"
    | "mule_kick"
    | "double_tap"
    | "quick_revive"
    | "vulture_aid";

export interface PlayerData {
    [pid: string]: {
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
