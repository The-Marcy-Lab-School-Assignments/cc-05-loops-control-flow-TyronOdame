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
  if (num1 === num2) {
    return "both integers are equal";
  } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return `null`;
  } else if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};
console.log(greaterNum("21", "21"));

//Q3

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
