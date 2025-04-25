/**
 * 객체를 선언하고, 객체 내부 프로퍼티를 .표기법과 []표기법을 이용하여 호출해보세요.
 *
 * 코드 실행 방법
 * 아래 Terminal에 아래 코드를 작성해주세요.
 * node main.js
 */

// 브랜드, 색상, 최대시속, 탑승 인원 프로퍼티를 갖는 자동차 객체를 만들어주세요.

// .표기법과 []표기법을 이용하여 각 프로퍼티를 출력해보세요.
const Car = {
    brand: 'junior',
    color: 'pink',
    maxSpeed: '100km/s',
    seats: 10,
  };
  
  console.log(`brand: ${Car.brand}`);
  console.log(`color: ${Car.color}`);
  console.log(`maxSpeed: ${Car.maxSpeed}`);
  console.log(`seats: ${Car.seats}`);
  