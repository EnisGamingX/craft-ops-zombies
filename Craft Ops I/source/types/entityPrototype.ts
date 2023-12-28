import * as mc from "@minecraft/server";
import type { EntityComponents } from "./entityComponents";
import type { EntityDynamicProperties, WorldDynamicProperties } from "./dynamicProps";
import type { ItemComponents, CEnchantmentTypes } from "./itemComponents";
import { perkList, perks } from "./globalTypes";

Object.defineProperty(mc.Player.prototype, "zm", {
    get: function () {
        const player: mc.Player = this;
        return {
            get currentHealth(): number {
                return player.getComponent("health").currentValue ?? 0;
            },
            set currentHealth(value: number) {
                player.getComponent("health").setCurrentValue(value);
            },

            get currentPerks(): string[] {
                let perks: string[] = [];
                perkList.forEach((perk: string) => {
                    if (player.getDynamicProperty(perk)) {
                        perks.push(perk);
                    }
                });
                return perks;
            },

            set currentPerks(value: string[]) {
                let perks = value;
                perkList.forEach((perk: string) => {
                    if (perks.includes(perk)) {
                        player.setDynamicProperty(perk, true);
                    } else {
                        player.setDynamicProperty(perk, false);
                    }
                });
            },

            addPerks(value: string | string[]) {
                if (Array.isArray(value)) {
                    value.forEach((perk) => {
                        if (perkList.includes(perk as perks)) {
                            player.setDynamicProperty(perk, true);
                        } else {
                            console.error("could not find perk: " + perk);
                        }
                    });
                } else {
                    if (perkList.includes(value as perks)) {
                        player.setDynamicProperty(value, true);
                    } else {
                        console.error("could not find perk: " + value);
                    }
                }
            },

            getInGame(id: string): boolean {
                return Boolean(mc.world.getDynamicProperty(`${id}.inGame`)) ?? false;
            },
            setInGame(id: string, value: boolean) {
                player.setDynamicProperty(`§{id}.inGame`, value);
            },

            get isAlive(): boolean {
                return Boolean(player.getDynamicProperty("isAlive")) ?? false;
            },
            set isAlive(value: boolean) {
                player.setDynamicProperty("isAlive", value);
            },

            get points(): number {
                return Number(player.getDynamicProperty("points")) ?? 0;
            },
            set points(value: number) {
                player.setDynamicProperty("points", value);
            },
            addPoints(value: number) {
                player.setDynamicProperty(
                    "points",
                    (Number(player.getDynamicProperty("points")) ?? 0) + value
                );
            },
            removePoints(value: number) {
                player.setDynamicProperty(
                    "points",
                    (Number(player.getDynamicProperty("points")) ?? 0) - value
                );
            },

            /**
             * @param {number} damage Damage the weapon Deals
             * @param {import('@minecraft/server').Entity[]} entities
             * @param {number} pierce How many Targets the Weapon can hit | Defaults to 1 so it hits 1 entity
             * @param {number} drop How much damage the Weapon loses for each hit | Defaults to 30 so loses 30% damage per pierce
             */
            shoot(damage: number, entities: mc.Entity[], pierce: number = 1, drop: number = 30) {
                if (entities.length == 0) {
                    player.playSound("step.stone", { volume: 0.2 });
                } else {
                    let setDamage = damage;
                    for (let i = 0; i < pierce; i++) {
                        entities[i].applyDamage(Math.floor(setDamage));
                        mc.world.sendMessage("hit " + entities[0].typeId);
                        setDamage = setDamage - (setDamage / 100) * drop;
                    }
                }
            },
        };
    },
});

interface zmPlayer {
    get currentHealth(): number;
    set currentHealth(value: number);

    get currentPerks(): string[];
    set currentPerks(value: string[]);

    get points(): number;
    set points(value: number);
    addPoints(value: number): void;
    removePoints(value: number): void;

    addPerks(value: string | string[]): void;

    get isAlive(): boolean;
    set isAlive(value: boolean);

    get inGame(): boolean;
    set inGame(value: boolean);

    shoot(damage: number, entities: mc.Entity[], pierce?: number, drop?: number): void;

    /**
     * @remarks
     * Set the action bar text - a piece of text that displays
     * beneath the title and above the hot-bar.
     *
     * This function can't be called in read-only mode.
     *
     * @param text
     * New value for the action bar text.
     * @throws This function can throw errors.
     *
     * @style topLeft: 20, topRight: 20, bottomLeft: 40, bottomRight: 200, default: rest,
     */
    setActionBar(text: (mc.RawMessage | string)[] | mc.RawMessage | string): void;
}

interface zmEntity {
    currentHealth: number;
}

declare module "@minecraft/server" {
    interface World {
        getDynamicProperty<T extends keyof WorldDynamicProperties>(identifier: T): WorldDynamicProperties[T];
        setDynamicProperty<T extends keyof WorldDynamicProperties>(identifier: T, value?: WorldDynamicProperties[T]): WorldDynamicProperties[T];
    }
    interface Player {
        zm: zmPlayer;
    }
    interface Entity {
        getDynamicProperty<T extends keyof EntityDynamicProperties>(identifier: T): EntityDynamicProperties[T];
        setDynamicProperty<T extends keyof EntityDynamicProperties>(identifier: T, value?: EntityDynamicProperties[T]): EntityDynamicProperties[T];
        zm: zmEntity;
        // getComponent<T extends keyof EntityComponents>(componentId: T): EntityComponents[T];
    }
    // interface ItemStack {
        // getComponent<T extends keyof ItemComponents>(componentId: T): ItemComponents[T];
    // }
    // interface Enchantment {
        // constructor<T extends keyof CEnchantmentTypes>(
            // enchantmentType: T,
            // level?: number
        // ): CEnchantmentTypes[T];
    // }
    // interface EnchantmentList {
        // getEnchantment<T extends keyof CEnchantmentTypes>(enchantmentType: T): CEnchantmentTypes[T];
        // hasEnchantment<T extends keyof CEnchantmentTypes>(enchantmentType: T): number;
        // removeEnchantment<T extends keyof CEnchantmentTypes>(enchantmentType: T): void;
    // }
}