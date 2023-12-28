import type { GunTypes, ammo, packapunch, sounds, statNumType, description } from "./GunTypes";
import type { MolangVariableMap } from "@minecraft/server";
export default class Gun {
    description: description;
    components: components;

    constructor(gunProp: { description: description; components: components }) {
        this.description = gunProp.description;
        this.components = gunProp.components;
    }
}

//! ///////////////////////////////////////////////////////////////////////////////////////////

export interface components {
    damage: statNumType;
    range: statNumType;
    firerate: statNumType;
    pierce: statNumType;

    pap: packapunch | false;
    sounds: sounds;
    particle?: string | MolangVariableMap | false;
    ammo?: ammo | false;
}



