/**
 * JavaScript 5일차 과제
 * 윤년 구하기 2
 *
 * 출력 확인법
 * year 변수 값을 원하는 값으로 변경 후, Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * year를 매개변수로 받아 윤년인지 확인하는 함수를 만들어주세요.
 * - 윤년인 경우 출력 값
 *  "(연도)년은 윤년입니다."
 * - 윤년이 아닌 경우 출력 값
 *  "(연도)년은 윤년이 아닙니다."
 * 함수를 호출하여 결과를 확인해주세요.
 */

// 여기에 작성해주세요.
const yunYear = (year) => {
    if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0)
      return '윤년입니다.';
    else return '윤년이 아닙니다.';
  };
  
  const year = 1900;
  
  console.log(`${year}년은 ${yunYear(year)}`);
  