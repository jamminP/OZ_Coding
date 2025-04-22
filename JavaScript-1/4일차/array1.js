// 🛒 배열과 인덱스를 활용한 장바구니 실습
// 1. 장바구니 초기화
// - 사과, 바나나, 딸기를 담은 배열 선언

// 2. 장바구니 목록 출력
// - 배열의 길이를 이용해 전체 상품 수 출력
// - 반복문을 사용해 각 상품을 번호와 함께 출력

// 3. 두 번째 상품을 변경해 보기
// - 인덱스를 사용해 '바나나'를 '오렌지'로 변경

// 4. 수정된 장바구니 출력
// - 배열의 길이 출력
// - 반복문으로 다시 모든 상품 출력

// 5. 장바구니 비어 있는지 확인
// - length가 0인지 확인하여 조건문으로 메시지 출력

// 6. 특정 상품 위치 찾기
// - '딸기'가 배열의 몇 번째에 있는지 indexOf로 확인
// - 결과를 사용자에게 출력

// 1. 장바구니 초기화
const cart = ['사과', '바나나', '딸기'];

// 2. 장바구니 목록 출력 (1.사과 2.바나나 ...)
console.log('[장바구니 목록]');
console.log(`총 ${cart.length}개의 상품이 담겨 있습니다.`);

for (let i = 0; i < cart.length; i++) {
  console.log(`${i + 1}. ${cart[i]}`);
}

// 3. 두 번째 상품을 변경해 보기
cart[1] = '오렌지';

console.log('\n[수정된 장바구니 목록]');
console.log(`총 ${cart.length}개의 상품이 담겨 있습니다.`);

// 4. 수정된 장바구니 출력하기
for (let i = 0; i < cart.length; i++) {
  console.log(`${i + 1}. ${cart[i]}`);
}

// 5. 장바구니가 비어 있는지 확인
if (cart.length === 0) {
  console.log('❌ 장바구니가 비어 있습니다.');
} else {
  console.log('🛒 장바구니에 상품이 있습니다.');
}

// 6. 특정 상품 위치 찾기 (딸기)
const itemToFind = '딸기';
const index = cart.indexOf(itemToFind);

if (index !== -1) {
  console.log(`\n${itemToFind}는 장바구니의 ${index + 1}번째에 있습니다.`);
} else {
  console.log(`\n${itemToFind}는 장바구니에 없습니다.`);
}