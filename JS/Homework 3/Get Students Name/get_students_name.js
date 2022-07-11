function getStudentsWithNamesAndTopNotes(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].topNotes = Math.max(...arr[i].notes);
        delete arr[i].notes;
    }
    console.log(...arr);
}

getStudentsWithNamesAndTopNotes([
    { "name": "John", "notes": [3, 5, 4] },
    { "name": "Max", "notes": [1, 4, 6] },
    { "name": "Zygmund", "notes": [1, 2, 3] }
])