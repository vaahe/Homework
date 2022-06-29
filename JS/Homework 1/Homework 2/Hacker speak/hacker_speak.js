function hackerSpeak(arr) {
    let text = arr.split("");

    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'a') {
            text[i] = '4';
        } else if (text[i] === 's') {
            text[i] = '5';
        } else if (text[i] === 'i') {
            text[i] = '1';
        } else if (text[i] === 'o') {
            text[i] = '0';
        }
    }

    console.log(text.join(""));
}

hackerSpeak("javascript is cool");

hackerSpeak("programming is fun");

hackerSpeak("become a coder");