function getDays(firstDate, secondDate) {
    let mlscnds = secondDate.getTime() - firstDate.getTime();
    console.log(mlscnds / 86400000);
}

getDays(
    new Date("June 14, 2019"),
    new Date("June 20, 2019")
)

getDays(
    new Date("December 29, 2018"),
    new Date("January 1, 2019")
)

getDays(
    new Date("July 20, 2019"),
    new Date("July 30, 2019")
)