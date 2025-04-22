// 주문한 메뉴 가격 목록
const itemPrices = [15000, 8500, 22000, 6000, 3500];

//여기에 코드를 작성하세요
let totalAmount = 0;

for (let i of itemPrices) {
  totalAmount += i;
}

console.log(`🧾 계산 완료! 총 지불할 금액은 ${totalAmount}원 입니다.`);
