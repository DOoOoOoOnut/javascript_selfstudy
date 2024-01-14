let a = 1;
let b = 2;

{
    a = 3;
    let b = 4;

    console.log(a, b); // 3,4
}

console.log(a, b); // 3, 2

//  어떤 값이 출력될까요?

const score = 85;

if (score>=90) {
    console.log('A');
}else if (score>=80){
    console.log('B');
}else if (score>=70){
    console.log('C');
}else if (score>=60){
    console.log('D')
}else {
    console.log('F');
};

// 3
const food = 'pasta'; // risotto, burger, suchi 등으로 변경

switch (food) {
    case 'pasta': 
    case 'pizza': 
    case 'risotto': 
        console.log('italian')
    break
    case 'burger':
        console.log('American')
    break
    default :
        console.log('Unknown')
};

//4

for (let i = 1; i<=20; i++){
    if(i%2 == 0){
        console.log(i)
    }
};

console.log('----------')
//5
const numbers = [1, 2, 3, 4, 5];
let add = 0
//  배열 안의 숫자를 모두 더하는 코드를 작성해보세요.

/* console.log(numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4]) */
for (let num of numbers){
    add += num
}
console.log(add);

//6
let user = {id: 1, name: 'Alice', job: 'Developer'};

//  for문을 사용해서 name을 제외한 정보들을 출력하는 코드를 작성해보세요.

//  목표 결과:
//  id: 1
//  job: Developer

for (let i in user){
    if (i == 'name') continue
    console.log(i+':'+user[i]);
}

for (let key in user) {
    if (key !== 'name') {
        console.log(key + ': ' + user[key]);
    }
}

// 7

let count = 5;
let q
//  count가 0이 될 때까지, 해당 값에 10을 곱한 값을 출력하는 코드를
//  while문으로 작성해보세요.

while(count){
    console.log(count--*10)
}