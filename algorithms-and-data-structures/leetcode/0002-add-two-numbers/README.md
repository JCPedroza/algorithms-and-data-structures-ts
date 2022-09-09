# Add Two Numbers

You are given two **non-empty** linked lists representing two non-negative
integers. The digits are stored in **reverse order**, and each of their nodes
contains a single digit. Add the two numbers and return the sum as a linked
list.

The empty linked list is represented by `null`.

Assume the two numbers do not contain any leading zero, except the
number 0 itself.

If one of the lists is empty, the result is a copy of the other list. If both lists
are empty, return `null`.

All the functions you write must be observationally pure.

- Functions cannot modify arguments (including the input lists)
- Functions cannot modify external state
- Functions can modify internal state (you can mutate the nodes created locally)
- Functions must be deterministic

You are provided with the following mutable linked list implementation:

```typescript
type NodeOpt<T> = Node<T> | null
type NumNodeOpt = NodeOpt<number>

interface Node<T> {
  value: T
  next: NodeOpt<T>
}

function makeNode<T> (value: T, next: NodeOpt) {
  return { value, next }
}
```

## Function Signature

```typescript
function addLists (nodeA: NodeOpt, nodeB: NodeOpt): NodeOpt
```

## Examples

```text
in: list1 = 3 -> 5 -> 1  list2 = 2 -> 6 -> 1
out: 5 -> 1 -> 3
because: 153 + 162 = 315

in: list1 = 0  list2 = 0
out: 0

in: list1 = 9 -> 9 -> 9 -> 9  list2 = 9 -> 9
out: 8 -> 9 -> 0 -> 0 -> 1
```

## Constraints

- The number of nodes in each linked list is in the range [0, 100].
- 0 <= node value <= 9
- The list represents a number that does not have leading zeros.

## Extra

Implement functions to compute things about the provided linked list implementation,
like size, equality, string representation, etc.

## Resources

- [Add Two Numbers at LeetCode][0]

[0]: https://leetcode.com/problems/add-two-numbers
