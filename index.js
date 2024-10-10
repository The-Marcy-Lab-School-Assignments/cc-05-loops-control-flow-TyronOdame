//Q1

function multiplesOfSixAndNine() {
  for (let i = 1; i <= 100; i++) {
    if (i % 6 == 0 && i % 9 == 0) {
      console.log(i);
    }
  }
}

multiplesOfSixAndNine();

//Q2 FIX THIS
const greaterNum = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return `null`;
  } else if (num1 === num2) {
    return "both integers are equal";
  } else if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};
console.log(greaterNum(1.14, 1.14));

//Q3

const sumOfFourAndSix = () => {
  let sum = 0;

  for (let i = 0; i <= 1000; i++) {
    if (i % 4 == 0 && i % 6 == 0) {
      sum += i;
    }
  }
  return sum;
};

console.log(sumOfFourAndSix());

//Q4

const oddAndEvenToN = (num) => {
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
  }
};

oddAndEvenToN(5);

//Q5

const sumOfNotDivisibleByTen = () => {
  let sum = 0;

  for (let i = 1; i <= 1000; i++) {
    if (i % 10 !== 0) {
      sum += i;
    }
  }
  return sum;
};
console.log(sumOfNotDivisibleByTen());

//Q6 broken :(

const greaterNumber = (num1, num2, num3, num4) => {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    typeof num3 !== "number" ||
    typeof num4 !== "number"
  ) {
    return `null`;
  } else if (
    num1 === num2 ||
    num3 === num4 ||
    num1 === num3 ||
    num1 === num4 ||
    num2 === num3 ||
    num2 === num4
  ) {
    return `two integers are equal`;
  } else if (
    (num1 === num2 && num2 === num3) ||
    (num1 === num3 && num3 === num4) ||
    (num4 === num1 && num4 === num2)
  ) {
    return `three integers are equal`;
  } else {
    return Math.max(num1, num2, num3, num4);
  }
};

console.log(greaterNumber(1.14, 1.14, 1.14, 7));

//bonus

const multiplesOfFourAndSix = () => {
  let arr = [];

  for (let i = 1; i < 100; i++) {
    if (i % 4 == 0 && i % 6 == 0) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(multiplesOfFourAndSix());
