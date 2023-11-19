export const actionbarSplit = Object.freeze({
    topLeft: 40,
    topRight: 40,
    bottomLeft: 80,
    bottomRight: 400,
    default: -1,
});

type padTypes = "left" | "right";

export function pad(text: string, side: padTypes, maxLength: number, character: string): string {
    maxLength -= text.length;
    maxLength -= text.match(/§/g)?.length || 0;
    if (maxLength <= 0) return text;
    if (character.length > 1) character = character[0];
    let padding = "";
    while (true) {
        if (maxLength & 1) padding += character;
        maxLength >>= 1;
        if (maxLength) character += character;
        else break;
    }
    if (side == "left") return padding + text;
    else if (side == "right") return text + padding;
    else throw Error("The side you used for your pad function doesn't exist");
}
