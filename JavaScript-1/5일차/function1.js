/**
 *  함수 선언문을 사용하여 다음 코드를 add라는 이름을 가진 함수로 변환해보세요.
 *  코드를 함수로 변환하고 다음 실행코드로 실행했을 때 동일한 내용이 나와야합니다.
 *  실행 방법: 아래 Terminal에 아래있는 코드를 붙여넣어 주세요.
 *  node main.js
 */

// 변환 전
let num1 = 10;
let num2 = 5;
let ans_add = num1 + num2;
let ans_minus = num1 - num2;
let ans_multiply = num1 * num2;
let ans_divide = num1 / num2;

console.log(
  `변환 전: 덧셈 ${ans_add} 뺄셈 ${ans_minus} 곱셈 ${ans_multiply} 나눗셈 ${ans_divide}`
);

// 위 코드를 함수 선언문을 사용하여 add, minus, multiply, divide 함수를 만들어보세요.

// add 함수
function add(a, b) {
  return a + b;
}
// minus 함수
function minus(a, b) {
  return a - b;
}
// multiply 함수
function multiply(a, b) {
  return a * b;
}
// divide 함수
function divide(a, b) {
  return a / b;
}

console.log(
  `변환 후: 덧셈 ${add(10, 5)} 뺄셈 ${minus(10, 5)} 곱셈 ${multiply(
    10,
    5
  )} 나눗셈 ${divide(10, 5)}`
);

// 실행 방법: 아래 Terminal에 아래있는 코드를 붙여넣어 주세요.
// node main.js
