import { system, world } from "@minecraft/server";
import { lobbyLoop } from "./gameStates/lobby";
import { gameLoop } from "./gameStates/game";

let CurrentGameState: import("./state").gameStates = world.getDynamicProperty("state") ?? "lobby";

system.runInterval(() => {
    let dState = `${CurrentGameState}`;
    for (let player of world.getAllPlayers()) {
        switch (CurrentGameState) {

            case "lobby": CurrentGameState = lobbyLoop({player}); break;
            case "game": CurrentGameState = gameLoop({player}); break;

            default: CurrentGameState = lobbyLoop({player}); break;
        }
    }
}, 20);