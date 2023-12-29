import type { CustomGun } from "../../classes/Gun";
export const colt_m1911: CustomGun = {
    description: {
        name: "Mustang & Sally",
        typeId: "mustant_and_sally",
        gunType: "special",
    },
    components: {
        customData(player) {
            let hitBlock = player.getBlockFromViewDirection({ maxDistance: 100 });
            if (!hitBlock) return;
        },
        firerate: 10,

        pap: false,
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
