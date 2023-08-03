function add(x, y) {
    return x + y
}

function mul(x, y) {
    return x*y
}

function div(x,y) { return x/y }

add(1,2)
mul(1,2)
div(1,2)

// 문제1 : 더하기, 빼기, 나누기, 곱하기를 함수로 만들어주세요.
// https://school.programmers.co.kr/learn/courses/30/lessons/120803

// 문제2: '10,000,000,000' 와 같은 문자를 입력받아 10000000000 와
// 같은 숫자를 반환하는 함수를 만들어주세요.
// delComma, deleteComma, str2Num, stringToNumber
function stringToNumber(str){ 
    let answer = parserInt(str.replaceAll(',', ''))
    return answer
}

stringToNumber('10,000,000,000')

// 문제3: 입력된 문자열을 출력하고 입력된 문자열을 쪼개서 출력하는 함수를 만들어주세요.
// 입력: world
// 출력: ['w', 'o', 'r', 'l', 'd']
function printAndSplit (str) {
    console.log(str) // 콘솔 출력과 return 은 다르다.
    return str.split('')
}

let value = printAndSplit('world')

// 문제4: 2개의 숫자가 입력되면, 
// 2개의 숫자를 더하고, 더한 2개의 숫자를 곱하는 함수를 만들어주세요.
// 입력: 1,2
// 출력: (1+2) * (1+2) = 9
function add(x,y) {
    return x + y
}

function addAndMultiply (x, y) {
    let sum = add(x, y) * add(x, y)
    return sum
}

// 4.3번째 풀이
function addAndMultiply (x, y) {
    // 함수 내부 함수: 메모리 효율을 위해 함수를 내부에서 만들어 주세요.
    function add(x,y) {
        return x + y
    }
    let sum = add(x, y) * add(x, y)
    return sum
}

// 문제5: x**2 + 4x -12를 구해주는 함수를 만들어주세요
// 입력 : 3
// 출력 : 9 + 12 - 12 = 9
function equ2 (x) {
    return x**2 + 4*x -12
    // return (x-2)*(x+6)
}

// 1부터 100까지 더하는 것... 수학을 알면 계산 한번에 끝난다. n(n+1)/2


