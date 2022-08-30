import solutions from './two-sum.repo'

for (const { fun, id } of solutions) {
  describe(`LeetCode solution "${id}"`, () => {
    it('finds indexes of two integers that add up to the target', () => {
      expect([[0, 1], [1, 0]]).toContainEqual(fun([1, 1], 2))
      expect([[0, 1], [1, 0]]).toContainEqual(fun([-2, -4, 3], -6))
      expect([[1, 2], [2, 1]]).toContainEqual(fun([11, 3, 9, 15], 12))
      expect([[2, 3], [3, 2]]).toContainEqual(fun([5, 6, 7, 8], 15))
    })
  })
}
