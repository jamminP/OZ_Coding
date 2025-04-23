/**
 *  return 문을 활용하여 함수의 반환을 구성해보세요.
 *
 *  실행 방법: 아래 Terminal에 아래있는 코드를 붙여넣어 주세요.
 *  node main.js
 */

// 1. add 함수의 반환값을 작성해주세요.

function add(num1, num2) {
    // 여기에 코드를 입력해주세요.
  
    return num1 + num2;
  }
  
  console.log(add(17, 23)); // 40
  
  // 2. add 함수를 2번 호출한 후, 두 반환값을 더하는 코드를 구현해주세요.
  const sum1 = add(17, 23);
  const sum2 = add(17, 23);
  const sum = sum1 + sum2;
  
  // 여기에 코드를 작성해주세요.
  console.log(`sum1 + sum2 = ${sum}`);
  // 실행 방법: 아래 Terminal에 아래있는 코드를 붙여넣어 주세요.
  // node main.js
  