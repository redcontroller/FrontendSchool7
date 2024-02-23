import axios from 'axios';

// 데이터 읽어오기 Read, Http methods get
export async function readData() {
    const {data} = await axios.get("http://localhost:3001/todolist");
    console.log(data);
    return data;
}

// 데이터 추가하기 Create, Http methods post
export async function createData(todo) {
    await axios.post("http://localhost:3001/todolist", todo);
}

// 데이터 수정하기 Update, Http methods patch
export async function updateData({id, updateTodo}) {
    await axios.patch(`http://localhost:3001/todolist/${id}`, updateTodo);
}

// 데이터 삭제하기 Delete, Http methods delete
export async function deleteData(id) {
    await axios.delete(`http://localhost:3001/todolist/${id}`);
}

// 문제는 계속 새로고침 해야된다.
// 이거를 다른 코드로 구현하려면 약 40~50줄은 써야한다.