/*
    Keifer Buss 
    COSC-3020-01 
    Last modified Mar. 15 2024
    Sources:
    - https://www.scaler.com/topics/javascript-copy-array/
*/

function convertToAdjList(adjMatrix) {
    // Variable declarations
    var adjList = [];
    var edgeList = [];
    var edgeExists = 0;

    // Pseudo-nested for loop - we can assume the bound is |V|^2 since the both dimensions = |V|.
    for (var i = 0; i < (adjMatrix.length) ** 2; i++) {
        // Get value for position
        edgeExists = adjMatrix[Math.floor(i / adjMatrix.length)][i % adjMatrix.length];
        if (edgeExists) edgeList.push(i % adjMatrix.length); // Stores edge position in list if non-zero
        if ((i + 1) % adjMatrix.length === 0) {
            // Resets if reaches end of first matrix row
            adjList.push(edgeList);
            edgeList = [];
        }
    }
    
    return adjList;
}

function convertToAdjMatrix(adjList) {
    // Variable declarations
    var adjMatrix = [];
    var initArray = [];
    var tempPos = 0;

    // Matrix initialization
    for(var i = 0; i < adjList.length; i++) {
        initArray.push(0);
    }
    for(var i = 0; i < adjList.length; i++) {
        adjMatrix.push(initArray.slice()); // Slice function to avoid pushing the same reference
    }

    // Iterates through each edge in each vertice, basic conversion algorithm
    for(var i = 0; i < adjList.length; i++) {
        for(var j = 0; j < adjList[i].length; j++) {
            tempPos = adjList[i][j];
            adjMatrix[i][tempPos] = 1;
        }
    }

    return adjMatrix;
}
