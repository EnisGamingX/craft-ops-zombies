export const itemUse = {
    level: "event",
    eventType: "itemUse",
    delay: 0,

    /**
     * @param {import('@minecraft/server').world} world 
     * @param {import('@minecraft/server').ItemUseEvent} data 
     */
    async execute(world, data) {
        try {
            const path = data.item.typeId.split(":");
            const { item } = await import(`./items/${path[0]}/${path[1]}.js`);
            item(world, data);
        } catch (e) { }
    }
};