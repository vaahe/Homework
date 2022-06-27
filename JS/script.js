function isSpecialArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0 && i % 2 == 0  || arr[i] % 2 != 0 && i % 2 != 0) {
            return true;
        }
        return false;
    }
}

console.log(isSpecialArray([2,3,4,5]));
console.log(isSpecialArray([13,4,5,7,456,46]));
console.log(isSpecialArray([1,2,3,4,5,6,54,6]));