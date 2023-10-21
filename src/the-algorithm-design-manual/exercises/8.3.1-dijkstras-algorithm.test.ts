import { runTests } from '../../TestHelpers'
import { Heap } from 'heap-js'

type Vertex = [name: string, weight: number]
type WeightedGraph = Record<string, Vertex[]>

const g: WeightedGraph = {
    a: [
        ['b', 2],
        ['c', 1],
    ],
    b: [
        ['a', 2],
        ['d', 1],
    ],
    c: [
        ['a', 1],
        ['d', 3],
    ],
    d: [
        ['c', 3],
        ['b', 1],
    ],
}

function dijkstra(graph: WeightedGraph, source: string) {
    // https://en.wikipedia.org/wiki/Dijkstra's_algorithm#Using_a_priority_queue
    const dist = {}
    const prev = {}
    const heapq = new Heap((a: Vertex, b: Vertex) => a[1] - b[1])
    // for each vertex v in Graph.Vertices:
    //      if v ≠ source
    //          dist[v] ← INFINITY                 // Unknown distance from source to v
    //          prev[v] ← UNDEFINED                // Predecessor of v
    //      Q.add_with_priority(v, dist[v])
    // dist[source] ← 0
    for (const v of Object.keys(graph)) {
        if (v !== source) {
            dist[v] = Infinity
            prev[v] = undefined
        }
        heapq.add([v, dist[v]])
    }
    dist[source] = 0
    // while Q is not empty:                       // The main loop
    //      u ← Q.extract_min()                    // Remove and return best vertex
    //      for each neighbor v of u:              // Go through all v neighbors of u
    //          alt ← dist[u] + Graph.Edges(u, v)
    //          if alt < dist[v]:
    //              dist[v] ← alt
    //              prev[v] ← u
    //              Q.decrease_priority(v, alt)
    while (!heapq.isEmpty()) {
        const [u, _] = heapq.pop()
        const neighbors = graph[u]
        for (const [v, d] of neighbors) {
            let alt = dist[u] + d
            if (alt < dist[v]) {
                dist[v] = alt
                prev[v] = u
                heapq.push([v, alt])
            }
        }
    }
    return [dist, prev]
}

runTests(dijkstra, [
    [
        g,
        'a',
        [
            { b: 2, c: 1, d: 3, a: 0 },
            { b: 'a', c: 'a', d: 'b' },
        ],
    ],
])
