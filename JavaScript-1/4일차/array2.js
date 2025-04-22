// 1. 숫자 - 예시 값: 42
// 2. 문자열 - 예시 값: 'hello'
// 3. 배열 - 예시 값: [1, 2, 3]
// 4. 빈 배열 - 예시 값: []
// 5. 객체 - 예시 값: { a: 1 }
// 6. undefined
// 7. null
// 8. 함수 -  예시 값: function () {}
// 9. 배열처럼 생긴 문자열 - 예시 값: '[1, 2, 3]'
// 10. new Array()로 생성된 배열 - 예시 값: new Array(2)

console.log(`숫자: ${Array.isArray(42)}`);
console.log(`문자열: ${Array.isArray('hello')}`);
console.log(`배열: ${Array.isArray([1, 2, 3])}`);
console.log(`빈 배열: ${Array.isArray([])}`);
console.log(`객체: ${Array.isArray({ a: 1 })}`);
console.log(`undefined: ${Array.isArray(undefined)}`);
console.log(`null: ${Array.isArray(null)}`);
console.log(`함수: ${Array.isArray(function () {})}`);
console.log(`배열처럼 생긴 문자열: ${Array.isArray('[1,2,3]')}`);
console.log(`new Array()로 생성된 배열: ${Array.isArray(new Array(2))}`);