function findNaN(arr) {
    let index = arr.findIndex(Number.isNaN);
    if (index !== -1) {
        console.log(index);
    } else {
        console.log(-1);
    }
    
}

findNaN([1, 2, NaN]);

findNaN([NaN, 1, 2, 3, 4]);

findNaN([0, 1, 2, 3, 4]);