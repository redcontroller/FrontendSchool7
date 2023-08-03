// 별표 ****

// 1. 비교 연산을 했을 때
let x = 3
let y = 5
console.log(x > y)

// 2. 논리연산을 했을 때 각 비교값이 true 나 false 인 경우
// (true false 가 아닌 경우 단락회로평가가 일어남)
let x = true
let y = false
console.log(x && y)

// 3. true 나 false 로 평가되는 것들
// if(value) {
//     //value가 true 일 때 실행
//     //그렇다면 어떤 value 가 true 일까?
// }

if(Boolean('hello')){
    console.log('실행되었음!') // 실행되었음이 출력되는가?
}

if('hello'){
    console.log('실행되었음!') // 실행되었음이 출력되는가?
}

if(''){
    console.log('실행되었음!') // 실행되었음이 출력되는가?
}

x = 'hello' // hello 를 가리키고 있음
x = '' // 가리키는게 바뀌어씀
Boolean('') //false
Boolean(NaN) //false
Boolean(undefined) //false
Boolean(null) //false
Boolean([]) //true
Boolean({}) // true
Boolean(0) //false
Boolean('hello') //true
Boolean(' ') //true
Boolean(1) //true
Boolean(-1) //true
Boolean(100) //true
// !!null //false
// !!'hello'

// 4. javascript 에서 나를 힘들게하는 true, false
x = [1,2,3]
x.pop()
x.pop()
x.pop() // js: x가 가리키고 있는 값은 변한적이 없는데 true, false 로 바뀌는 것은 옳지 않다.

Boolean([1,2,3]) // true
Boolean([]) // true
Boolean({ 'one':1 }) // true

null == undefined // true
null > undefined // false, 다른 비교도 false
// null < 100 // true
// null > -1 // true
// null < 2 // true
// null == 0 // false
undefined < 100 // false, 숫자와 비교는 다 false
undefined == 100 // false
