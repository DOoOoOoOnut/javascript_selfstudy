// 원시 자료형

let number1 = 1;
number2 = number1;
number2 = 2;

console.log(number1, number2);
// 데이터를 가리키는 단계가 하나임
// num1 -> 1 , num -> 2

const obj1 = {
    num: 1,
    str: 'ABC',
    bool: true
};
// obj1 -> {num: 1, str: 'ABC', bool: true}

const obj2 = obj1; // 
// obj2 -> {num: 1, str: 'ABC', bool: true}

obj2.num = 2;
// obj2 -> {num: 2, str: 'ABC', bool: true}
// obj 1,2가 가리키는 {num: 1, str: 'ABC', bool: true}의 num 값이 2로 다시 선언됨. 즉, obj1,2의 값이 모두 변함. 
// 참조 데이터를 변수에 넣을 때는 그 값 자체가 대입된다기 보다는, {num: 2, str: 'ABC', bool: true}의 값을 가지고 있는 데이터 꾸러미의 주소를 변수에 대입하는 것과 마찬가지임.
// 이 데이터 꾸러미의 주소를 임의로 ###이라고 한다면, obj2.num = 2;라는 명령어로 해당 주소에 있던 num의 값이 2로 변함.
// 그러므로 ###를 가리키는 obj1,2모두 값이 변함.
// 객체, 배열 등 참조형 데이터 모두 이런 경우에 해당됨.

console.log(obj1, obj2);