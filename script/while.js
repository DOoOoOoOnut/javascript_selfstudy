/* let x = 0;

while (x < 10) {
    console.log(x++);
} */
// for문에서 가운데 조건만 빼서 사용
// 변화를 줄 수 있는 코드를 안에 넣어줘야 함
// 안넣으면 무한루프

// 인위적인 무한반복에 널리 쓰이는 코드⚠️
/* 
while (true) {
console.log('무한반복');
}
*/

// break문으로 무한반복 탈출 가능
/* let x = 0;

while (true) {
    if (x++ >= 5) break; // 😎
    console.log(x);
} */
// 1 ~ 5 출력


/* 
// 1, 3, 5, 7을 의도한 코드. 그러나...
// ⚠️ 무한루프! 왜일까요?
let x = 0;
while (x < 14) {
    if (x % 2 === 0) continue;
    if (x > 7) break;
    console.log(x++);
}
*/

// 짧게 짠 수정 코드
/* let x = 0;
while (x < 14) {
    if (x++ % 2 === 0) continue;
    if (x > 8) break;
    console.log(x - 1);
} */
// 짧긴 하지만 의도를 잘 파악하기 어려움

// 가독성 위주로 짠 코드(살짝 오바)
// 코드에 의도가 드러나도록
/* let x = 0;
while (x < 14) {
    const toContinue = x % 2 === 0;
    const toBreak = x > 7;
    const xNow = x++;
    // 모두 상수에 저장해서 사용

    if (toContinue) continue;
    if (toBreak) break;

    console.log(xNow);
} */

// 더 짧고 직관성을 유지한 코드 예시
/* let x = 0;
while (x < 14) {
    const xNow = x++;
    // 필요한 값만 상수에 넣어주기
    if (xNow % 2 === 0) continue;
    if (xNow > 7) break;

    console.log(xNow);
} */

let x = 12;

do {
    console.log(x++);
} while (x < 10);
 // 일단 수행한 후 조건 평가
 // x가 12로 10을 넘어 조건에 해당되진 않지만 12는 한번 출력됨.