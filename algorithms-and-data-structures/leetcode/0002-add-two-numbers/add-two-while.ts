import { NumNodeOpt, makeNode } from './linked-list'

/**
 * Sums two linked lists together, using a while loop.
 * Complexity: time O(n), space O(n).
 * @param nodeA First linked list to be added.
 * @param nodeB Second linked list to be added.
 * @returns The sum of the two linked lists, as a linked list.
 */
const addLists = (nodeA: NumNodeOpt, nodeB: NumNodeOpt): NumNodeOpt => {
  let nowA = nodeA
  let nowB = nodeB
  let valA = nodeA?.value ?? 0
  let valB = nodeB?.value ?? 0
  let carry = 0
  const watcher = makeNode(0)
  let result = watcher

  while (nowA !== null || nowB !== null || carry !== 0) {
    const sum = valA + valB + carry
    result.next = makeNode(sum % 10)
    result = result.next
    carry = Math.trunc(sum / 10)

    nowA = nowA?.next ?? null
    nowB = nowB?.next ?? null
    valA = nowA?.value ?? 0
    valB = nowB?.value ?? 0
  }

  return watcher.next
}

const solution = {
  fun: addLists,
  id: 'while loop'
}

export default solution
