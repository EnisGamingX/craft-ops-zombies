import { world, system } from '@minecraft/server';

const systemCalls = [
    //["runInterval", 5, "updateEvent"],
    ["runInterval", 1, "overlay"]
];

systemCalls.forEach((event) => {
    system.runInterval(async () => {
        const runThis = await import(`../system/${event[0]}/${event[2]}`);
        runThis[event[2]].execute(world, system);
    }, event[1]);
});