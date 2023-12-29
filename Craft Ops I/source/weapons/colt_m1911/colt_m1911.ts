import type { Gun } from "../../classes/Gun";
export const colt_m1911: Gun = {
    description: {
        name: "Colt M1911",
        typeId: "colt_m1911",
        gunType: "pistol",
    },
    components: {
        damage: 5,
        range: 7,
        firerate: 10,
        pierce: 8,

        pap: "mustang_and_sally",
        ammo: {
            magSize: 8,
            bullets: 64,
            reloadSpeed: 10,
        },
        sounds: {
            shoot: "colt_m1911_shoot",
            reload: "colt_m1911_reload",
        },
    },
} as const;
