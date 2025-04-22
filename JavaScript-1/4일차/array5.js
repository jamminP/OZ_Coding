// 1. 좌석 초기화 (fill)
let seats = ['비어있음', 'ko', 'kang', '비어있음'];

console.log('초기 좌석 상태:', seats);

seats.fill('비어있음', 1, 3);

console.log('바뀐 좌석 상태:', seats);

// 2. 좌석 3번, 4번에 예약자 추가 (splice)
seats.splice(2, 1, 'kwon');
seats.splice(3, 1, 'hyun');
console.log('kwon, hyun 예약 후:', seats);

// 3. 예약 확인 (includes)
const isCharlieReserved = seats.includes('lee');
console.log('lee 예약 여부:', isCharlieReserved);

// 4. 단체 예약 추가 (concat)
const group = ['ahn', 'yoon'];
const updatedSeats = seats.concat(group);
console.log('단체 예약 포함 좌석 상태:', updatedSeats);

// 5. 입장 순서 변경 (reverse)
const reversedSeats = updatedSeats.reverse();
console.log('입장 순서 (역순):', reversedSeats);

// 6. 문자열 포맷 출력 (join)
const entranceOrder = reversedSeats.join(' > ');
console.log('최종 입장 순서:', entranceOrder);