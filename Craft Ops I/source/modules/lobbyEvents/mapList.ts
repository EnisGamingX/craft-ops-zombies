export const maps = [
    "nacht",
    // "transit",
    // "town",
    // "kino",
    // "eisendrache",
    // "giant",
    // "origins",
    // "nuketown",
    // "ix"
] as const;

export type mapTypes = (typeof maps)[number];
