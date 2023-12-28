import { ItemLockMode, ItemStack } from "@minecraft/server";
import type * as state from "../state";
const lobbyItem = new ItemStack("lobby:menu", 1)
lobbyItem.lockMode = ItemLockMode.slot;

export function lobbyLoop(data: state.loopTypes): state.gameStates {
    const { player } = data;
    player.onScreenDisplay.setTitle("a.l-l#");
    const container = player.getComponent("inventory").container;
    if (player.isOp()) container.setItem(8, lobbyItem)
    return "lobby";
}