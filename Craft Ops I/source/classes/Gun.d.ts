import type { GunTypes, ammo, sounds, statNumType, description } from "./GunTypes";
import type { MolangVariableMap, Player } from "@minecraft/server";

export interface Gun {
    description: description;
    components: defaultGunComponents;
}

interface defaultGunComponents {
    damage: statNumType;
    range: statNumType;
    firerate: statNumType;
    pierce: statNumType;

    pap: string | false;
    sounds: sounds;
    particle?: string | MolangVariableMap | false;
    ammo?: ammo | false;
}

export interface CustomGun {
    description: description;
    components: customGunComponents;
}

interface customGunComponents {
    customData(player: Player): void;
    firerate: statNumType;

    pap: string | false;
    sounds: sounds;
    particle?: string | MolangVariableMap | false;
    ammo?: ammo | false;
}
