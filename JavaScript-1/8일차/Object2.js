// 🚨 주어진 코드에서 발생하는 오류를 해결하세요.
// 1️⃣ 변수 중에 접근할 수 없는 변수를 반환하려는 코드가 있습니다.
// 2️⃣ 문제가 발생하는 부분을 해결하여 결과를 확인하세요.

function scopeExample() {
    var functionScope = '함수스코프';
    let blockScope = '블록스코프';
    const alsoBlockScope = '블록스코프2';
  
    if (true) {
      var functionScope2 = '함수스코프2';
      let blockScope2 = '블록 스코프2';
      const alsoBlockScope2 = '블록 스코프2';
    }
  
    console.log(functionScope);
    console.log(blockScope);
    console.log(alsoBlockScope);
    console.log(functionScope2);
    // console.log(blockScope2);
    // console.log(alsoBlockScope2);
  }
  
  // console.log();
  
  scopeExample();  