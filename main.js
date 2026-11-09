// ================== DỮ LIỆU ==================
var numberArray = []; // mảng số nguyên (bài 1 -> 8, 10)
var realArray = []; // mảng số thực (bài 9)

// ================== HÀM DÙNG CHUNG ==================
function getEl(id) {
  return document.getElementById(id);
}

function showResult(id, message) {
  getEl(id).innerHTML = message;
}

// Kiểm tra mảng có rỗng không, nếu rỗng thì báo lỗi vào ô kết quả
function isEmptyArray(resultId) {
  if (numberArray.length === 0) {
    showResult(resultId, "Vui lòng thêm số vào mảng trước!");
    return true;
  }
  return false;
}

function showArray() {
  getEl("arrayResult").innerHTML = "Mảng hiện tại: [ " + numberArray.join(", ") + " ]";
}

// ================== THÊM SỐ (MẢNG SỐ NGUYÊN) ==================
function addNumber() {
  var value = getEl("inputNumber").value;

  if (value === "") {
    alert("Vui lòng nhập số!");
    return;
  }

  var num = Number(value);

  if (!Number.isInteger(num)) {
    alert("Vui lòng nhập số nguyên!");
    return;
  }

  numberArray.push(num);
  showArray();

  getEl("inputNumber").value = "";
  getEl("inputNumber").focus();
}

// ================== BÀI 1: TỔNG SỐ DƯƠNG ==================
function bai1() {
  if (isEmptyArray("resultBai1")) return;

  var sum = 0;
  for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0) {
      sum += numberArray[i];
    }
  }
  showResult("resultBai1", "Tổng các số dương: " + sum);
}

// ================== BÀI 2: ĐẾM SỐ DƯƠNG ==================
function bai2() {
  if (isEmptyArray("resultBai2")) return;

  var count = 0;
  for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0) {
      count++;
    }
  }
  showResult("resultBai2", "Số lượng số dương: " + count);
}

// ================== BÀI 3: TÌM SỐ NHỎ NHẤT ==================
function bai3() {
  if (isEmptyArray("resultBai3")) return;

  var min = numberArray[0];
  for (var i = 1; i < numberArray.length; i++) {
    if (numberArray[i] < min) {
      min = numberArray[i];
    }
  }
  showResult("resultBai3", "Số nhỏ nhất trong mảng: " + min);
}

// ================== BÀI 4: TÌM SỐ DƯƠNG NHỎ NHẤT ==================
function bai4() {
  if (isEmptyArray("resultBai4")) return;

  // Mảng mới chứa các số dương
  var positiveArray = [];
  for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0) {
      positiveArray.push(numberArray[i]);
    }
  }

  if (positiveArray.length === 0) {
    showResult("resultBai4", "Không có số dương trong mảng");
    return;
  }

  var minPositive = positiveArray[0];
  for (var j = 1; j < positiveArray.length; j++) {
    if (positiveArray[j] < minPositive) {
      minPositive = positiveArray[j];
    }
  }
  showResult("resultBai4", "Số dương nhỏ nhất trong mảng: " + minPositive);
}

// ================== BÀI 5: TÌM SỐ CHẴN CUỐI CÙNG ==================
function bai5() {
  if (isEmptyArray("resultBai5")) return;

  var lastEven = -1; // mặc định -1 nếu không có số chẵn
  for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 2 === 0) {
      lastEven = numberArray[i];
    }
  }
  showResult("resultBai5", "Số chẵn cuối cùng: " + lastEven);
}

// ================== BÀI 6: ĐỔI CHỖ 2 GIÁ TRỊ ==================
function bai6() {
  if (isEmptyArray("resultBai6")) return;

  var v1 = getEl("inputIndex1").value;
  var v2 = getEl("inputIndex2").value;

  if (v1 === "" || v2 === "") {
    showResult("resultBai6", "Vui lòng nhập đủ 2 vị trí!");
    return;
  }

  var index1 = Number(v1);
  var index2 = Number(v2);

  var valid =
    Number.isInteger(index1) &&
    Number.isInteger(index2) &&
    index1 >= 0 &&
    index2 >= 0 &&
    index1 < numberArray.length &&
    index2 < numberArray.length;

  if (!valid) {
    showResult(
      "resultBai6",
      "Vị trí không hợp lệ! Vị trí phải từ 0 đến " + (numberArray.length - 1)
    );
    return;
  }

  // Đổi chỗ bằng biến tạm
  var temp = numberArray[index1];
  numberArray[index1] = numberArray[index2];
  numberArray[index2] = temp;

  showArray();
  showResult("resultBai6", "Mảng sau khi đổi chỗ: [ " + numberArray.join(", ") + " ]");
}

// ================== BÀI 7: SẮP XẾP TĂNG DẦN ==================
function bai7() {
  if (isEmptyArray("resultBai7")) return;

  // Sắp xếp trên bản sao để không làm thay đổi mảng gốc
  var sortedArray = numberArray.slice();

  for (var i = 0; i < sortedArray.length - 1; i++) {
    for (var j = i + 1; j < sortedArray.length; j++) {
      if (sortedArray[i] > sortedArray[j]) {
        var temp = sortedArray[i];
        sortedArray[i] = sortedArray[j];
        sortedArray[j] = temp;
      }
    }
  }
  showResult("resultBai7", "Mảng sau khi sắp xếp: [ " + sortedArray.join(", ") + " ]");
}

// ================== BÀI 8: TÌM SỐ NGUYÊN TỐ ĐẦU TIÊN ==================
function isPrime(n) {
  if (n < 2) return false;
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function bai8() {
  if (isEmptyArray("resultBai8")) return;

  var firstPrime = -1; // mặc định -1 nếu không có số nguyên tố
  for (var i = 0; i < numberArray.length; i++) {
    if (isPrime(numberArray[i])) {
      firstPrime = numberArray[i];
      break; // tìm thấy thì dừng vòng lặp
    }
  }
  showResult("resultBai8", "Số nguyên tố đầu tiên: " + firstPrime);
}

// ================== BÀI 9: ĐẾM SỐ NGUYÊN (MẢNG SỐ THỰC) ==================
function addRealNumber() {
  var value = getEl("inputRealNumber").value;

  if (value === "") {
    alert("Vui lòng nhập số!");
    return;
  }

  realArray.push(Number(value));
  getEl("realArrayResult").innerHTML = "Mảng số thực: [ " + realArray.join(", ") + " ]";

  getEl("inputRealNumber").value = "";
  getEl("inputRealNumber").focus();
}

function bai9() {
  if (realArray.length === 0) {
    showResult("resultBai9", "Vui lòng thêm số vào mảng số thực trước!");
    return;
  }

  var count = 0;
  for (var i = 0; i < realArray.length; i++) {
    if (Number.isInteger(realArray[i])) {
      count++;
    }
  }
  showResult("resultBai9", "Số lượng số nguyên trong mảng: " + count);
}

// ================== BÀI 10: SO SÁNH SỐ ÂM VÀ SỐ DƯƠNG ==================
function bai10() {
  if (isEmptyArray("resultBai10")) return;

  var positiveCount = 0;
  var negativeCount = 0;

  for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0) {
      positiveCount++;
    } else if (numberArray[i] < 0) {
      negativeCount++;
    }
  }

  var message = "Số dương: " + positiveCount + " - Số âm: " + negativeCount + " → ";

  if (positiveCount > negativeCount) {
    message += "Số dương nhiều hơn";
  } else if (positiveCount < negativeCount) {
    message += "Số âm nhiều hơn";
  } else {
    message += "Số dương và số âm bằng nhau";
  }
  showResult("resultBai10", message);
}