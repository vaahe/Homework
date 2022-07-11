function weeklySalary(arr) {
    if (arr.some(value => value < 0)) {
        return;
    }

    let salary = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 8) {
            salary += arr[i] * 10;
        } else if (arr[i] > 8) {
            if (i >= 5) {
                salary += (8 * 20) + ((arr[i] - 8) * 30);
            } else {
                salary += (8 * 10) + ((arr[i] - 8) * 15);
            }
        }
    }
    console.log(salary);
}

weeklySalary([8, 8, 8, 8, 8, 0, 0])

weeklySalary([10, 10, 10, 0, 8, 0, 0])

weeklySalary([0, 0, 0, 0, 0, 12, 0])