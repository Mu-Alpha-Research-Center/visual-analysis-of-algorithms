import TreeNode from './TreeNode'

test('breadth-first search', () => {
  let root = new TreeNode('a', [
    new TreeNode('b', [
      new TreeNode('d'),
      new TreeNode('e')
    ]),
    new TreeNode('c')
  ])

  expect(root.bfs(({ value }) => value === 'e').value).toStrictEqual('e')
  expect(root.bfs(({ value }) => value === 'f')).toStrictEqual(null)
})

test('breadth-first traverse', () => {
  let root = new TreeNode('a', [
    new TreeNode('b', [
      new TreeNode('d'),
      new TreeNode('e')
    ]),
    new TreeNode('c')
  ])

  expect(root.bft().map(node => node.value)).toStrictEqual(['a', 'b', 'c', 'd', 'e'])
})

test('depth-first search', () => {
  let root = new TreeNode('a', [
    new TreeNode('b', [
      new TreeNode('c'),
      new TreeNode('d')
    ]),
    new TreeNode('e')
  ])

  expect(root.dfs(({ value }) => value === 'e').value).toStrictEqual('e')
  expect(root.dfs(({ value }) => value === 'f')).toStrictEqual(null)
})

test('depth-first traverse', () => {
  let root = new TreeNode('a', [
    new TreeNode('b', [
      new TreeNode('c'),
      new TreeNode('d')
    ]),
    new TreeNode('e')
  ])

  expect(root.dftRecursive().map(node => node.value)).toStrictEqual(['a', 'b', 'c', 'd', 'e'])
  expect(root.dftIterative().map(node => node.value)).toStrictEqual(['a', 'b', 'c', 'd', 'e'])
})
