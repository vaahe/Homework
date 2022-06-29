function clone(arr) {
  arr.push([...arr]);
  console.log(...arr);
}

clone([1, 1]);

clone([1, 2, 3]);

clone(["x", "y"]);