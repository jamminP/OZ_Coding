/**
 * 주어진 대기업 객체를 이용해서 대기업 인원수 평균을 구해보세요.
 *
 * 요구사항
 * - 반복문을 사용해주세요.
 * - 평균을 구하는 함수를 만들고, 객체를 전달인자로 받아서 사용해주세요.
 * - 객체 프로퍼티 키를 담은 변수를 전달인자로 받아 객체에서 값을 가져올 때 사용해주세요.
 *
 * 코드 실행 방법
 * 아래 Terminal에 아래 코드를 작성해주세요.
 * node main.js
 */
const BIG_TECH_COMPANIES = require('./data.js');

// 여기에 코드를 작성해주세요.

let sum = 0;
let averge = 0;

for (let k in BIG_TECH_COMPANIES) {
  sum += BIG_TECH_COMPANIES[k].members;
}

averge = sum / BIG_TECH_COMPANIES.length;

console.log(averge);

// 정답: 349000
