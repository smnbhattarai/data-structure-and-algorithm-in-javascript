/**
 * Graph implemented using adjacency List (another method to implement is matrix)
 */
class Graph {

    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

}

let g = new Graph();
g.addVertex("NY");
g.addVertex("SF");
g.addVertex("TX");
g.addVertex("HK");
g.addEdge("NY", "SF");
g.addEdge("NY", "HK");
g.addEdge("SF", "TX");
g.addEdge("SF", "HK");
console.log(g);
g.removeEdge("SF", "TX");
console.log(g);
g.removeVertex("HK");
console.log(g);