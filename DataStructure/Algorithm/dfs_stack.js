
// 0. 반복...
// 0. 언제까지?? 없을때까지 => 모든노드에 방문할때까지 하게됨
// 1. 시작노드....방문하기
// 1-1. 시작노드를 스택에 넣고
// 1-2. 스택에서 pop()
// 1-3. pop한 값이 current가됨
// 1-4. 시작노드를 방문하게됨
// 2. 시작노드의 인접노드를 스택에 넣는다.
// 3. 스택에서 pop()
// 4. pop한 값이 current가됨 -> 이게 방문한겅미
// 4-1. curren가 방문한적이 있는지 확인해야한다.
// 5. current를 방문목록에 넣는다.
// 6. current의 인접노드를 stack에 push한다.

function DFS(graph, start) {
    let visited = [];
    let stack = [start];

    while (stack.length !== 0) {
				// 스택의 마지막 입력값을 꺼낸다
        let current = stack.pop();
				// 현재 노드가 방문한 목록에 없으면. indexOf는 배열안의 값을 살펴보고 없으면 -1을 리턴한다.
        if (visited.indexOf(current) === -1) {
            visited.push(current);
						// 방문한 적이 없는 인접 노드를 찾고 인접노드들로 만든다.
            let neighbors = graph[current].filter(n => visited.indexOf(n) === -1);
						// 스택에 방문할 노드들을 추가한다.
						// concat은 배열을 합치는데 사용된다.
            stack = stack.concat(neighbors);
        }
    }
		// 방문한 순서를 리턴한다.
    return visited;
}

// const graph = {
//     0:[1,2,3],
//     1:[4,5],
//     2:[],
//     3:[],
//     4:[6],
//     5:[],
//     6:[]
// }

const graph = {
    0:[1,2,3],
    1:[4,5],
    2:[],
    3:[7,8],
    4:[6],
    5:[],
    6:[],
    7:[],
    8:[]
}

console.time();
const result = DFS(graph,0)
console.log(result)//[0, 1, 4, 6, 5, 2, 3]
console.timeEnd();