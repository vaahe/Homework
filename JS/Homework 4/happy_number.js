function isHappy(number) {
    debugger;
    let sum = 0;
    while (number > 0) {
        let i = number % 10;
        number = Math.floor(number / 10);
        sum += i * i;
    }

    if (sum === 1) {
        return true;
    } else if (sum > 1 && sum <= 4) {
        return false;
    }

    return isHappy(sum);
}

console.log(isHappy(67))
console.log(isHappy(89))
console.log(isHappy(139))
console.log(isHappy(1327))
console.log(isHappy(2871))
console.log(isHappy(3970))

// isHappy(89)

// isHappy(139)

// isHappy(1327)

// isHappy(2871)

// isHappy(3970)