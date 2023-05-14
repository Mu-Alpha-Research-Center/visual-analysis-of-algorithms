type Predicate<T> = (node: TreeNode<T>) => boolean

export default class TreeNode<T> {
  value: T
  children: TreeNode<T>[]

  constructor(value: T, children: TreeNode<T>[] = []) {
    this.value = value
    this.children = children
  }

  bfs(pred: Predicate<T>): TreeNode<T> | null {
    let queue = []
    queue.push(this)
    while (queue.length > 0) {
      let node = queue.shift()
      if (pred(node)) {
        return node
      }
      for (let child of node.children) {
        queue.push(child)
      }
    }
    return null
  }

  bft(): TreeNode<T>[] {
    let nodes = []
    let queue = []
    queue.push(this)
    while (queue.length > 0) {
      let node = queue.shift()
      nodes.push(node)
      for (let child of node.children) {
        queue.push(child)
      }
    }
    return nodes
  }

  dfs(pred: Predicate<T>): TreeNode<T> | null {
    if (pred(this)) {
      return this
    }
    for (let child of this.children) {
      let node = child.dfs(pred)
      if (node) {
        return node
      }
    }
    return null
  }

  dftRecursive(): TreeNode<T>[] {
    let nodes = []
    nodes.push(this)
    for (let child of this.children) {
       nodes = nodes.concat(child.dftRecursive())
    }
    return nodes
  }

  dftIterative(): TreeNode<T>[] {
    let nodes = []
    let stack = []
    stack.push(this)
    while (stack.length > 0) {
      let node = stack.pop()
      nodes.push(node)
      for (let child of node.children.reverse()) {
        stack.push(child)
      }
    }
    return nodes
  }
}
