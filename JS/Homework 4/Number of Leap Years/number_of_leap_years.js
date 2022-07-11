function numLeapYears(date) {
    let years = date.split("-").map(el => Number(el));
    let counter = 0;
    for (let i = years[0]; i <= years[1]; ++i) {
        if (new Date(i,1,29).getMonth() === 1) {
            ++counter;
        }
    }
    console.log(counter);
}

numLeapYears("1980-1984")

numLeapYears("2000-2020")

numLeapYears("1600-2000")