const open = true;

// 한줄 코드
if (open) console.log('영업중입니다.');

// 여러줄 코드 - 블록문 사용
if (open) {
    console.log('환영합니다.');
    console.log('즐거운 쇼핑하세요!');
}

// if ~ else 문
/* const x = 20;

if (x % 2) {
    console.log('홀수입니다.');
} else {
    console.log('짝수입니다.');
} */

// 증첩 사용
// if문 안에 if문이 들어갈 수 있다
/* const x = 22;

if (x % 4) {
    if (x % 2) {
        console.log('홀수입니다.');
    } else {
        console.log('짝수입니다.');
    }
} else {
    console.log('4의 배수입니다.');
} */

// else if문
/* const x = 21;

if (x % 2) {
    console.log('홀수입니다.');
} else if (x % 4) {
    console.log('짝수입니다.');
} else {
    console.log('4의 배수입니다.');
} */

// else가 들어가면 가독성이 좋지 않아 아래 방법 권장

function evalNum() {
    const x = 21;

    if (x % 2) {
        console.log('홀수입니다.');
        return;
    }

    if (x % 4) {
        console.log('짝수입니다.');
        return;
    }

    console.log('4의 배수입니다.');
}

evalNum();
console.log('블록문 바깥');

const qa = prompt('이동 방향을 입력하세요','왼쪽,오른쪽,가운데 중 하나로 입력')
// 논리연산자 활용 조건식 단축하기
// 비교 && 비교 = 둘 다 참이어야 참
// 비교 || 비교 = 둘 중 하나만 참이어도 참 

if(qa=='왼쪽'||'오른쪽'||'가운데'){
    alert(`${qa} 한 칸 이동`)
}

// 논리 연산자를 사용해서도 작성 가능