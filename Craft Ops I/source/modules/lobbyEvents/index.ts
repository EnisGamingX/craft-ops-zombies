import { world } from "@minecraft/server";
import { ActionFormData, ModalFormData, MessageFormData } from "@minecraft/server-ui";
import type * as mc from "@minecraft/server";
import { maps } from "./mapList";

world.afterEvents.itemUse.subscribe((data) => {
    if (data.itemStack.typeId != "lobby:menu") return;
    mainForm(data.source);
});

async function mainForm(player: mc.Player) {
    const form = new ActionFormData();
    form.title("§m§e§n§u");
    form.button("Start");
    form.button("Map Select");
    form.button("Settings");
    const { selection } = await form.show(player);
    switch (selection) {
        case 0:
            return confirmStart(player);
        case 1:
            return gameSettings(player);
        case 2:
            return mapSelect(player);
    }
}

async function confirmStart(player: mc.Player) {
    const form = new MessageFormData();
    form.title("§c§o§n§f§i§r§m");
    form.body("Are you sure you want to start?");
    form.button1("Start");
    form.button2("Cancel");
    const { selection } = await form.show(player);
    switch (selection) {
        case 0:
            return startGame();
        case 1:
            return mainForm(player);
    }
}

async function gameSettings(player: mc.Player) {
    const form = new ModalFormData();
    form.title("§s§e§t§t§i§n§g§s");
    form.dropdown(
        "Difficutly",
        ["Easy", "Normal", "Hard", "Realistic"],
        world.getDynamicProperty("difficulty") ?? 0
    );
    form.dropdown(
        "Starting Round",
        ["1", "5", "10", "15", "20"],
        world.getDynamicProperty("startingRound") ?? 0
    );
    form.textField("Perklimit", "4", `${world.getDynamicProperty("perkLimit") ?? 4}`);
    form.toggle("Magic", world.getDynamicProperty("magic") ?? false);
    form.toggle("Hellhounds", world.getDynamicProperty("hellhounds") ?? false);
    const { formValues, canceled } = await form.show(player);
    if (canceled) return;
    const perkLimit = parseInt(`${formValues[2]}`);
    if (isNaN(perkLimit))
        return player.sendMessage("You can only provide a number as the Perklimit input");
    player.sendMessage("Saved Settings");
    world.setDynamicProperty("difficulty", formValues[0]);
    world.setDynamicProperty("startingRound", formValues[1]);
    world.setDynamicProperty("perkLimit", perkLimit);
    world.setDynamicProperty("magic", formValues[3]);
    world.setDynamicProperty("hellhounds", formValues[4]);
}

async function mapSelect(player: mc.Player) {
    const form = new ActionFormData();
    form.title("§m§a§p§s§e§l§e§c§t§o§r");
    form.button("Nacht der Untoten");
    // form.button("")
    const { selection, canceled } = await form.show(player);
    if (canceled) return;
    let map = maps[selection] ?? "nacht";
    world.setDynamicProperty("map", map);
}

async function startGame() {}
