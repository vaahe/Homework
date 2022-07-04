function rgbToHex(str) {
    let matches = str.match(/(\d+)/g);
    for (let i = 0; i < matches.length; i++) {
        matches[i] = Number(matches[i]).toString(16);
        if (matches[i] == 0) {
            matches[i] += "0";
        }
    }
    console.log("#" + matches.join(""));
}

rgbToHex("rgb(0, 128, 192)");

rgbToHex("rgb(45, 255, 192)");

rgbToHex("rgb(0, 0, 0)");