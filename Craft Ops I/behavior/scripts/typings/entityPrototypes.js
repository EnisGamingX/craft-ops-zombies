import { Player, world } from '@minecraft/server';
import { perksList } from '../modules/components';

Object.defineProperty(Player.prototype, "zm", {
    get: function () {
        /** @type {Player} */
        const player = this; return {
            /** @returns {number} */
            get currentHealth() { return player.getComponent("health").current ?? 0; },
            /** @param {number} value */
            set currentHealth(value) { player.getComponent("health").setCurrent(value); },

            /** @returns {string[]} */
            get currentPerks() {
                let perks = [];
                perksList.forEach((perk) => {
                    if (player.getDynamicProperty(perk)) { perks.push(perk); }
                });
                return perks;
            },
            /** @param {string[]} value */
            set currentPerks(value) {
                let perks = value;
                perksList.forEach((perk) => {
                    if (perks.includes(perk)) { player.setDynamicProperty(perk, true); }
                    else { player.setDynamicProperty(perk, false); }
                });
            },

            /** @param {string | string[]} value */
            addPerks(value) {
                if (Array.isArray(value)) {
                    value.forEach((perk) => {
                        if (perksList.includes(perk)) { player.setDynamicProperty(perk, true); }
                        else { console.error("could not find perk: " + perk); }
                    });
                } else {
                    if (perksList.includes(value)) { player.setDynamicProperty(value, true); }
                    else { console.error("could not find perk: " + value); }
                }
            },

            display: {
                /** @param {string} value */
                bottomLeft(value) { player.onScreenDisplay.setActionBar(value); },
                /** @param {string} value */
                bottomRight(value) { player.onScreenDisplay.setTitle(value); },
                /**
                 * @param {string} bottom
                 * @param {string} top
                 */
                topBottomRight(bottom, top) { player.onScreenDisplay.updateSubtitle(top); player.onScreenDisplay.setTitle(bottom); },
            },

            /** @returns {boolean} */
            get inGame() { return player.getDynamicProperty("inGame") ?? false; },
            /** @param {boolean} value */
            set inGame(value) { player.setDynamicProperty("inGame", value); },

            /** @returns {boolean} */
            get isAlive() { return player.getDynamicProperty("isAlive") ?? false; },
            /** @param {boolean} value */
            set isAlive(value) { player.setDynamicProperty("isAlive", value); },

            /** @returns {number} */
            get points() { return player.getDynamicProperty("points") ?? 0; },
            /** @param {number} value */
            set points(value) { player.setDynamicProperty("points", value); },
            /** @param {number} value */
            addPoints(value) { player.setDynamicProperty("points", (player.getDynamicProperty("points") ?? 0)) + value; },
            /** @param {number} value */
            removePoints(value) { player.setDynamicProperty("points", (player.getDynamicProperty("points") ?? 0)) - value; },

            /**
             * @param {number} damage Damage the weapon Deals
             * @param {import('@minecraft/server').Entity[]} entities
             * @param {number} pierce How many Targets the Weapon can hit | Defaults to 1 so it hits 1 entity
             * @param {number} drop How much damage the Weapon loses for each hit | Defaults to 30 so loses 30% damage per pierce
             */
            shoot(damage, entities, pierce = 1, drop = 30) {
                if (entities.length == 0) {
                    player.playSound("step.stone", { "volume": 0.2 });
                } else {
                    let setDamage = damage;
                    for (let i = 0; i < pierce; i++) {
                        entities[i].applyDamage(Math.floor(setDamage));
                        world.sendMessage("hit " + entities[0].typeId);
                        setDamage = setDamage - setDamage / 100 * drop;
                    }
                }
            },
        };
    }
});