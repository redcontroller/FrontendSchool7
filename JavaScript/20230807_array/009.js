// filter
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter((v) => v % 2 === 0);

// filter 는 return 값이 true 인 것만 모아서 새로운 배열을 만듭니다.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter(v => {
    return true
})
result

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter(v => {
    return false
})
result


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter(v => {
    return v > 5
})
result

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter(v => {
    return v % 2 !==0
})
result

// filter 는 메서드 체이닝으로 많이 사용됩니다.

// reduce
[10,20,30,40,50].reduce((a,c)=> a+c, 0) // 암기코드 (초기값 0, 순회 못 돌면 0)
[10,20,30,40,50].reduce((a,c)=> a+c) // 특정 케이스에서 에러나는 코드
[].reduce((a,c) => a + c) // error
[10,20,30,40,50].reduce((a,c) => {
    console.log(a,c)
    return a + c
})

// 파라미터 이름은 자유롭게 지정할 수 있습니다.
// forEach, map, filter, reduce 등의 메서드 모두 마찬가지 입니다.
[10,20,30,40,50].reduce((ho, jun) => {
    console.log(ho, jun)
    return ho + jun
})

// includes
const arr1 = ['hello', 'world', 'hojun']
arr1.includes('world')

const arr1 = ['hello', 'world', 'hojun']
arr1.includes('leehojun')

const arr1 = ['hello', 'world', 'hojun']
arr1.includes('jun') // false

// join(***)
let arr1 = ['hello', 'world', 'hojun']
arr1.join('!')

let arr1 = ['hello', 'world', 'hojun']
arr1.join(' ')

let arr1 = ['010', '5044', '2903']
arr1.join('-')

let arr = ['안녕하세요.', '제 이름은 이호준입니다.', '저는 제주도에 살아요']
arr.join('\n')
console.log(arr.join('\n'))

let arr = ['안녕하세요.', '제 이름은 이호준입니다.', '저는 제주도에 살아요']
arr.join('<br>')
console.log(arr.join('<br>')) // innerHTML로 하면 <br> 이 개행됩니다.
document.write(arr.join('<br>'))

// reverse
[10, 20, 30].reverse() // [30, 20, 10]
