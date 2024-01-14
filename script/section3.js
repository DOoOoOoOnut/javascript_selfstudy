// 1. 쉼표 연산자

/* let x = 1, y = 2, z = 3;
console.log(x, y, z);

// 마지막으로 실행한 것 반환
console.log(
  (++x, y += x, z *= y)
); */ // 12
// 1. x = 2
// 2. y = 4 // 변수 자체 데이터도 변경
// 3. z = 12 // 변수 자체 데이터도 변경
// 12를 반환하고 최종 변수 데이터도 위와 같이 변환
/* console.log(x,y,z); */ // 2, 4, 12

// 2. ?? null 병합 연산자
/* let x;
x ?? console.warn(x, 'x에 값이 없습니다.');
// 출력

x = 0;
x ?? console.warn(x, 'x에 값이 없습니다.'); */
//출력x

/* x = null;
x ?? console.warn(x, 'x에 값이 없습니다.');
//출력

let a = false;
let b = 0;
let c = '';
let d = null;
let e;

console.log(
    a ?? '기본값',// false
    b ?? '기본값', // 0
    c ?? '기본값', // ''
    d ?? '기본값', // '기본값'
    e ?? '기본값', // '기본값'
); */

// ?? => null, undefined만 반환하는 연산자

let baby1 = '홍길동';
let baby2; // 아직 이름을 짓지 못함

const nameTag1 = baby1 ?? '1번 아기';
// baby1의 데이터가 string이기 때문에 그대로 출력
const nameTag2 = baby2 ?? '2번 아기';
// baby2의 데이터가 undefined기 때문에 '2번 아기'로 출력

console.log(nameTag1, nameTag2);
// 홍길동 , 2번 아기

// 3. 병합 할당 연산자들

let x = 0;
let y = '';
let z = null;

x ||= 100; // x는 falsy이므로 뒤를 읽음
y &&= '있어야 바뀜'; // y는 falsy므로 뒤를 읽지 않음, '' 그대로 출력. -> 만약에 글이 들어간다면? y가 truthy가 되므로 뒤를 읽음.
z ??= '기본값'; // z가 null이므로 값을 반환함.

console.log(x, y, z); // 100, '', 기본값