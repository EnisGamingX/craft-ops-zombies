import * as mc from "@minecraft/server";

interface zmPlayer {
    get currentHealth(): number;
    set currentHealth(value: number): void;

    get currentPerks(): string[];
    set currentPerks(value: string[]): void;

    get points(): number;
    set points(value: number): void;
    addPoints(value: number): void;
    removePoints(value: number): void;

    addPerks(value: string | string[]): void;

    display: {
        bottomLeft(value: string): void;
        bottomRight(value: string): void;
        topBottomRight(bottom: string, top: string): void;
    };

    get isAlive(): boolean;
    set isAlive(value: boolean): void;

    get inGame(): boolean;
    set inGame(value: boolean): void;

    shoot(damage: number, entities: mc.Entity[], pierce?: number, drop?: number): void;
}

interface zmEntity {
    currentHealth: number;
}

declare module "@minecraft/server" {
    interface Player {
        zm: zmPlayer;
    }
    interface Entity {
        zm: zmEntity;
    }
}
