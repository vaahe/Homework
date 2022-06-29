function removeDups(arr) {
    let unique = arr.filter((element, index) => {
        return arr.indexOf(element) === index;
    });

    console.log(...unique);
}

removeDups([1, 0, 1, 0]);

removeDups(["The", "big", "cat"]);

removeDups(["John", "Taylor", "John"]);