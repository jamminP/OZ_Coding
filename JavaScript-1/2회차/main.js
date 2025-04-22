// 아래 코드를 수정해주세요.
const memberName = 'Jane';
const grade = 'gold';
const points = '32000'; // 이 부분 문자열임



const gradeLabel = grade.toUpperCase(); // 대문자로 만드는 코드
const bonusRate = 0.1;

const bonusPoints = Math.floor(parseFloat(points) * bonusRate); // 문자열을 parseInt로 형변환 시킴

console.log(`${memberName}님의 등급: ${gradeLabel}`); 
console.log('보너스 포인트:', bonusPoints + 'P');
console.log('총 보유 포인트:', parseFloat(points) + bonusPoints + 'P'); // 문자열을 parseInt로 형변환 시킴