console.log('Hello World!');
console.log(1);
console.log(true);
console.log({name: '홍길동', age: 20, married: false});
console.log('Hi!', 100, true, [1, 2, 3]);
// 흔히 활용되는 console 기능들
console.log('로그 - 기본적인 출력');
console.info('로그 - 기능적으로는 log와 같음. 사용하기에 따라 용도 구분 가능');
console.warn('경고 - 문제가 될 수 있는 부분');
console.error('오류 - 에러 발생 상황');

// 변수
let x;
console.log(x);
x = 1;
console.log(x);

// 기존 위치에 새 값을 넣는 게 아니라 메모리상 가리키는 위치가 바뀜
// 1이라는 데이터를 가진 수백개의 변수가 있어도 메모리가 수백개가 있는 게 아니라 하나의 데이터를 가리키는 것임

//상수
const PI = 3.14;
console.log('원주율:', PI);

// 변하지 않는 값
// 값이 변하지 않는 데이터는 상수로 선언하기
// 주로 대문자로 작성함

// let a = 1;
// let b = 2;
// ...

let a = 1, b = 2, c = 3;
const X = 4, Y = 5, Z = 6;

console.log(a, b, c);
console.log(X, Y, Z);

// 동시에 선언도 가능

const 이름 = '홍길동';
let 나이 = 20;

console.log(이름, 나이);
// 한글도 가능
// 요즘에는 종종 사용하는 회사 있음
// 단, 문제 일으킬 가능성 있기 때문에 주의

// 효율적으로 메모리 공간을 사용하기 위해 변수와 상수 지정
// 효율적으로 사용하기 위한 지식과 노력 필요

let word = '안녕하세요~\t\t반갑습니다!\n저는 \\홍길동\\입니다.';
console.log(word);

// ⭐️ 이스케이프 표현(escape sequence)
let word1 = '작은따옴표 안에 \'작은따옴표\' 사용';
let word2 = "큰따옴표 안에 \"큰따옴표\" 사용";
console.log(word1, word2);
// let longName = '김수한무 거북이와 두루미 삼천갑자 동방삭 치치카포 사리사리센타 워리워리 세브리깡 무두셀라 구름이 허리케인에 담벼락 담벼락에 서생원 서생원에 고양이 고양이엔 바둑이 바둑이는 돌돌이';

let longName = '김수한무 거북이와 두루미 \
삼천갑자 동방삭 치치카포 사리사리센타 \
워리워리 세브리깡 무두셀라 구름이 \
허리케인에 담벼락 담벼락에 서생원 \
서생원에 고양이 고양이엔 바둑이 \
바둑이는 돌돌이';

// ⚠️ 줄바뀜 되는 것이 아님
// 큰따옴표도 마찬가지
console.log(longName);

