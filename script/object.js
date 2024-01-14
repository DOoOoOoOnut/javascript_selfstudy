// 참조 타입 데이터
// 객체

const person1 = {
    name: '김철수',
    age: 25,
    married: false,
};

console.log(typeof person1);
console.log(person1);

// 속성 접근방법
//1. 키.속성 -> 값 
console.log(
    person1.name,
    person1.age,
    person1.married
);
//2. 키.['속성'] -> 값
console.log(
    person1['name'], // 속성명을 string으로
    person1['age'],
    person1['married'],
);

console.log(person1.birthdate);
console.log(person1['job']);

// 특정 키 포함여부 확인
console.log(
    'age' in person1, // true
    'job' in person1 // false
);

// 특정 프로퍼티의 값 변경 
// 다시 선언
person1.age = 26;
person1['married'] = true

console.log(person1);

// 새 프로퍼티 추가
person1.job = 'developer';
person1['bloodtype'] = 'AB'

console.log(person1);

// Q. const로 지정했는데 어떻게 바뀌나?
// 새로운 데이터를 지정하는 것이 아니라 이미 지정된 데이터 안의 내용을 바꾸는 것이므로 가능함!

// 배열
// 기본적으로 객체임
// 객체에 어떤 특정 기능을 추가한 것을 배열이라고 함

const winners = [12, 592, 7, 48];
const weekdays = ['월', '화', '수', '목', '금', '토', '일'];

// 자료형에 관계없이 한 배열에 넣을 수 있음
const randoms = ['홍길동', -24, true, null, undefined];

console.log(typeof winners);
console.log(winners, weekdays, randoms);
// 결과가 객체처럼 프로퍼티(속성:값)으로 확인됨

// 값에 접근하기

// 특정 순서의 값에 접근하는 법 (0부터 시작)
console.log(winners[0], weekdays[6], randoms[3]); // 인덱스를 꼭 붙여줘야 한다
// 배열의 길이(요소의 갯수)를 얻는 법
console.log(winners.length, weekdays.length, randoms.length); // 4,7,5
// 마지막 요소 얻기
console.log(winners[winners.length - 1]);
// 0부터 시작하기 때문임

// 수정,추가하기
const numbers = [1, 2, 3];

// 특정 위치의 값 수정
numbers[2] = 5;

console.log(numbers); // 1,2,5

// 맨 끝에 값 추가
numbers.push(10); //마지막[3]에 10 추가됨

console.log(numbers); // 1,2,5,10

/* const winners = [12, 592, 7, 48];
console.log(winners[winners.length]); */

// 중첩 사용 가능
// 객체 안에 배열 가능!!!
const person2 = {
    name: '김달순',
    age: 23,
    languages: ['Korean', 'English', 'French'],
    education: {
        school: '한국대',
        major: ['컴퓨터공학', '전자공학'],
        graduated: true,
    }
};

console.log(person2.languages[2]);
console.log(person2.education.graduated);
console.log(person2.languages[1]);
console.log('----------')

// 객체와 배열을 이런 식으로 중첩 사용도 가능함
const groups = [
    [1, 2],
    [3, 4, 5],
    [6, 7, 8, 9]
];

const weapons = [{
        name: '롱소드',
        damage: 30,
        design: ['화룡검', '뇌신검']
    },
    {
        name: '활',
        damage: 12
    },
    {
        name: '워해머',
        damage: 48
    },
];

console.log(groups[1][2]); // 5
console.log(weapons[2].damage); //48
console.log(weapons[0].design[0]); //화룡검