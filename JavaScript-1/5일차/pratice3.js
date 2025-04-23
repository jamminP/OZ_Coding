/**
 * JavaScript 5일차 과제
 * 카페 주문하기
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * - 점심값을 매개변수로 받아 살 수 있는 1800원 커피 수를 반환하는 함수를 만들어주세요.
 */

// 여기에 작성해주세요.
function cupOfCoffee(lunchFee) {
    const teamPrice = 96000; // 팀 점심지원비
    const teamMember = 8;
    const coffeePrice = 1800;
    return Math.floor((teamPrice - lunchFee) / (teamMember * coffeePrice));
  }
  
  const lunchFee = 80000; // 점심값 50000원 사용.
  
  console.log(
    `점심값은 ${lunchFee}를 사용하였으므로, 팀원이 남은 예산으로 구매할 수 있는 커피는 ${cupOfCoffee(
      lunchFee
    )}개 입니다.`
  );  