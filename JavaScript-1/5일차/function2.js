/**
 *  함수 표현식을 사용하여 함수 선언문으로 선언된 코드를 함수 표현식 함수로 변환해보세요.
 *  코드를 함수로 변환하고 다음 실행코드로 실행했을 때 동일한 내용이 나와야합니다.
 *
 *  실행 방법: 아래 Terminal에 아래있는 코드를 붙여넣어 주세요.
 *  node main.js
 */

// 변환 전
// add 함수
function legacy_add(num1, num2) {
    return num1 + num2;
  }
  // minus 함수
  function legacy_minus(num1, num2) {
    return num1 - num2;
  }
  // multiple 함수
  function legacy_multiple(num1, num2) {
    return num1 * num2;
  }
  // division 함수
  function legacy_division(num1, num2) {
    return num1 / num2;
  }
  
  console.log(
    `변환 전: 덧셈 ${legacy_add(10, 5)} 뺄셈 ${legacy_minus(
      10,
      5
    )} 곱셈 ${legacy_multiple(10, 5)} 나눗셈 ${legacy_division(10, 5)}`
  );
  
  // 위 코드의 legacy_add, legacy_minus, legacy_multiple, legacy_division을
  // 각각 add, minus, multiple, division으로 바꿔보세요.
  
  // add 함수
  const add = (a, b) => a + b;
  // minus 함수
  const minus = (a, b) => a - b;
  // multiple 함수
  const multiple = (a, b) => a * b;
  // division 함수
  const division = (a, b) => a / b;
  
  console.log(
    `변환 후: 덧셈 ${add(10, 5)} 뺄셈 ${minus(10, 5)} 곱셈 ${multiple(
      10,
      5
    )} 나눗셈 ${division(10, 5)}`
  );
  
  // 실행 방법: 아래 Terminal에 아래있는 코드를 붙여넣어 주세요.
  // node main.js
  