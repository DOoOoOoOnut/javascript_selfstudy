const a = 5;
const b = "3";

const c = a + b; 

console.log(c);

//  어떤 값이 출력될까요? 53

const hour = 2;
const minute = 30;

const sentence = `총 경과시간은 ${hour*60+minute}분입니다.`

//  '총 경과시간은 ~분입니다.'와 같은 문자열이 되도록
//  템플릿 리터럴을 사용해서 작성해보세요.

console.log(
    1 == '1',
    1 === '1',
    1 != '1',
    1 !== '1'
);

// 어떤 값이 출력될까요? true, false, false, true

let x = 3;

console.log(x++, ++x, x--, --x);

// 어떤 값이 출력될까요? 3, 5, 5, 3

let x = 5;
let y = 10;
let z = x > y && y++;

console.log(y, z);

//  어떤 값이 출력될까요? 10, false

const coffeeBird = [{
    pageNum:500,
    sale:true,
    type:['fantasy','sf','thriler']
}]

let a = 10;
let b = a;
a = 20;
// a= 20 b=10
let c = { value: 10 }; 
let d = c; //value:10
c.value = 20;

console.log(a, b, c.value, d.value);
// 20, 20, value:20, value:20

//  어떤 값이 출력될까요?