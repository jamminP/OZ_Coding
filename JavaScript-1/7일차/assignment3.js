/**
 * JavaScript 7일차 과제
 * 스택 자료구조 만들기
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * - 스택의 4가지 기능을 각각의 함수로 만들어 큐를 구현해주세요.
    - 기능 1. `push` : 데이터 추가
    - 기능 2. `pop`: 마지막 데이터 제거
    - 기능 3. `peek`: 가장 마지막 데이터 확인
    - 기능 4. `isEmpty`: 스택가 비어있는지 확인
 */

// 스택 만들기
let stack = [];
// 스택에 데이터 추가
function AddData(data) {
  stack.push(data);
}
// 스택에서 데이터 삭제
function DeleteData(data) {
  stack.pop(data);
}
// 스택의 가장 마지막 데이터 확인
function peek() {
  console.log(stack[stack.length - 1]);
}
// 스택이 비어있는지 확인
function isEmpty() {
  if (stack.length === 0) console.log(`스택이 비어있습니다.`);
  else console.log(`스택이 채워져 있습니다.`);
}

isEmpty();
AddData(1);
AddData(2);
console.log(stack);
DeleteData();
console.log(stack);
AddData(3);
AddData(4);
AddData(5);
AddData(6);
console.log(stack);
peek();