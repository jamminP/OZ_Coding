// 🍔 햄버거 주문 수정 시스템 의사코드

// 1. 오늘 주문된 햄버거 목록을 배열로 선언한다.
// ['치킨버거', '불고기버거', '상하이버거', '새우버거']
// 2. 원본 배열을 slice()를 사용해서 복사한다.
// 3. 복사한 배열에서 '상하이버거'가 있는 위치(index)를 찾는다.
// 4. index가 -1이 아니라면, 해당 위치의 값을 '데리버거'로 수정한다.
// 5. 원본 배열과 수정된 배열을 각각 console.log로 출력한다.

// 1. 오늘 주문된 햄버거 목록을 배열로 선언한다.
const orders = ['치킨버거', '불고기버거', '상하이버거', '새우버거'];

// 2. 원본 배열을 slice()를 사용해서 복사한다.
const correctedOrders = orders.slice();

// 3. 복사한 배열에서 '상하이버거'가 있는 위치(index)를 찾는다.
const index = correctedOrders.indexOf('상하이버거');

// 4. index가 -1이 아니라면, 해당 위치의 값을 '데리버거'로 수정한다.
if (index != -1) {
  correctedOrders[index] = '데리버거';
}

// 5. 원본 배열과 수정된 배열을 각각 console.log로 출력한다.
console.log('📋 원본 주문 목록:', orders);
console.log('✅ 수정된 주문 목록:', correctedOrders);