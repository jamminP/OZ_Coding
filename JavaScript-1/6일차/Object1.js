/**
 * 아래 내용에 맞는 객체를 선언해보세요.
 *
 * 코드 실행 방법
 * 아래 Terminal에 아래 코드를 작성해주세요.
 * node main.js
 */

// 색상과 길이 프로퍼티를 갖는 연필 객체를 선언해보세요.

// 색상과 두께 프로퍼티를 갖는 형광팬 객체를 선언해보세요.

// 가로 길이와 세로 길이 프로퍼티를 갖는 지우개 객체를 선언해보세요.

// 크기와 모양, 그리고 내용물(연필, 형광팬, 지우개 객체를 담은 배열) 프로퍼티를 갖는 필통 객체를 선언해보세요.

// 각 객체를 console.log를 통해 출력해보세요.

// 코드 실행 방법
// 아래 Terminal에 아래 코드를 작성해주세요.
// node main.js

const pencil = {
  pencil_color: 'black-pencil',
  Pencil_langs: 10,
};

const colorPen = {
  colorPen_color: 'red-colorPen',
  colorPen_weights: 12,
};

const eraser = {
  eraser_width: 5,
  eraser_height: 6,
};

const pencilCase = {
  pencilCase_size: 0,
  pencilCase_line: '네모',
  pencil,
  colorPen,
  eraser,
};

console.log(
  `Pencil -> color: ${pencil.pencil_color}, long: ${pencil.Pencil_langs}`
);
console.log(
  `Color Pencil -> color: ${colorPen.colorPen_color}, weight: ${colorPen.colorPen_weights}`
);
console.log(
  `Pencil Case -> size: ${pencilCase.pencilCase_size}, line: ${pencilCase.pencilCase_line}`
);
console.log(
  `Pencil Case -> pencil: ${pencilCase.pencil.Pencil_langs}, colorPen: ${colorPen}, eraser: ${eraser}`
);
