import * as mc from "@minecraft/server";

export type EntityDynamicProperties = {
    token: `${string}.${string}.${string}`;
};

export type WorldDynamicProperties = {
    alivePlayers: string;
};
