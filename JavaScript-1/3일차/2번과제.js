/**
 * JavaScript 3일차 과제
 * 배달 주문하기
 *
 * 출력 확인법
 * menu 변수 값을 원하는 값으로 변경 후, Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * 메뉴를 입력하면 메뉴 명에 맞게 메뉴와 가격을 출력합니다.
 * 떡볶이 : 15000원
 * 김밥: 3000원
 * 튀김: 2000원
 * 우동: 7500원
 * 없는 메뉴입니다.
 */

let menu = '우동우동';

// 여기에 작성해주세요.

switch (menu) {
  case '떡볶이':
    console.log(`${menu}: 15000원`);
    break;
  case '김밥':
    console.log(`${menu}: 3000원`);
    break;
  case '튀김':
    console.log(`${menu}: 2000원`);
    break;
  case '우동':
    console.log(`${menu}: 7500원`);
    break;
  default:
    console.log('없는 메뉴입니다.');
    break;
}
