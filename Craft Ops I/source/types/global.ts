class Zombies {
    
}

globalThis.zm = new Zombies();

declare global {
    var zm: Zombies;
}

export {};
