# Code Challenge: Loops with Control Flow

## Instructions

1. Clone down this assignment to your `code-challenges' directory in VSCode.
2. Code your solutions using JavaScript in `index.js`.
3. **Be sure to run and test your code thoroughly!**
4. By the end of Code Challenge, **commit and push your changes up to Github**.
5. Using the browser, verify that your solution is in your remote repo on Github.

## Code Problems

1. Write a function `multiplesOfSixAndNine` that **console logs** all positive numbers from 1 to 100 inclusive if a number is a multiple of 6 **and** a multiple of 9.

   ```
   multiplesOfSixAndNine()
   // 18
   // 36
   // 54
   // 72
   // 90
   ```

2. Write a function named `greaterNum` that:

   - takes 2 arguments, both numbers.
   - returns whichever number is the greater (higher) number.
   - If both arguments are equal, it will return the string "both integers are equal"
   - If a given argument is not an integer data type it will return `null`

   ```
   greaterNum(10, 7) //returns 10
   greaterNum(1.14, 1.14) //returns "both integers are equal"
   greaterNum("21", 21) //returns null
   greaterNum("21", "21") //returns null

   ```

3. Write a function named `sumOfFourAndSix` that returns the sum of all the multiples of 4 **and** 6 from 1 to 1000, including 1 and 1000.

   ```
   sumOfFourAndSix() //returns 41832
   ```

4. Write a function named `oddAndEvenToN` that takes in an integer argument and will console.log if a number is odd or even between 0 and the given arguement.

   ```
   oddAndEvenToN(5)
   // will console.log:
   // "0 is even"
   // "1 is odd"
   // "2 is even"
   // "3 is odd"
   // "4 is even"
   // "5 is odd"

   ```

5. Write a function named `sumOfNotDivisibleByTen` that returns the sum of all numbers 1 to 1000 inclusive, that are **not** divisible by ten.

   ```
   sumOfNotDivisibleByTen() //returns 450000

   // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 21 + 22...

   ```

6. Write a function named `greaterNum` that:

   - takes 4 arguments.
   - returns whichever number is the greater (higher) number.
   - If two arguments are equal, it will return the string "two integers are equal"
   - If three arguments are equal, it will return the string "three integers are equal"
   - If all arguments are equal, it will return the string "all integers are equal"
   - If a given argument is not an integer data type it will return `null`

   ```
   greaterNum(10, 7, 16, 80) //returns 80
   greaterNum(1.14, 1.14, 5, 7) //returns "two integers are equal"
   greaterNum(1.14, 1.14, 1.14, 7) //returns "three integers are equal"
   greaterNum("21", 21, 60, 3) //returns null

   ```

### Bonus(optional)

7. Write a function `multiplesOfFourAndSix` that **returns an array** of all positive numbers from 1 to 100 if that number is a multiple of 4 and a mutliple of 6.

   ```
   multiplesOfFourAndSix() // returns [12, 24, 36, 48,60, 72, 84, 96]

   ```

8. Write a function named `countMultiplesOfTwo` that takes in an array of integers and returns the number of integers in the array that are multiples of two.
