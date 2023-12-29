import type { MolangVariableMap } from "@minecraft/server"

type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc["length"]]>;
export type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

export interface description {
    name: string;
    typeId: string;
    gunType: GunTypes;
}

export type statNumType = IntRange<0, 16>;

export interface ammo {
    reloadSpeed?: statNumType;
    magSize?: number;
    bullets?: number;
}

export interface sounds {
    shoot: string;
    reload?: string;
}

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