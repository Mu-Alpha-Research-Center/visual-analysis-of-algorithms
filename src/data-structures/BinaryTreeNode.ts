export default class BinaryTreeNode<T> {
  value: T
  left: BinaryTreeNode<T>
  right: BinaryTreeNode<T>

  constructor(
    value: T,
    left: BinaryTreeNode<T> = null,
    right: BinaryTreeNode<T> = null
  ) {
    this.value = value
    this.left = left
    this.right = right
  }

  dftInorder(): BinaryTreeNode<T>[] {
    let nodes = []
    if (this.left) nodes = nodes.concat(this.left.dftInorder())
    nodes.push(this)
    if (this.right) nodes = nodes.concat(this.right.dftInorder())
    return nodes
  }

  dftPreorder(): BinaryTreeNode<T>[] {
    let nodes = []
    nodes.push(this)
    if (this.left) nodes = nodes.concat(this.left.dftPreorder())
    if (this.right) nodes = nodes.concat(this.right.dftPreorder())
    return nodes
  }

  dftPostorder(): BinaryTreeNode<T>[] {
    let nodes = []
    if (this.left) nodes = nodes.concat(this.left.dftPostorder())
    if (this.right) nodes = nodes.concat(this.right.dftPostorder())
    nodes.push(this)
    return nodes
  }

  bft(): BinaryTreeNode<T>[] {
    let nodes = []
    let queue = []
    queue.push(this)
    while (queue.length > 0) {
      let node = queue.shift()
      nodes.push(node)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    return nodes
  }
}
