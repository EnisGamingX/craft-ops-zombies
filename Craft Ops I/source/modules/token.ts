export function genToken(name: string): string {
    let token: string;
    let splitToken: [string, string, string] = ["", "", ""];
    splitToken[0] = toBase64(name);
    splitToken[1] = toBase64(Date.now().toString());
    splitToken[2] = toBase64(randomID(21));
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



export const keystr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
export function toBase64(text: string): string {
    if (arguments.length === 0) {
        throw new TypeError("1 argument required, but only 0 present.");
    }

    text = `${text}`;
    text = text.replace(/[ \t\n\f\r]/g, "");
    if (text.length % 4 === 0) {
        text = text.replace(/==?$/, "");
    }
    if (text.length % 4 === 1 || /[^+/0-9A-Za-z]/.test(text)) {
        return null;
    }
    let output = "";
    let buffer = 0;
    let accumulatedBits = 0;
    for (let i = 0; i < text.length; i++) {
        buffer <<= 6;
        buffer |= this.atobLookup(text[i]);
        accumulatedBits += 6;
        if (accumulatedBits === 24) {
            output += String.fromCharCode((buffer & 0xff0000) >> 16);
            output += String.fromCharCode((buffer & 0xff00) >> 8);
            output += String.fromCharCode(buffer & 0xff);
            buffer = accumulatedBits = 0;
        }
    }
    if (accumulatedBits === 12) {
        buffer >>= 4;
        output += String.fromCharCode(buffer);
    } else if (accumulatedBits === 18) {
        buffer >>= 2;
        output += String.fromCharCode((buffer & 0xff00) >> 8);
        output += String.fromCharCode(buffer & 0xff);
    }
    return output;
}

export function fromBase64(encoded: string): string {
    if (arguments.length === 0) {
        throw new TypeError("1 argument required, but only 0 present.");
    }

    let i: number;
    encoded = `${encoded}`;
    for (i = 0; i < encoded.length; i++) {
        if (encoded.charCodeAt(i) > 255) {
            return null;
        }
    }
    let out = "";
    for (i = 0; i < encoded.length; i += 3) {
        const groupsOfSix = [undefined, undefined, undefined, undefined];
        groupsOfSix[0] = encoded.charCodeAt(i) >> 2;
        groupsOfSix[1] = (encoded.charCodeAt(i) & 0x03) << 4;
        if (encoded.length > i + 1) {
            groupsOfSix[1] |= encoded.charCodeAt(i + 1) >> 4;
            groupsOfSix[2] = (encoded.charCodeAt(i + 1) & 0x0f) << 2;
        }
        if (encoded.length > i + 2) {
            groupsOfSix[2] |= encoded.charCodeAt(i + 2) >> 6;
            groupsOfSix[3] = encoded.charCodeAt(i + 2) & 0x3f;
        }
        for (let j = 0; j < groupsOfSix.length; j++) {
            if (typeof groupsOfSix[j] === "undefined") {
                out += "=";
            } else {
                out += this.btoaLookup(groupsOfSix[j]);
            }
        }
    }
    return out;
}

export function atobLookup(chr: string) {
    const index = this.keystr.indexOf(chr);
    return index < 0 ? undefined : index;
}

export function btoaLookup(index: number) {
    if (index >= 0 && index < 64) {
        return this.keystr[index];
    }

    return undefined;
}
