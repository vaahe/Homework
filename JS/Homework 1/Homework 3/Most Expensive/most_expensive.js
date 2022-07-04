function mostExpensive(obj) {
    let keys = Object.keys(obj);
    let max = obj[keys[0]];

    for (let i = 0; i < keys.length; i++) {
        if (obj[keys[i]] > max) {
            max = keys[i];
        }
    }
    console.log(max);
}

mostExpensive({
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650
});

mostExpensive({
    "Silver Bracelet": 280,
    "Gemstone Earrings": 180,
    "Diamond Ring": 3500
});