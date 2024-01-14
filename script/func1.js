function 함수명(입력값) {
    // 수행할 일
    return 반환값 // 있을 시
}

/* 함수명(입력값); */
// 함수 사용 전
function allArithemics(x, y) {
    console.log(`${x} + ${y} = ${x + y}`);
    console.log(`${x} - ${y} = ${x - y}`);
    console.log(`${x} * ${y} = ${x * y}`);
    console.log(`${x} / ${y} = ${x / y}`);
}

let a = 3,
    b = 4;
allArithemics(a, b);

let c = 10,
    d = 2;
allArithemics(c, d);

let e = 7,
    f = 5;
allArithemics(e, f);

//한 번 이상 사용될 수 있는 작업을 함수로 등록해두면 재사용 가능


// input을 받아 output을 반환하는 것(return)
function add(x, y) {
    return x + y; // ⭐️ 값을 반환
}

let z = add(2, 3);

console.log(z);

console.log(add(4, 5));

console.log(
    add(add(6, 7) /* 13 */ , add(8, 9) /* 17 */ )
); // 30

function isOdd(x) {
    return !!(x % 2);
} // 함수 isodd는 x에 들어가는 값을 2로 나눠 그 값을 boolean으로 반환한다.

let num = 12;

console.log(
    `${num}(는)은 ${
        isOdd(num) ? '홀' : '짝'
    }수입니다.`
); // 12/2는 0이므로 false 반환, 3항연산자의 뒷부분인 '짝'이 출력된다.

function add(x, y) {
    // x, y를 인자 또는 매개변수(parameter)라 부름
    return x + y;
}

// a, b를 인수(argument)라 부름


let currentTemp = 24.5;

/* function logCurrentTemp() {
    console.log(`현재 온도는 섭씨 ${currentTemp}도입니다.`);
}

console.log('반환값:', logCurrentTemp()); */
// 함수는 외부 상황에 영향받는 것이 아니라 오직 인자로 받는 값으로 일관성있게 동작하도록 해야 안정적인 코드임. 

//수정
function logCurrentTemp(temp) {
    console.log(`현재 온도는 섭씨 ${temp}도입니다.`);
}

console.log('반환값:', logCurrentTemp(currentTemp));

// 함수는 실행문보다 나중에 정의하는 것이 가능
// 변수나 상수는 불가능! (var 제외)
console.log(add(2, 7));

function add(x, y) {
    return x + y;
}
//function으로 정의한 함수는 위치 상관없이 먼저 읽고 실행됨


// 함수 선언방법 세가지
//1. function
function add(x, y) {
    return x + y;
}

console.log(add(2, 7));

//2. 상수나 변수에 함수 대입 (함수도 값!)
const subt = function (x, y) {
    return x - y;
}

console.log(subt(7, 2));

function add(x, y) {
    return x + y;
}

console.log(add(2, 7));

// 💡 기존의 함수를 재정의하는것도 가능
add = function (x, y) {
    console.log(`${x}와 ${y}를 더합니다.`);
    console.log(`결과는 ${x + y}입니다.`);
    return x + y;
}

console.log(add(2, 7));

//3. 화살표 함수

// 한 줄 안에 값만 반환시
/* const mult = (x, y) => x * y;

console.log(mult(2, 7)); */

// 두 줄 이상의 작업이 있을 시 블록 사용
const mult = (x, y) => {
    console.log(`${x}와 ${y}를 곱합니다.`);
    console.log(`결과는 ${x * y}입니다.`);
    return x * y;
};

console.log(mult(2, 7));

// 인자가 하나일 때는 괄호 없이 선언 가능
const pow = x => x ** 2;
console.log(pow(3));

// 단, 2,3번 방법으로 선언한 함수는 함수 생성 시점이 다르기 때문에 호이스팅되지 않음.
// 1번 방법으로 정의된 함수는 엔진의 코드 실행 이전에 미리 생성됨.