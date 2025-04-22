// 1. 도넛 이름 배열
const donuts = ['초코도넛', '딸기도넛', '바나나도넛', '말차도넛'];

// 2. 각 도넛의 판매 수량 배열 (donuts 배열과 같은 순서)
const sales = [12, 8, 5, 10];

// 3. 각 도넛의 재고 수량 배열 (donuts 배열과 같은 순서)
const stocks = [8, 3, 12, 6];

// 4. 도넛 이름 출력 (for문 사용)
for (let i = 0; i < donuts.length; i++) {
  console.log(`오늘의 도넛: ${donuts[i]}`);
}

// 5. 판매 수량 합계 계산 (for문 사용)
let totalSales = 0;

for (let i = 0; i < sales.length; i++) {
  totalSales += sales[i];
}

console.log(`총 판매 수량: ${totalSales}개`);

// 6. 재고 5개 미만 도넛 이름 출력 (for문, if문 사용)

for (let i = 0; i < stocks.length; i++) {
  if (stocks[i] < 5) console.log(`주문이 필요 도넛: ${donuts[i]}`);
}
