function test(a,b,c) {
    console.log(a,b,c)
    return a+b+c
}

// 이 2개는 다른 언어에서는 error 가 납니다.
test(10,20) // 모자라면 undefined 로 채워짐
test(10, 20, 30, 40) // 넘기면 제대로 작도합니다.

function test(a=10, b=20, c=30) {
    console.log(a,b,c)
    return a+b+c
}

test(100, 200)
test()

// 혼란의 도가니
test(a=100, b=200) // 330
test(b=100, c=200) // 왜 330인가요?
// test(100, ,200) // error
// JS 는 값을 순서대로 넣는다.

// 이것을 해결하기 위해 RORO 로 기법이 등장합니다.
// RORO: 객체로 받고 객체로 반환한다. (Receive and object, return an object)

function mob(scene, x, y, texture, animKey, initHp, dropRate) {
    // scene: 스토리신, 플레이신, 엔딩신
    // x, y: 몹의 위치
    // texture: 몹의 이름
    // animKey: 몹의 애니메이션
    // initHP: 몹의 체력
    // dropRate: 몹이 아이템을 떨어뜨리는 확률
    return
}

// 위 문제와 아래 문제를 해결하기 위해 RORO 을 사용할 수 있습니다.
// mob('플레이신', 100, 200, '슬라임', '슬라임_애니', 100, 0.1)
// mob('플레이신, ...뭐가 들어가야하지?')

function player({scene, x, y, texture, animKey, initHp, dropRate}) {
    console.log(scene, x, y, texture, animKey, initHp, dropRate)
    return
}

// 아래와 같이 작성되기 때문에 2번 문제 해결, 순서도 상관없습니다.
player({
    scene: '플레이어신',
    x: 100,
    y: 200,
    texture: '슬라임',
    animKey: '슬라임_애니',
    initHp: 100,
    dropRate: 0.1
})

// 아래와 같이 작성되기 때문에 1번째 문제 해결
// 값 안넣으면 undefined 가 들어감
player({
    scene: '플레이어신',
    y: 200,
    initHp: 100,
})

// 기본값 설정하는 방법
function player ({scene = '플레이신', x = 0, y = 0, texture, animKey, initHp, dropRate = 0.1 }) {
    console.log(scene, x, y)
}

player ({
    initHp: 100,
})