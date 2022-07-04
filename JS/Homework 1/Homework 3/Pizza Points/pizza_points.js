function pizzaPoints(obj, orders, price) {
    let arr = [];
    for (value in obj) {
        if (obj[value].filter(_price => _price >= price).length >= orders) {
            arr.push(value);
        }
    }
    console.log(arr.sort());
}

let customersObj = {
    "Batman": [22, 30, 11, 17, 15, 52, 27, 12],
    "Spider-Man": [5, 17, 30, 33, 40, 22, 26, 10, 11, 45]
}

pizzaPoints(customersObj, 5, 20)

pizzaPoints(customersObj, 3, 10)

pizzaPoints(customersObj, 5, 100)