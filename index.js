var arr = [];

// nhập số N
function addNumber() {
  //input = number
  var number = parseInt(document.getElementById("inputNumber").value);
  arr.push(number);
  //output
  document.getElementById("numberList").innerHTML = arr.join(", ");
}

//tổng các số dương
function sumPositive() {
  //xử lý
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  //output
  document.getElementById("positiveSum").innerHTML =
    "Tổng các số dương: " + sum;
}
//đếm các số dương
function countPositive() {
  //xử lý
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    }
  }
  //output
  document.getElementById("positiveCount").innerHTML = "Số dương: " + count;
}
// tìm số nhỏ nhất
function findMin() {
  //xử lý
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  //output
  document.getElementById("min").innerHTML = "Số nhỏ nhất: " + min;
}
// tìm số dương nhỏ nhất
function findMinPositive() {
  //xử lý
  var minPositive = -1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && (minPositive == -1 || arr[i] < minPositive)) {
      minPositive = arr[i];
    }
  }
  //output
  document.getElementById("minPositive").innerHTML =
    "Số dương nhỏ nhất: " + minPositive;
}
// tìm số chẵn cuối cùng
function findLastEven() {
  //xử lý
  var lastEven = -1;
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 == 0) {
      lastEven = arr[i];
      break;
    }
  }
  //output
  document.getElementById("lastEven").innerHTML =
    "Số chẵn cuối cùng: " + lastEven;
}
// đổi chỗ 2 số
function swap() {
  //input = number
  var position1 = parseInt(document.getElementById("swapPosition1").value) - 1;
  var position2 = parseInt(document.getElementById("swapPosition2").value) - 1;
  var temp = arr[position1];
  //xử lý
  arr[position1] = arr[position2];
  arr[position2] = temp;
  //output
  document.getElementById("swapNum").innerHTML = "Mảng: " + arr.join(", ");
}
// sắp xếp giá trị tăng dần
function sortAscending() {
  //xử lý
  var sortedArr = [...arr];
  sortedArr.sort((a, b) => a - b);
  //output
  document.getElementById("sortedArray").innerHTML =
    "Mảng đã sắp xếp: " + sortedArr.join(", ");
}
// tìm số nguyên đầu tiên
//xử lý
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function findPrime() {
  var firstPrime;
  for (var i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      firstPrime = arr[i];
      break;
    }
  }
  //output
  document.getElementById("firstPrime").innerHTML =
    "Số nguyên tố đầu tiên: " + firstPrime;
}
var numbers = [];
//đếm số ngyên
function addNumber2() {
  //input = number
  var input = document.getElementById("numberInput").value;
  //xử lý
  if (!isNaN(input)) {
    numbers.push(Number(input));
    document.getElementById("numberInput").value = "";
    renderNumberList();
  }
}

function countIntegers() {
  var count = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (Number.isInteger(numbers[i])) {
      count++;
    }
  }
  //output
  document.getElementById("integerCount").innerHTML = count;
}

function renderNumberList() {
  var list = "";
  for (var i = 0; i < numbers.length; i++) {
    list += numbers[i] + " ";
  }
  //output
  document.getElementById("numberList2").innerHTML = list;
}

//so sánh số âm và số dương
function countPosNeg() {
  //xử lý
  var posCount = 0;
  var negCount = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      posCount++;
    } else if (arr[i] < 0) {
      negCount++;
    }
  }
  var message;
  if (posCount > negCount) {
    message = "Có nhiều số dương hơn";
  } else if (posCount < negCount) {
    message = "Có nhiều số âm hơn";
  } else {
    message = "Số lượng số dương và số âm bằng nhau";
  }
  //output
  document.getElementById("posNegCount").innerHTML = message;
}
