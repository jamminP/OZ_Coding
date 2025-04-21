/**
 * JavaScript 2일차 과제
 * 주사위 만들기
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 주사위 숫자 diceNumber를 Math 함수를 활용하여 만들어주세요.
 * 주사위 숫자는 코드를 실행할 때마다 랜덤한 숫자로 바뀌어야합니다.
 *
 * 예시
 * 주사위 숫자 = 1;
 * 
 * 출력   
  ┌─────┐
  │     │
  │  ●  │
  │     │
  └─────┘
 */

// 여기에 코드를 작성해주세요.

const diceArt = [
    '0인 경우는 제외해주세요.',
    `
    ┌─────┐
    │     │
    │  ●  │
    │     │
    └─────┘
    `,
    `
    ┌─────┐
    │ ●   │
    │     │
    │   ● │
    └─────┘
    `,
    `
    ┌─────┐
    │ ●   │
    │  ●  │
    │   ● │
    └─────┘
    `,
    `
    ┌─────┐
    │ ● ● │
    │     │
    │ ● ● │
    └─────┘
    `,
    `
    ┌─────┐
    │ ● ● │
    │  ●  │
    │ ● ● │
    └─────┘
    `,
    `
    ┌─────┐
    │ ● ● │
    │ ● ● │
    │ ● ● │
    └─────┘
    `,
  ];
  
  let diceNumber = randomNumber();

  console.log(diceArt[diceNumber]);

  // 함수에 바로 넣는 방법
  //console.log(diceArt[parseInt(Math.random()*6)+1]);


  function randomNumber(){
    let dice = 0;

    dice = parseInt((Math.random() * 6) + 1);

    return dice;
  }

  /*

  */

