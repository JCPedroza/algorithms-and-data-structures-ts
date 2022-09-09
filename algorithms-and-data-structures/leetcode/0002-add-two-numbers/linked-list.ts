export type NodeOpt<T> = Node<T> | null
export type NumNodeOpt = NodeOpt<number>

/**
 * A mutable node in a mutable linked list.
 */
interface Node<T> {
  value: T
  next: NodeOpt<T>
}

/**
 * Node factory for linked lists.
 * @param value Value of the node.
 * @param next Next node in the list.
 * @returns An Object implementing the Node interface.
 */
export const makeNode = <T> (value: T, next: NodeOpt<T> = null): Node<T> =>
  ({ value, next })

/**
 * Check if two lists are equal.
 * @param nodeA Object implementing the Node interface.
 * @param nodeB Object implementing the Node interface.
 * @returns True if the two lists are equal.
 */
export const listEquals = <T> (nodeA: NodeOpt<T>, nodeB: NodeOpt<T>): boolean => {
  if (nodeA === null || nodeB === null) {
    return nodeA === nodeB
  }

  let nowA: NodeOpt<T> = nodeA
  let nowB: NodeOpt<T> = nodeB
  let valA = nowA?.value ?? null
  let valB = nowB?.value ?? null

  while (valA !== null && valB !== null) {
    if (valA !== valB) return false
    nowA = nowA?.next ?? null
    nowB = nowB?.next ?? null
    valA = nowA?.value ?? null
    valB = nowB?.value ?? null
  }

  return valA === valB
}

/**
 * Compute the size of a linked list.
 * @param node Object implementing the Node interface.
 * @returns Size of the linked list.
 */
export const listSize = <T> (node: NodeOpt<T>): number => {
  if (node === null) return 0

  let size = 1
  let now: NodeOpt<T> = node

  while (now?.next !== null) {
    size++
    now = now?.next ?? null
  }

  return size
}

/**
 * Build string representation of the given linked list.
 * @param node Object implementing the Node interface.
 * @returns Linked list's string representation.
 */
export const listStr = <T> (node: NodeOpt<T>): string => {
  if (node === null) return '<>'

  let str = '<'
  let now: NodeOpt<T> = node
  let nxt: NodeOpt<T> = now?.next ?? null

  while (nxt !== null) {
    str += `${String(now?.value)}, `
    now = now?.next ?? null
    nxt = now?.next ?? null
  }

  str += `${String(now?.value ?? null)}>`
  return str
}

export default {
  makeNode,
  listEquals,
  listSize,
  listStr
}
