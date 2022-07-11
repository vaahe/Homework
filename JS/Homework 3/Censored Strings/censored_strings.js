function uncensor(censored, uncensored) {
    let arr = [...censored];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '*') {
            arr[i] = uncensored[count];
            count++;
        }
    }
    console.log(arr.join(""));
}

uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo")

uncensor("abcd", "")

uncensor("*PP*RC*S*", "UEAE")