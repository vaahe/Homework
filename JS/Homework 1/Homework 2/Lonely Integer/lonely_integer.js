function lonelyInteger(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(-arr[i])) {
            continue;
        } else {
            console.log(arr[i]);
            break;
        }
    }
}

lonelyInteger([1, -1, 2, -2, 3]);

lonelyInteger([-3, 1, 2, 3, -1, -4, -2]);

lonelyInteger([-9, -105, -9, -9, -9, -9, 105]);