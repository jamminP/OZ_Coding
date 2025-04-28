// 📌 함수 표현식으로 작성되어 있는 코드를 화살표 함수로 변경하세요.
// 🚀 실습 예제 1
const double = function (num) {
    return num * 2;
  };
  
  let doubleArrow = (num) => num * 2;
  
  // ✨ 결과 확인
  console.log('✨ 화살표 함수 작동 결과 :', doubleArrow(3));
  console.log('------------------------------------------');
  
  // 🚀 실습 예제 2
  const isEven = function (num) {
    return num % 2 === 0;
  };
  
  // 선언되어 있는 isEvenArrow 변수에 결과를 할당하세요.
  const isEvenArrow = (num) => num % 2 === 0;
  
  // ✨ 결과 확인
  console.log('✨ 화살표 함수 작동 결과 :', isEvenArrow(6));
  console.log('------------------------------------------');
  
  // 🚀 실습 예제 3 (함수 내부에 여러줄의 코드가 있는 경우)
  const greet = function (name) {
    const message = `Hello, ${name}!`;
    return message;
  };
  
  // 선언되어 있는 greetArrow 변수에 결과를 할당하세요.
  let greetArrow = (name) => {
    const message = `Hello, ${name}!`;
    return message;
  };
  
  // ✨ 결과 확인
  console.log('✨ 화살표 함수 작동 결과 :', greetArrow('카리나'));
  console.log('------------------------------------------');
  
  // 🚀 실습 예제 4 (매개변수가 여러 개인 경우)
  const getUser = (name, age) => {
    return { name, age };
  };
  
  // 선언되어 있는 getUserArrow 변수에 결과를 할당하세요.
  let getUserArrow = (name, age) => {
    return { name, age };
  };
  
  // ✨ 결과 확인
  console.log('✨ 화살표 함수 작동 결과 :', getUserArrow('카리나', 25));
  console.log('------------------------------------------');