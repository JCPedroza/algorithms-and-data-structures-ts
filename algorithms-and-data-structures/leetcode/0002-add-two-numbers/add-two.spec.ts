import { listEquals, makeNode } from './linked-list'
import solutions from './add-two.repo'

for (const { fun, id } of solutions) {
  describe(`Leet 2 solution "${id}"`, () => {
    const list0a = makeNode(0)
    const list0b = makeNode(0)
    const list0c = { value: 0, next: null }

    const list123 = makeNode(1, makeNode(2, makeNode(3)))
    const list456 = { value: 4, next: { value: 5, next: { value: 6, next: null } } }
    const list579 = makeNode(5, makeNode(7, makeNode(9)))

    const list99a = { value: 9, next: { value: 9, next: null } }
    const list99b = makeNode(9, makeNode(9))
    const list9999 = makeNode(9, makeNode(9, makeNode(9, makeNode(9))))
    const list89001 = makeNode(8, makeNode(9, makeNode(0, makeNode(0, makeNode(1)))))

    it('sums linked lists representing numbers', () => {
      expect(listEquals(fun(
        list0a, list0b), list0c)
      ).toBe(true)

      expect(listEquals(fun(
        list123, list456), list579)
      ).toBe(true)

      expect(listEquals(fun(
        list99a, list9999), list89001)
      ).toBe(true)

      expect(listEquals(fun(
        list9999, list99a), list89001)
      ).toBe(true)
    })

    it('handles empty linked lists', () => {
      expect(listEquals(fun(
        null, null), null)
      ).toBe(true)

      expect(listEquals(fun(
        list99a, null), list99b)
      ).toBe(true)

      expect(listEquals(fun(
        null, list99a), list99b)
      ).toBe(true)
    })
  })
}
