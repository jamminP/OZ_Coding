/**
 * JavaScript 4일차 과제
 * 신규 고객 선별하기
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * - includes() 함수를 이용하여 “신규” 라는 문자열이 포함된 요소를 찾아 새로운 newCustomers 배열을 만들어주세요.
 */

// 고객 목록
const customerList = [
    '신규 - 오콘솔',
    '기존 - 이코딩',
    '신규 - 이수열',
    '기존 - 박오즈',
    '신규 - 최열심',
    '기존 - 신정열',
  ];
  
  // 여기에 코드를 작성해주세요.
  const newCustomers = [];
  let i = '';
  for (i of customerList) {
    if (i.includes('신규')) newCustomers.push(i);
  }
  
  console.log(newCustomers);
  