function makeBox(n) {
    let str = '';
    for (let i = 0; i < n; i++) {
        if (i == 0 || i == n - 1) {
            for (let i = 0; i < n; i++) {
                str += '#';
            }
            str += '\n';
        } else {
            str += '#';
            for(let i = 0; i < n -2; i++) {
                str += " ";
            }
            str += '#\n';
        }
    }
    console.log(str);
}

makeBox(5)

makeBox(3)

makeBox(2)

makeBox(1)