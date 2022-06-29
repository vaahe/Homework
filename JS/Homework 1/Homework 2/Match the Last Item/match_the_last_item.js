function matchLastItem(arr) {
    let sum = "";
    for (let i = 0; i < arr.length - 1; i++) {
        sum += arr[i];
    }
    
    if (arr[arr.length - 1] == sum) {
        console.log(true);
    } else {
        console.log(false);
    }
}

matchLastItem(["rsq", "6hi", "g", "rsq6hig"]);

matchLastItem([1, 1, 1, "11"]);

matchLastItem([8, "thunder", true, "8thundertrue"]);