// gragh를 표현하는법

// Edge List
// 엣지들에 대한 정보만
const gragh1 = [[0, 2], [2, 3], [2, 1], [1, 3]];

// Adjacent List
// 각 노드와 연결되어있는 노드들에 대한 리스트 표시
const gragh2 = [[2], [2, 3], [0, 1, 3], [1, 2]];

// Adjacent Matrix
// 행렬로 표현. 엣지가 존재하면 1, 아니면 0
// 만약 weight가 존재하는 그래프라면 weight를 써넣어도됨
const graph3 = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0]
]


class Graph {
  
  constructor() {
    this.numberOfNodes = 0
    this.adjacentNodes = {
    }
  }

  addVertex(node) {
    this.adjacentNodes[node] = []
    this.numberOfNodes++
    return this
  }

  addEdge(node1, node2) { // 무향그래프임
    this.adjacentNodes[node1].push(node2)
    this.adjacentNodes[node2].push(node1)
    return this
  }

  showConnections() { 
    const allNodes = Object.keys(this.adjacentNodes); // 모든 노드의 리스트
    for (let node of allNodes) { 
      let nodeConnections = this.adjacentNodes[node]; 
      let connections = ""; 
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      } 
      console.log(node + "-->" + connections); 
    } 
  } 
}


const myGraph = new Graph;

myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1'); 
myGraph.addEdge('3', '4'); 
myGraph.addEdge('4', '2'); 
myGraph.addEdge('4', '5'); 
myGraph.addEdge('1', '2'); 
myGraph.addEdge('1', '0'); 
myGraph.addEdge('0', '2'); 
myGraph.addEdge('6', '5');

myGraph.showConnections(); 