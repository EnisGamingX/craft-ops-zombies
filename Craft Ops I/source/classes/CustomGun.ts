import type { GunTypes, ammo, packapunch, sounds, statNumType, description } from "./GunTypes";
import type { MolangVariableMap, Player } from "@minecraft/server";
export default class CustomGun {
    description: description;
    components: components;

    constructor(gunProp: { description: description; components: components }) {
        this.description = gunProp.description;
        this.components = gunProp.components;
    }
}

//! ///////////////////////////////////////////////////////////////////////////////////////////

export interface components {
    customData(player: Player): void;
    firerate: statNumType;

    pap: packapunch | false;
    sounds: sounds;
    particle?: string | MolangVariableMap | false;
    ammo?: ammo | false;
}
