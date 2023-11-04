import { world } from '@minecraft/server';

const events = [
    //"itemUse",
    "beforeChat"
];

// import { beforeChat } from '../events/beforeChat/main';
// world.events.beforeChat.subscribe((data) => {
//     beforeChat.execute(world, data);
// });

// import { itemUse } from '../events/itemUse/main';
// world.events.itemUse.subscribe((data) => {
//     itemUse.execute(world, data);
// });

events.forEach((event) => {
    world.events[event].subscribe((data) => {
        import(`../events/${event}/main.js`).then((file) => {
            file[event].execute(world, data);
        });
    });
});
