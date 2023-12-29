import type * as mc from "@minecraft/server";
import { world } from "@minecraft/server";
import { perkList } from "../../types/globalTypes";

export function title(player: mc.Player) {
    const data = zm.getGameData();
    const round = data.gameData.round;
    const perks = data.playerData[player.id].perks;

    let titleString = "";
    if (round >= 100) titleString += `${numToX[`${round}`[0]].str}.`;
    else titleString += "l.";
    if (round >= 10) titleString += `${numToX[`${round}`[2]].str}#`;
    else titleString += "l-";
    titleString += `${numToX[`${round}`[4]].str}-`;

    for (let perk of perkList) {
        if (perks.includes(perk)) titleString += "_";
        else titleString += "-";
    }

    player.onScreenDisplay.setTitle(titleString);
}

export function actionbar(player: mc.Player) {
    const data = zm.getGameData();
    const players = world.getAllPlayers().length;
    let pointsDisplay = Array(players);

    let actionString = "";

    for (let key in data.playerData) {
        pointsDisplay[data.playerData[key].playerNum];
    }

    actionString += pointsDisplay;

    player.onScreenDisplay.setTitle(actionString);
}

const numToX = {
    "0": { str: "a" },
    "1": { str: "b", color: "f" },
    "2": { str: "c", color: "1" },
    "3": { str: "d", color: "4" },
    "4": { str: "e", color: "5" },
    "5": { str: "f", color: "0" },
    "6": { str: "g", color: "e" },
    "7": { str: "h", color: "a" },
    "8": { str: "i", color: "d" },
    "9": { str: "j" },
} as const;
