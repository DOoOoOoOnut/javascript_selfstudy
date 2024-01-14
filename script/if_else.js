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