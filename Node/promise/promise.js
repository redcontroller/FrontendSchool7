// promsie 3가지 상태
// pending (대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
// fulfilled (이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
// rejected (실패) : 비동기 처리가 실패하거나 오류가 발생한 상태

function sayHello() {
    return new Promise((resolve, reject) => {
        // const hello = "Hello Hello";
        // resolve(hello);
        // reject(new Error());
        resolve("hello!!");
    });
}

async function test() {
    const hello1 = await sayHello();
    console.log(hello1);
}

test();

// sayHello()
// .then((resolvedData) => {
//     console.log(resolvedData);
//     return resolvedData;
// })
// .then((resolvedData) => {
//     console.log(resolvedData);
//     return resolvedData;
// })
// .then((resolvedData) => {
//     console.log(resolvedData);
// })
// .catch((error) => {
//     console.log(error);
// });