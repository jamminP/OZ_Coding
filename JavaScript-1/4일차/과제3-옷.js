/**
 * JavaScript 4일차 과제
 * 봄 옷 고르기
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * - 아래 2차원 배열을 순회하면서 만들 수 있는 모든 코디 경우의 수를 담은 cordination 배열 만들어주세요.
 */

const cordination = [];

// 옷장
const wardrobe = [
  ['반팔', '후드티', '셔츠'],
  ['슬랙스', '청바지', '테니스치마'],
  ['구두', '단화', '스니커즈'],
];

// 여기에 코드를 작성해주세요.
for (let i = 0; i < wardrobe.length; i++) {
  for (let j = 0; j < wardrobe[i].length; j++) {
    for (let k = 0; k < wardrobe[j].length; k++) {
      const wear = `${[
        wardrobe[0][i] + ', ' + wardrobe[1][j] + ', ' + wardrobe[2][k],
      ]}`;
      cordination.push(wear);
    }
  }
}

console.log(cordination);
