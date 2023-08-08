// 애러가 발생하지 않는 코드
// 무결한 코드
// 실무 DB 에 저장해두세요.
data.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0)))

let data = ['a', 'z', 'b', 'e'];
data.sort();

// 사전식 정렬이어서 아래와 같은 값은 정렬이 되지 않습니다!
let data = [1, 11, 2, 111, 22];
data.sort();

// 지금 이해라고 드린 코드는 아니고 실무 DB로 가지고 있으시라고 드리는 코드 입니다.
data.sort((a,b) => (a<b ? -1 : (a>b ? 1:0))) // 오름차순
data.sort((a,b) => (a>b ? -1 : (a<b ? 1:0))) // 내림차순

// 여러분이 자주 사용하는 코드
let data = [1, 11, 2, 22];
data.sort((a,b) => (a-b)); // 오름차순
data.sort((a,b) => (b-a)); // 내림차순

// 원리
let test = [13, 9, 10, 2];

test.sort((a,b) => {
    console.log(a,b)
})
// 출력해보면 a,b 의 값이 순차적으로 들어갈 것 같지만 그렇지 않습니다.
// b -> a 순서로 요소가 들어감 !!!
// 9 13
// 10 9
// 2 10

let test = [13, 9, 10, 2];
test.sort((a, b) => {
    console.log(a,b)
    console.log(a - b)
    // 0 보다 작은 경우 a를 b보다 낮은 색인으로 정렬합니다.
    // 즉, a 가 먼저 옵니다.
})

let test = [13, 9, 10, 2];
test.sort((a, b) => {
    return a - b; // 작은 값이 앞으로 간다 => 오름차순
})