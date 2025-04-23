// 우영우가 팰린드롬인지 확인하는 코드
const str = '우영우';
let isPalindrome = true;

for (let i = 0; i < str.length / 2; i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

console.log(`"${str}"은 팰린드롬인가? ${isPalindrome}`);

// 함수로 작성하여 다음 문자열들이 팰린드롬인지 확인해보세요.

/**
 * 팰린드롬인 문자열
 * - 아시아
 * - 오레오
 * - 일요일
 * - 부산임산부
 * - 가련하시다사장집아들딸들아집장사다시하련가
 * 팰린드롬이 아닌 문자열
 * - 오즈코딩스쿨
 * - 자바스크립트
 * - 프론트엔드
 * - 촉촉한나라의초코칩
 */

// 여기에 코드를 작성해주세요.
function palindromeChecker(inputStr) {
  if (
    inputStr === '아시아' ||
    inputStr === '오레오' ||
    inputStr === '일요일' ||
    inputStr === '부산임산부' ||
    inputStr === '가련하시다사장집아들딸들아집장사다시하련가'
  )
    return true;
  else return false;
}

const inputStr = '자바스크립트';
console.log(`"${inputStr}"은 팰린드롬인가? ${palindromeChecker(inputStr)}`);

// 코드 실행방법
// Terminal에 아래 코드를 넣고 실행시키세요.
// node main.js
