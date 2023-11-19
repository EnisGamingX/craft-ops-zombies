export const hex = String.fromCharCode;

export interface IMetaData {
    isAlive: boolean;
    inGame: boolean;
    points: number;
}

export type perks = "juggernog" | "double_tap" | "stamin_up" | "mule_kick" | "widows_wine"
export const perkList = ["juggernog", "double_tap", "stamin_up", "mule_kick", "widows_wine"];
