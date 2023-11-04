/**
 * @param {import('@minecraft/server').world} world 
 * @param {import('@minecraft/server').ItemUseEvent} data 
 */
export function item(world, data) {
    /**
     * @type {import('@minecraft/server').Player}
     */
    const player = data.source;
    player.zm.shoot(2, player.getEntitiesFromViewDirection(), 2, 50);
};