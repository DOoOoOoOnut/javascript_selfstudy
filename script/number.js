// let x = 1 / 'abc';

// console.log(
//     x,
//     x == NaN,
//     x === NaN,
//     isNaN(x), // 숫자가 아닐 시 true
//     Number.isNaN(x) // 보다 엄격한 버전
// );

// 값 반환
/* let x = 10;
let y = x * 10;

console.log(y);
console.log(
    y + 1, // 덧샘
    y - 1, // 뺄셈
    y * 2, // 곱셈
    y / 5, // 나눗셈
    y % 3,  // 나머지
    y ** 2 // 제곱
);

// 문자열을 숫자로 변환 가능
console.log(
    +'100',
    -'100',
    +'abc' // 숫자로 변환될 수 없는 문자열
); */
// 💡 드 모르간의 법칙
let a = true;
// a = false;
let b = true;
// b = false;

console.log(
    !(a && b) === (!a || !b),
    !(a || b) === (!a && !b)
); // 💡 항상 true

// 단축평가
// &&은 둘다 true여야 true가 되므로 앞의 값이 false라면 뒤의 값을 출력하지 않는다. ( 아예 계산 안함)
// ||는 둘 중 하나라도 true라면 true이므로 앞의 값이 true라면 뒤의 값을 출력하지 않는다.
// 앞의 값에 간결한 코드 넣어 리소스 절약하기
let error = true;
// error = false;

// 앞의 것이 true일 때만 뒤의 코드 실행
error && console.warn('오류 발생!');

// 앞의 것이 false일 때만 뒤의 코드 실행
error || console.log('이상 없음.');

// error 변수에 에러의 상황을 만들어 두면 필요할 때만 뒤에 적힌 명령을 읽을 수 있음

// truthy
console.log(
    1.23 ? true : false,
    -999 ? true: false,
    '0' ? true : false,
    ' ' ? true : false,
    Infinity ? true : false,
    -Infinity ? true : false,
    {} ? true : false,
    [] ? true : false,
);
// 다 true

// ⚠️ true와 `같다`는 의미는 아님
console.log(
    1.23 == true,
    ' ' == true,
    {} == true
);
// 다 false

//falsy
console.log(
    0 ? true : false,
    -0 ? true : false,
    '' ? true : false,
    null ? true : false,
    undefined ? true : false,
    NaN ? true : false,
);
// 디 false

// 💡 어떤 값들은 false로 타입변환됨
console.log(
    0 == false, // true
    0 === false, // false
    '' == false,  // true
    '' === false //false 
);
// 0, 빈 문자열은 false로 변환

console.log(
    null == false,
    undefined == false,
    NaN == false,
);
// 다 false

/* let x = 0;
let y = 1;

x && x++;
y && y++;

console.log(x, y); */

/* let x = 2;
let y = 3;

console.log(
    x % 2 ? '홀' : '짝',
    y % 2 ? '홀' : '짝'
); */
// 삼항연산자를 활용한 홀짝 계산 방법

/* let x = '';
let y = '회사원';
let z = x || y;

console.log(z); // 회사원


x = x || '단기알바';
y = y || '단기알바';

console.log(x, y); */

// 한 번 부정
console.log(
    !1, !-999, !'hello', // false
    !0, !'', !null // true
);
// 반대인 bollean 값으로 변환됨

// ⭐️ 두 번 부정하여 해당 boolean값으로
console.log(
    !!1, !!-999, !!'hello', // true
    !!0, !!'', !!null // false
);

let x = 123;

console.log(
    'x는 홀수인가?',
    !!(x % 2) // true
);