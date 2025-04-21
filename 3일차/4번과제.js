/**
 * JavaScript 3일차 과제
 * 별 찍기
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * - 반복문을 활용하여 콘솔에 별을 출력해주세요.
 * - 변수 n에 맞춰 출력해주세요.
 */

let n = 5;

// 여기에 작성해주세요.
for (let i = 0; i < n; i++) {
  let string = '';

  for (let j = 0; j < n - i; j++) {
    string += ' ';
  }

  for (let k = 0; k < 2 * (i + 1) - 1; k++) {
    string += '*';
  }
  console.log(string);
}
