import {
  makeNode,
  listEquals,
  listSize,
  listStr
} from './linked-list'

describe('Module providing mutable linked list functionality', () => {
  const list012a = makeNode(0, makeNode(1, makeNode(2)))
  const list012b = makeNode(0, makeNode(1, makeNode(2)))
  const list345 = { value: 3, next: { value: 4, next: { value: 5, next: null } } }
  const listSingle = makeNode('singleton')

  it('checks for equality of two linked lists', () => {
    expect(listEquals(list012a, list012a)).toBe(true)
    expect(listEquals(list012a, list012b)).toBe(true)
    expect(listEquals(list012a, list345)).toBe(false)
    expect(listEquals(null, null)).toBe(true)
    expect(listEquals(null, list012a)).toBe(false)
  })

  it('computes the size of a linked list', () => {
    expect(listSize(null)).toBe(0)
    expect(listSize(listSingle)).toBe(1)
    expect(listSize(list345)).toBe(3)
  })

  it('builds string representation of a linked list', () => {
    expect(listStr(null)).toBe('<>')
    expect(listStr(listSingle)).toBe('<singleton>')
    expect(listStr(list345)).toBe('<3, 4, 5>')
  })
})
