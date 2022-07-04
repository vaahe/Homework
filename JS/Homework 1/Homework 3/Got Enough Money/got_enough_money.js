function itemsPurchased(store, wallet) {
    let values = Object.values(store);
    let keys = Object.keys(store);
    wallet = Number(wallet.match(/(\d+)/g));
    let sum = 0;
    let arr = [];

    for (let i = 0; i < values.length; i++) {
        let regexp = Number(values[i].match(/(\d+)/g));
        if (sum + regexp < wallet) {
            sum += regexp;
            arr.push(keys[i]);
        }
    }

    if (arr.length == 0) {
        arr.push("Nothing");
    }
    console.log(arr);
}

itemsPurchased({
    Water: "$1",
    Bread: "$3",
    TV: "$1000",
    Fertilizer: "$20"
}, "$300")

itemsPurchased({
    Apple: "$4",
    Honey: "$3",
    Fan: "$14",
    Bananas: "$4",
    Pan: "$100",
    Spoon: "$2"
}, "$100")

itemsPurchased({
    Phone: "$999",
    Speakers: "$300",
    Laptop: "$5000",
    PC: "$1200"
}, "$1")