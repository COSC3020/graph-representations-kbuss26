[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/hFs1pb0z)
# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

### Response

When converting an adjacency matrix to a list, the runtime complexity exists
as $T(n) \in \Theta(|V|^2)$. I conclude this as the loop in my code
runs under a for-loop under the length of vertices in the matrix squared (```adjMatrix.length ** 2```),
and it checks each spot in the matrix to see if there exists a non-zero value at that position.

When converting an adjacency list to a matrix, the runtime complexity is $T(n) \in \Theta(|V| + |E|)$. 
This is because an adjacency list only contains all of the edges that the node is connected to, so the
algorithm analyzes each node as a list of existing edges than all the possible places
for an edge - it does not matter where the edges are. This conversion depends on both 
the number of vertices in the graph and how many edges exist in the graph altogether, so
the runtime complexity is $T(n) \in \Theta(|V| + |E|)$.

As for initializing the matrix for the conversion, the runtime complexity prior to
modifying the matrix is linear since the algorithm generates the list of vertices, then deep copies
said list sequentially. As this complexity is $T(n) = 2|V| \in \Theta(|V|)$, it does not affect the overall complexity
of $T(n) \in \Theta(|V| + |E|)$.
