/**
 *  함수 표현식으로 선언된 내용을 함수 호출로 실행시켜보세요.
 *  add 함수를 사용하는 방법을 보고, minus, multiply, divide 함수도 호출해보세요.
 *
 *  실행 방법: 아래 Terminal에 아래있는 코드를 붙여넣어 주세요.
 *  node main.js
 */

// add 함수를 호출하는 예시는 다음과 같습니다.

// add 함수
let add = function (num1, num2) {
    console.log(num1 + num2);
  };
  
  add(10, 7); // 17
  
  // add 함수의 호출 방식을 minus, multiply, divide 함수에도 적용해보세요.
  
  // minus 함수
  let minus = function (num1, num2) {
    console.log(num1 - num2);
  };
  
  // 여기에 코드를 적어주세요(minus)
  minus(10, 7);
  
  // multiply 함수
  let multiple = function (num1, num2) {
    console.log(num1 * num2);
  };
  
  // 여기에 코드를 적어주세요(multiply)
  multiple(10, 7);
  
  // divide 함수
  let divide = function (num1, num2) {
    console.log(num1 / num2);
  };
  
  // (나눗셈의 경우, 0으로 나누면 에러가 날 수 있습니다.)
  // 여기에 코드를 적어주세요(divide)
  divide(10, 7);
  
  // 실행 방법: 아래 Terminal에 아래있는 코드를 붙여넣어 주세요.
  // node main.js
  