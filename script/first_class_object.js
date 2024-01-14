// 일급 객체
// 함수를 변수와 같이 다루는 언어(함수를 변수나 상수의 값과 같이 사용하는 언어)에 있는 개념
// 자바스크립트의 함수도 일급 객체 / 함수도 기본적으로 객체임

// ⭐️ 함수의 자료형
function addNumbers(a, b) {
    return a + b;
}
console.log(typeof addNumbers);
// function
// 함수도 자바스크립트에서는 하나의 객체다!

// 일급 객체의 특성
/* 
1. 상수 또는 변수에 할당될 수 있음 (값으로 대입 가능)
2. 다른 함수에 인자로 전달 가능
3. 다른 함수의 결과값으로서 반환될 수 있음
4. 함수도 객체와 배열처럼 참조타입
*/

// 1. 할당

function isOddNum(number) {
    console.log(
        (number % 2 ? '홀' : '짝') +
        '수입니다.'
    );
    return number % 2 ? true : false;
};

const checkIfOdd = isOddNum; // 뒤에 괄호 없음 유의
console.log(checkIfOdd(23));

// 대체되어 들어갈 수 있음
let x = 7,
    y = 3;

let func1 = (a, b) => a + b;
let func2 = (a, b) => a - b;
console.log(func1(x, y), func2(x, y));

func1 = func2
console.log(func1(x, y), func2(x, y));


// 객체와 배열의 값으로도 할당 가능
/* let person = {
    name: '홍길동',
    age: 30,
    married: true,
    introduce: function (formal) {
        return formal ?
            '안녕하십니까. 홍길동 대리라고 합니다.' :
            '안녕하세요, 홍길동이라고 해요.';
    }
};

console.log(person.introduce(true));
console.log(person.introduce(false)); */

let arithmetics = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
    (a, b) => a / b
];

for (arm of arithmetics) {
    console.log(arm(5, 3));
}


// 객체의 다른 프로퍼티에 접근
let person = {
    name: '홍길동',
    age: 30,
    married: true,
    introduce: function () {
        return `저는 ${this.name}, ${this.age}살이고 ` +
            `${this.married ? '기혼' : '미혼'}입니다.`;
    }
}

console.log(person.introduce());

// 객체 리터럴의 프로퍼티로는 this를 사용하는 화살표 함수는 권장하지 않음.


// 함수가 다른 함수를 인자로 전달받을 수 있음
// 전달받는 함수: 고차 함수
// 전달되는 함수: 콜백 함수

let list = [1, 2, 3, 4, 5];

function doInArray(array, func) {
    for (item of array) {
        func(item);
    }
}

// console.log - console이란 객체에서 log란 키에 할당된 함수
doInArray(list, console.log);

// 익명함수
function doNTimes(func, repeat, x, y) {
    let result = x;
    for (i = 0; i < repeat; i++) {
        result = func(result, y);
    }
    return result;
}

console.log(
    doNTimes((x, y) => x * y, 3, 5, 2),
    doNTimes((x, y) => x / y, 3, 5, 2),
);

// calculate
/* const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

// evaluate
const isOdd = (number) => !!(number % 2);
const isPositive = (number) => number > 0;

function calcAndEval(calc, eval, x, y) {
    return eval(calc(x, y));
}

console.log(
    calcAndEval(add, isOdd, 5, 7),
    calcAndEval(subtract, isPositive, 5, 7),
    calcAndEval(multiply, isOdd, 5, 7)
); */

// 여러 함수 조합하기
// 함수형 프로그래밍에 유용하게 사용됨

function getIntroFunc(name, formal) {
    return formal ?
        function () {
            console.log(`안녕하십니까, ${name}입니다.`);
        } : function () {
            console.log(`안녕하세요~ ${name}이라고 해요.`);
        }
}

const hongIntro = getIntroFunc('홍길동', true);
const jeonIntro = getIntroFunc('전우치', false);

hongIntro();
jeonIntro();

// 필요에 따라 함수를 생성해서 사용 가능

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

// 함수를 제조하는 함수
// x,y를 사용해서 계산 순서를 정하는 함수
function comb3ArmFuncs(armFunc1, armFunc2, armFunc3) { // 함수 3개가 들어감
    return (x, y) => armFunc3(armFunc2(armFunc1(x, y), y), y);
}

const add_mul_sub = comb3ArmFuncs(add, mul, sub);
const mul_add_div = comb3ArmFuncs(mul, add, div);
const div_add_mul = comb3ArmFuncs(div, add, mul);

// 커링 !!어려움
// 기존의 코드
function addMultSubt(a, b, c, d) {
    return (a + b) * c - d;
}

const addMultSubt2 = (a, b, c, d) => (a + b) * c - d;

console.log(
    addMultSubt(2, 3, 4, 5),
    addMultSubt2(2, 3, 4, 5),
);

// ⭐ 커링으로 작성된 함수
function curryAddMultSubt(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return (a + b) * c - d;
            }
        }
    }
}

const curryAddMultSubt2 = a => b => c => d => (a + b) * c - d;

// 이런식으로 작성하는 이유
// 하나의 함수는 한 가지 일만 하도록 만들어야 좋은 함수임
// 하나의 함수가 여러 일을 수행하면 이후 코드를 수정하기 복잡해짐
// 함수는 객체로 사용될 수 있는 일급 객체인 점을 활요해서 각자 하나의 일을 하는 여러 함수들의 조합을 사용하는 것이 좋다.