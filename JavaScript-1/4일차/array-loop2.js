// 주어진 책 판매 부수 목록에서 판매량이 500 이상인 책만 골라냅니다.

// bookSales 변수에 여러 책들의 판매 부수를 담은 데이터가 들어 있습니다.
const bookSales = [300, 850, 450, 1200, 200, 980, 600, 150];
const bestsellerCandidates = [];
let k = 0;
// 여기에 코드를 작성하세요.
for (let i = 0; i < bookSales.length; i++) {
  if (bookSales[i] >= 500) {
    bestsellerCandidates[k] = bookSales[i];
    k++;
  }
}

console.log(`"베스트셀러 후보 판매 부수 목록: [ ${bestsellerCandidates} ]"`);