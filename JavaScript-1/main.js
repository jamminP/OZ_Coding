let n = 987;
solution(n);

// function solution(n) {
//     let answer = 0;

//     while (n > 0) {
//         answer += n % 10;          // 일의 자리 더하기
//         n = Math.floor(n / 10);    // 자릿수 줄이기
//     }

//     return answer;
// }

function solution(n) {

    return n.toString().split('').reduce((a, b) => a + Number(b), 0);
}