/**
 * JavaScript 8일차 과제
 * 오류 해결하기 2
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * 아래 코드를 수정하여 출력값과 기대값을 같게 만들어주세요.
 */

const studentPrinters = [];

// var이 안되는 이유는 i는 함수 밖에 i가 한개만 존재하기 때문에 모든 회전이 되어 
// i = 5가 되기 때문

for (let i = 0; i < 5; i++) { // var에서 let으로 변경
  studentPrinters.push(function () {
    console.log('학생 번호:', 1001 + i);
  });
}

studentPrinters[0](); // 기대: 1001
studentPrinters[1](); // 기대: 1002
studentPrinters[2](); // 기대: 1003
studentPrinters[3](); // 기대: 1004
studentPrinters[4](); // 기대: 1005