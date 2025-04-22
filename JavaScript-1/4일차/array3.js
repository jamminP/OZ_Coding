// 1. 빈 배열로 장바구니(cart)를 만든다.
// 2. 장바구니에 상품을 3개 추가한다 (push)
// 3. 현재 장바구니를 출력한다
// 4. 마지막 상품을 꺼낸다 (pop)
// 5. 꺼낸 상품과 장바구니 상태를 출력한다
// 6. 장바구니 맨 앞에 새 상품을 추가한다 (unshift)
// 7. 장바구니 맨 앞의 상품을 꺼낸다 (shift)
// 8. 꺼낸 상품과 최종 장바구니 상태를 출력한다

// 🛒 배열 메서드 실습: 장바구니 담기와 꺼내기

// 1. 장바구니(cart) 배열을 만든다.
const cart = [];

// 2. 상품을 3개 추가한다. ("사과", "바나나", "딸기")
// cart.push('사과');
// cart.push('바나나');
// cart.push('딸기');
cart.push('사과', '바나나', '딸기');

// 3. 현재 장바구니 내용을 출력한다.
console.log('현재 장바구니:', cart);

// 4. 장바구니에서 마지막에 담은 상품을 꺼낸 후 removedItem 변수에 할당한다.
const removedItem = cart.pop();

// 5. 꺼낸 상품과 현재 장바구니 내용을 출력한다.
console.log('꺼낸 상품:', removedItem);
console.log('업데이트된 장바구니:', cart);

// 6. 장바구니 맨 앞에 "포도"를 추가한다.
cart.unshift('포도');
console.log('포도를 앞에 추가한 장바구니:', cart);

// 7. 장바구니 맨 앞 상품을 꺼내고, 꺼낸 상품을 firstRemoved 변수에 할당한다.
const firstRemoved = cart.shift();
console.log('맨 앞에서 꺼낸 상품:', firstRemoved);
console.log('최종 장바구니 상태:', cart);