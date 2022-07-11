function timeToEat(time) {
    let BREAKFAST = 7,
        LUNCH = 12,
        DINNER = 7;

    let hours = time.split(" ")[0].split(":"),
        AmPm = time.split(" ")[1];

    if (hours[1] === "00") {
        hours[1] = "0" - 0;
    }

    if (AmPm == "p.m.") {
        hours[0] = hours[0] - 0 + 12;
        LUNCH += 12;
        DINNER += 12;
    } else {
        hours[0] = hours[0] - 0;
        hours[1] = hours[1] - 0;
    }

    let result = [];
    if (hours[0] > BREAKFAST && hours[0] < LUNCH) {
        result.push((LUNCH - hours[0]) / 2, hours[1]);
    } else if (hours[0] > LUNCH && hours[0] < DINNER) {
        result.push((DINNER - hours[0]) / 2, hours[1]);
    } else {
        result.push((BREAKFAST - hours[0]) / 2, 60 - hours[1]);
    }
    console.log(...result);
}

timeToEat("2:00 p.m.")  //[5,0]

timeToEat("5:50 a.m.")  //[1,10]