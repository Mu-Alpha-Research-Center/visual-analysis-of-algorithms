import BinaryTreeNode from './BinaryTreeNode'

const createTree = () =>
  new BinaryTreeNode(
    1,
    new BinaryTreeNode(2,
      new BinaryTreeNode(4),
      new BinaryTreeNode(5)
    ),
    new BinaryTreeNode(3)
  )

test('depth first traversal inorder', () => {
  let tree = createTree()
  let values = tree.dftInorder().map(n => n.value)

  expect(values).toEqual([4, 2, 5, 1, 3])
})

test('depth first traversal preorder', () => {
  let tree = createTree()
  let values = tree.dftPreorder().map(n => n.value)

  expect(values).toEqual([1, 2, 4, 5, 3])
})

test('depth first traversal postorder', () => {
  let tree = createTree()
  let values = tree.dftPostorder().map(n => n.value)

  expect(values).toEqual([4, 5, 2, 3, 1])
})

test('breadth first traversal', () => {
  let tree = createTree()
  let values = tree.bft().map(n => n.value)

  expect(values).toEqual([1, 2, 3, 4, 5])
})
