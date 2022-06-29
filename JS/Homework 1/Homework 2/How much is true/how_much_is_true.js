function countTrue(arr) {
    if (arr.length == 0) {
        console.log(0);
    } else {
        let counter = 0;
        let i = 0;
        while (i < arr.length) {
            i++;
            if (arr[i] == true) {
                ++counter;
            }
        }
        console.log(counter);
    }
}

countTrue([true, true, true, true, false]);
countTrue([]);
countTrue([false, false, false]);
