export function genToken(name: string): string {
    let token: string;
    let splitToken: [string, string, string] = ["", "", ""];
    splitToken[0] = zm.toBase64(name);
    splitToken[1] = zm.toBase64(Date.now().toString());
    splitToken[2] = zm.toBase64(randomID(21));
    token = splitToken.join(".");
    return token;
}

export function randomID(length: number) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

export function UUIDv4() {
    let uuid_v4: string[] = ["", "", "", "", ""];
    uuid_v4[0] = `${getRandomHex()}${getRandomHex()}`;
    uuid_v4[1] = `${getRandomHex()}`;
    uuid_v4[2] = `${getRandomHex()}`;
    uuid_v4[3] = `${getRandomHex()}`;
    uuid_v4[4] = `${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
    return uuid_v4.join("-");
}

export const HexMap = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
export function getRandomHex(upperCase = false) {
    let hex =
        HexMap[getRandomInt(16)] +
        HexMap[getRandomInt(16)] +
        HexMap[getRandomInt(16)] +
        HexMap[getRandomInt(16)];
    if (upperCase) hex.toUpperCase();
    return hex;
}

export function getRandomInt(max: number) {
    return Math.floor(Math.random() * (max - 1));
}
