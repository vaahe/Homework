function findBrokenKeys(correct, typed) {
    let arr = [];
    for (let i = 0; i < correct.length; i++) {
        if (correct[i] !== typed[i]) {
            arr.push(correct[i]);
        } else {
            continue;
        }
    }

    arr = arr.map(value => value.toLowerCase());

    console.log(arr.filter((element, index) => {
        return arr.indexOf(element) === index;
    }));
}

findBrokenKeys("happy birthday", "hawwy birthday")

findBrokenKeys("starry night", "starrq light")

findBrokenKeys("beethoven", "affthoif5")