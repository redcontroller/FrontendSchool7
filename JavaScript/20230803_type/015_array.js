// array 에 여러가지 형태
let arr1 = [];
let arr2 = [1,2,3];
let arr3 = [[1,2,3],
            [4,5,6],
            [7,8,9]];
arr3[0] // [1,2,3]
arr3[1] // [4,5,6]
arr3[2] // [7,8,9]
arr3[1][2] // 6

// 이렇게 여러개의 타입이 혼합되어 쓰는 것을 권하지 않습니다.
// 이렇게 쓸 수 있지만, 평균 같은 연산이 불가능하기 때문이다.
let arr4 = ['leehojun', 10, 180]
arr4[0] // 'leehojun'
arr4[0][3] // h

// 2. array 에 길이 출력
let arr1 = [1,2,3]
arr1.length // 3
arr1.length = 100
arr1 // [1, 2, 3, empty × 97]
arr1[10] = null
arr1 // [1,2,3,empty x 7, null, empty x 89]

let arr2 = [[1,2,3],
            [4,5,6],
            [7,8,9]];
arr2.length // 3
att2.flat().length // 9

let arr3 = [[[10, 20], [10, [10, 20]], 3],
            [[10, 20], [10, [10, 20]], 6],
            [[10, 20], [10, [10, 20]], 9]]
arr3.flat()
arr3.flat().flat().flat()
arr3.flat(3)  // depth 를 착각할 수도 있으니, 권장 안함
arr3.flat(Infinity) // 권장합니다.