// dom에서 path 찾기
const path = document.querySelector('#path');
const openBtn = document.querySelector('.btn-open');

// console.log(openBtn);

// path의 전체 길이 구하기
const pathLength = path.getTotalLength();
// console.log(pathLength); // 2507.61328125

// dash의 길이와 공백
// path.computedStyleMap.strokeDasharray = pathLength + " " + pathLength;
path.style.strokeDasharray = `${pathLength} ${pathLength}`; // `길이 공백길이`


// dash 를 어디서부터 그릴지
path.style.strokeDashoffset = pathLength;


// console.log(document.documentElement.scrollTop);
// console.log(innerHeight); // viewport 스크린 height
// console.log(outerHeight); // window 창 테두리까지 height

console.log('clientHeight:', document.documentElement.clientHeight);
console.log('clientHeight:', document.documentElement.scrollHeight);

function scrollHandler() {
    // 현재 스크롤의 위치
    const scrollTop = document.documentElement.scrollTop;
    // console.log(scrollTop);

    // 전체 스크롤의 길이
    const scrollHeight = document.documentElement.scrollHeight;

    // 뷰포트의 높이
    const clientHeight = document.documentElement.clientHeight;

    // 스크롤의 위치 => % 0 ~ 1 의 값을 가짐
    // 전체 스크롤 영역 높이에서 뷰 포트 크기만큼을 뺴줌
    const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
    // console.log(scrollTop, clientHeight); // 제일 하단에서 viewport 높이가 빠졌있다.
    // console.log(scrollPercentage); // % 값 확인
    const drawLength = pathLength * scrollPercentage;
    // console.log(drawLength);

    // pathLength -> 0
    path.style.strokeDashoffset = pathLength - drawLength;

    // button opacity 조절 0 ~ 1
    openBtn.style.opacity = scrollPercentage;

    if(scrollPercentage > 0.8) {
        openBtn.disabled = false;
    } else {
        openBtn.disabled = true;
    }
}

window.addEventListener('scroll', scrollHandler);