import solutions from './two-sum.repo'

for (const { fun, id } of solutions) {
  describe(`Leet 1  "${id}"`, () => {
    it('finds indexes of two integers that add up to the target value', () => {
      expect(fun(2, [1, 1]))
        .toEqual([0, 1])

      expect(fun(-16, [14, 6, -8, 12, 20, -8, -10]))
        .toEqual([2, 5])

      expect(fun(0, [20, 0, 1, 2, 3, 4, -20]))
        .toEqual([0, 6])
    })

    it('returns [-1, -1] when no solution is found', () => {
      expect(fun(0, []))
        .toEqual([-1, -1])

      expect(fun(0, [1]))
        .toEqual([-1, -1])

      expect(fun(-10, [0, 1, 2, 3, 4]))
        .toEqual([-1, -1])
    })
  })
}
