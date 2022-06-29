//check if array is special

function isSpecialArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0 && i % 2 == 0  || arr[i] % 2 != 0 && i % 2 != 0) {
            return true;
        }
        return false;
    }
}

console.log(isSpecialArray([2,3,4,5]));
console.log(isSpecialArray([13,4,5,7,456,46]));
console.log(isSpecialArray([1,2,3,4,5,6,54,6]));



//check if are value are true

var result = function isTruthy(param1, param2, param3) {
    if (param1 && param2 && param3) {
      return true;
    }
    return false;
  }
  
  console.log(result(1,1,2));
  console.log(result(true,false,true));
  console.log(result(0,"",true));


  //find the mean

  function mean(num) {
    var sum = 0;
    const chars = Array.from(String(num), Number);
    for (let i = 0; i < chars.length; i++) {
      sum += chars[i];
    }
    return sum / chars.length;
  }
  
  let sum1 = mean(465);
  console.log(sum1);
  
  let sum2 = mean(1041);
  console.log(sum2);
  
  let sum3 = mean(33);
  console.log(sum3);