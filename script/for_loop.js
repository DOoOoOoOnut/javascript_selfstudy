// for문 -> 어떤 조건이 만족될 때까지 반복실행

// 💡 변수이므로 let이 사용됨
for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (let i = 0; i < 5;) {
    console.log(i++); // ++i로 바꿔볼 것
}

for (let i = 10; i >= 0; i -= 2) {
    console.log(i);
}

for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

for (let x = 0, y = 10; x <= y; x++, y--) {
    console.log(x, y);
}
console.log('-----------')
// x, y가 번갈아가면서 증가되는 for문
for (
    let x = true, y = 0, z = 0; y * z < 10; x = !x, x ? y++ : z++
) {
    console.log(y, z);
}

// 무한루프
// 1. for문에 조건이 없을 경우 
// 2. i++이 없거나 i를 줄여주는 메서드가 실행되어 i의 값에 변화가 없을 경우
// 무한으로 실행됨
// 실행시 브라우저가 얼어버림 주의

// 객체와 배열의 for문
/* const lunch = {
    name: '라면',
    taste: '매운맛',
    kilocalories: 500,
    cold: false
}

for (const key in lunch) { // 💡 변할 것이 아니므로 const 사용
    console.log(key, ':', lunch[key])
} */

const profile = {
    name: '이로운',
    mbti: 'istj',
    age: 28,
}

for (const a in profile) {
    console.log(a, ':', profile[a])
}


// 배열의 for of문
// 정확히는 이터러블에 사용됨
const list = [1, '가나다', false, null];

for (const item of list) {
    console.log(item);
}
for (const el in list) {
    console.log(el);
} // 값 자체가 아니라 키값이 나오게 됨

// 문자열 역시 이터러블이므로 사용 가능
for (const letter of '안녕하세요~') {
    console.log(letter);
}

// for .. of 문의 장점
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ⚠️ 변수(i)를 사용하므로 위험요소 존재
for (let i = 0; i < numbers.length; i++) {
    // 이곳에 i를 변경하는 코드가 들어간다면...
    console.log(numbers[i]);
}
// ⭐️ 변수를 사용하지 않음으로 보다 안전
for (const num of numbers) {
    console.log(num);
}

//다른 예시
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [];

for (let num of numbers1) {
    num++; // ⚠️ 복사된 값. let 사용 주목
    numbers2.push(num + 1);
}
console.log(numbers1, numbers2);
// 실제 nimber1 배열의 값에는 영향을 미치지 않는다

for (let i = 0; i < numbers1.length; i++) {
    numbers1[i]++; // ⚠️ 실제 값에 인덱스로 접근 - 원본 배열의 내용 변경
}
// 원본 배열의 내용이 변경되므로 위험
console.log(numbers1, numbers2);

// continue 어떤 루프를 건너뛰어야 할 때 사용
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) continue;
    console.log(i);
}
// 3,6,9만 제외하고 출력

console.log('for 루프 종료');

// break 블록을 종료하고 바로 출력
for (let i = 1; i <= 10; i++) {
    if (i === 5) break;
    console.log(i);
}

console.log('for 루프 종료');

//lable

outer:
    for (let i = 1; i < 10; i++) {

        inner: for (let j = 1; j < 10; j++) {

            if (j % 2 === 0) continue inner;
            if (i * j >= 30) continue outer;

            if (j > 8) break inner;
            if (i - j > 7) break outer;

            console.log(i, j, i * j);
        }
    }