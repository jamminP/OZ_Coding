/**
 * 아래 코드를 실행하여 함수 내부와 외부에 선언된 변수를 사용할 수 있는 범위를 눈으로 확인해보세요.
 *
 * 코드를 추가하거나 변수를 수정하여 실행해보는 방법도 좋습니다.
 *
 * 코드 실행 방법
 * 아래 Terminal에 아래 코드를 작성해주세요.
 * node main.js
 */

function dep1() {
    let num1 = 1;
    function dep2() {
      let num2 = 2;
      function dep3() {
        let num3 = 3;
        console.log(num1); // 1
        console.log(num2); // 2
        console.log(num3); // 3
      }
      console.log(num1); // 1
      console.log(num2); // 2
      console.log(num3); // ReferenceError: num3 is not defined
    }
    console.log(num1); // 1
    console.log(num2); // ReferenceError: num2 is not defined
    console.log(num3); // ReferenceError: num3 is not defined
  }
  console.log(num1); // ReferenceError: num1 is not defined
  console.log(num2); // ReferenceError: num2 is not defined
  console.log(num3); // ReferenceError: num3 is not defined
  