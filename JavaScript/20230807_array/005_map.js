// map
// 면접 질문에서도 많이 나옵니다!
// 교과서에서 보는 map의 용도와
// 실무에서 사용하는 map 의 용도가 조금 다릅니다.

// map의 형태
[1,2,3].map((value, index, arr) => {
    console.log(value, index, arr)
    return value
})



// 교재에는 주로 아래와 같이 써 있습니다.
[1,2,3].map(v => {
    return v**2
})

[1,2,3,4].map(v => {
    return v**3
})

// forEach 와 차이점
// 1. forEach 는 return 이 없습니다.
// 2. map 은 새로운 배열을 만들어 retrun 하고,
//    forEach 는 원본 배열을 만들지 않고 순회 돌며 실행만 않는다.

// forEach 의 경우 1부터 100까지 더하는 코드
let sum = 0
Array(100).fill(0).forEach((v,i) => {
    sum += i + 1
})

// map을 사용해서 1부터 100까지 더하는 코드
let sum = 0
Array(100).fill(0).map((v,i) => i)

[1,2,3,4].map(v => 'hello world')
// 1. v는 1,2,3,4 입니다. index, arr 는 들어지가 않습니다.
// 2. return 은 'hello world'
// ['hello world','hello world','hello world','hello world']

[1,2,3,4].map(v => 'hello' + v)
// ['hello1','hello2','hello3','hello4']

[1,2,3,4].map((v,i) => 'hello' + (i+1))
// ['hello1','hello2','hello3','hello4']

[1,2,3,4].map((v,i) => 'hello' + i)
// ['hello0','hello1','hello2','hello3']

let data = [1,2,3,4]
data.map(v => 'hello' + v)
data // 원본은 수정되지 않습니다.

// 같은 코드 1
[1,2,3,4].map(v => 'hello' + v)

// 같은 코드 2
function 함수(v) {
    return 'hello' + v
}
[1,2,3,4].map(함수)

// 같은 코드 3
[1,2,3,4].map(function (v){
    return 'hello' + v
}) 

// 같은 코드 4
[1,2,3,4].map((v) => {
    return 'hello' + v
})