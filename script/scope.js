{
    console.log('블록문');
}

// block문은 scope를 생성한다

/* {
    const x = 'Hello';
    let y = 'world!';
    console.log(x, y);
}

console.log(x);
console.log(y); */
// 블록 안에서 선언된 변수,상수를 밖에서 사용불가
// 단, var로 선언한 변수는 선언 가능

/* let x = 1;

{
    let y = 2;
    console.log(x, y);
}
console.log(x);
console.log(y); */
// 밖에서 선언된 변수는 안에서도 사용가능

const xx = 0;
let yy = 'Hello!';
console.log(xx, yy);

{
    const xx = 1; // 💡 블록 안에서는 바깥의 const 재선언 가능
    let yy = '안녕하세요~';

    console.log(xx, yy);
    // ⚠️ const, let을 빼먹으면 재선언이 아니라 바깥것의 값을(변수면) 바꿈!
}

console.log(xx, yy);
// 동일 스코프 내에서는 재사용이 불가하지만, 밖에서 다시 선언 가능!


// 스코프 체인
// 후입선출 : 나중에 온 것이 먼저 나감
// 체이닝 : 블럭 인에 해당 변수/ 상수가 없으면 바깥쪽으로 찾아 나감
let a = 0;
let b = 1;
let c = 2;
console.log('시점 1:', a, b, c);

{
    let a = 'A';
    let b = 'B'
    console.log('시점 2:', a, b, c);

    {
        let a = '가'
        console.log('시점 3:', a, b, c);
    }

    console.log('시점 4:', a, b, c);
}

console.log('시점 5:', a, b, c);

/* 
<전역 변수/상수>
* 프로그램 종료시 소멸
-> 데이터 영역에 위치
-> 사용을 최소화하면 메모리 절약 가능
-> 사용을 최소화해야 예기치 못한 오류 줄일 수 있음
<지역 변수/상수>
* 블록 실행 종료시 소멸
-> 스택 영역에 위치
-> 해당 블록 내에서만 접근 가능
-> 가능한 사용할 블록 내에서 선언하면 메모리 절약 가능
*/