/*
    Keifer Buss 
    COSC-3020-01 
    Last modified Mar. 01 2024
    Sources: None for this program
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
        if (edgeExists) edgeList.push((i % adjMatrix.length) + 1); // Stores edge position in list if non-zero
        if ((i + 1) % adjMatrix.length === 0) {
            // Resets if reaches end of first matrix row
            adjList.push(edgeList);
            edgeList = [];
        }
    }
    
    return adjList;
}
