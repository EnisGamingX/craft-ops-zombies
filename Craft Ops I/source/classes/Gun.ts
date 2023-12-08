export default class Gun {
    description: description;
    components: components;

    constructor(gunProp: { description: description; components: components }) {
        this.description = gunProp.description;
        this.components = gunProp.components;
    }
}

//! ///////////////////////////////////////////////////////////////////////////////////////////

import type { MolangVariableMap } from "@minecraft/server"
type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc["length"]]>;
type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

type statNumType = IntRange<0, 16>;
export type GunTypes =
    | "special"
    | "knife"
    | "launcher"
    | "pistol"
    | "revolver"
    | "smg"
    | "shotgun"
    | "ar"
    | "lmg"
    | "sniper";

export interface description {
    name: string;
    typeId: string;
    gunType: GunTypes;
}

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

export interface packapunch {
    papGun: string,
}

export interface ammo {
    reloadSpeed?: statNumType;
    magSize?: number;
    bullets?: number;
}

export interface sounds {
    shoot: string;
    reload?: string;
}