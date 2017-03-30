"use strict"

var stringList = [
  "macaw",
  "madam",
  "bob",
  "bobbbob",
  "rattattar",
  "rattattattat",
  "Hah"
];

var stringPairs = [
  ["", ""],
  ["", ""],
  ["", ""],
  ["", ""],
  ["", ""],
  ["", ""],
  ["", ""]
];

var numLists = [
  [1, 2, 3, 4, 5],
  [2, 4, 6, 12, 24, 48],
  [1, 5, 25, 225, 3]
];

let ipList = [
  "1.0.0.0",
  "250.250.250.200",
  "1,2,3,4",
  "0.0.1",
  "300.200.200.200",
  "1.2.3.4",
  "a.1.2.3"
];

let numFilelist = [
  ["1", "3", "#2", "5", "7", "##", "88"],
  ["#", "#", "1", "3"],
  ["1", "1", "2", "3", "5", "8"]
];


// =====================================================================
// P1 - common substrings
// =====================================================================
function common_substrings(s1, s2) {
  var len1 = s1.length;
  var len2 = s2.length;

  if (len1 = 0)
    return "";

  var str1 = s1.split('');

  str1.map( function(char1, index) {
      console.log(index + ": CHAR -- " + char1);
  });
}


// =====================================================================
// P2 - sum list of numbers (recursion)
// =====================================================================
function sum_rec(nums) {
  if (nums.length > 1){
    return nums.pop() + sum_rec(nums);
  } else {
    return nums.pop();
  }
}


// =====================================================================
// P3 - fibonacci N-sequence generator
// =====================================================================
function fibs(num) {
  let fibList = [];
  let fibLast = 1;

  fibList.push(0);
  if (num === 1) {
    return fibList;
  }

  fibList.push(1);
  if (num === 2) {
    return fibList;
  }

  for(let index=2; index < num; index +=1) {
    let fibNew = fibList[index-2] + fibList[index-1];
    fibList.push(fibNew);
    fibLast = fibNew;
  }

  return fibList;
}

// =====================================================================
// P4 - isPalindrome
// =====================================================================
function isPalindrome(str) {
  const chars = str.split('');
  let rIndex = chars.length -1;

  for(let index=0; index <= rIndex; index +=1){
    if(chars[index] !== chars[rIndex]) {
      return false;
    }

    rIndex -= 1;
  }

  return true;
}

// =====================================================================
// P5 - VALIDIP
// =====================================================================
function isValidIp(ipStr) {
  let ipValidity = true;
  // split the string at the "."
  let ip = ipStr.split('.');

  // check if there are exactly 4 fields
  if (ip.length === 4) {
    // convert each field to a base10 integer
    // check if each field is a valid integer from 0-255
    ip.map( function(ipField) {
      let value = parseInt(ipField, 10);
      if (value < 0 || value > 255) {
        ipValidity = false;
      }
    });
  } else {
    return false
  }

  return ipValidity;
}

// =====================================================================
// P? - ??
// =====================================================================
function sumFile(numFile) {
  let sum = 0;
  let invalidNum = /^#/;
  sum = numFile.reduce( function(acc, strInt) {
    let num = parseInt(strInt, 10);
    if (invalidNum.test(strInt)) {
      return 0 + acc;
    }
    return num + acc;
  }, 0);

  return sum;
}

// =====================================================================
// P? - ??
// =====================================================================
function fn() {
  //
}

// =====================================================================
// P1 TEST - COMMON_SUBSTRINGS
// =====================================================================
function p1() {
  console.log("RUNNING P1");
  stringList.map((stringPair) => {
    let [str1, str2] = stringPair;

    common_substrings(str1, str2);
  });
}

// =====================================================================
// P2 TEST - SUM_REC
// =====================================================================
function p2() {
  console.log("RUNNING P2");
  numLists.map((innerList, index) => {
    var total = sum_rec(innerList);
    console.log(index + ": TOTAL -- " + total)
  });
}

// =====================================================================
// P3 TEST - FIBS
// =====================================================================
function p3() {
  console.log("RUNNING P3");
  let sequences = [1, 2, 8, 15];

  sequences.map( function(num) {
    let fibNums = fibs(num);
    console.log(fibNums);
  });
}

// =====================================================================
// P? TEST - ISPALINDROME
// =====================================================================
function p4() {
  console.log("RUNNING P4 - isPalindrome");
  stringList.map( function(str) {
    if(isPalindrome(str)) {
      console.log(str + " -- YES");
    } else {
      console.log(str + " -- NO");
    }
  });
}

// =====================================================================
// P5 TEST - VALIDIP
// =====================================================================
function p5() {
  console.log("RUNNING P5 - isValidIp");
  ipList.map( function(ipStr) {
    console.log(ipStr + ": " + isValidIp(ipStr));
  });
}

// =====================================================================
// P6 TEST - sumFile
// =====================================================================
function p6() {
  console.log("RUNNING P6 - sum_of_file");
  numFilelist.map( function(numList, index) {
    console.log("index: " + numList);
    console.log("SUM -- " + sumFile(numList));
  });
}

// =====================================================================
// =====================================================================
// P? TEST - ??
// =====================================================================
// -- function p?() {
// -- }

// =====================================================================
// RUN ANY/ALL TESTS
// =====================================================================
const test = p6;
test();


