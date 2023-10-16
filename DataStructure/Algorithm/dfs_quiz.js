// 주어진 배열을 실습에서 사용한 모양으로 바꿔서 dfs함수 실행해보기
const tree = [[0, 1], [0, 2], [0, 3], [1, 4], [1, 5], [4, 6]];

// 아래 함수를 변경해주세요
function DFS(graph, start, target) {
    let visited = [];
    let stack = [start];
    let count = 0; // 탐색한 횟수
    while (stack.length !== 0) {
        let current = stack.pop();
                // indexOf는 배열안의 값을 살펴보고 없으면 -1을 리턴한다.
        if (visited.indexOf(current) === -1) {
            visited.push(current);
            count++;
            // 방문한 적이 없는 인접 노드를 찾고 인접노드들로 만든다.
            // current가 찾고자 하는 값이면 return 
            if(current===target){
                return [current, count]
            }
            let neighbors = graph[current].filter(n => visited.indexOf(n) === -1);
                        // 스택에 방문할 노드들을 추가한다.
                        // concat은 배열을 합치는데 사용된다.
            stack = stack.concat(neighbors);
        }
    }
        // 없으면 
    return [-1, count];
}

// const graph = {
//     0:[1,2,3], // 3 > 2 > 1 순서로 pop 됨
//     1:[4,5],
//     2:[],
//     3:[],
//     4:[6],
//     5:[],
//     6:[]
// }

// const tree = [[0, 1], [0, 2], [0, 3], [1, 4], [1, 5], [4, 6]];
function convert(tree=[]) {
    const graph = {};
    tree.forEach((nodeInfo)=> {
        graph[nodeInfo[0]]=[]
        graph[nodeInfo[1]]=[]
    })
    tree.forEach((nodeInfo)=> {
        graph[nodeInfo[0]].push(nodeInfo[1])
    })
    return graph;
}

const graph = convert(tree);
console.log(graph);
console.log(DFS(graph, 0, 2));

