import bubbleSortNaiveForWorse from './bubble-sort-naive-for-worse'
import bubbleSortNaiveForBetter from './bubble-sort-naive-for-better'
import bubbleSortOptimizedFor from './bubble-sort-optimized-for'
import bubbleSortNaiveRecursive from './bubble-sort-naive-recursive'

const testSubjects = [
  bubbleSortNaiveForWorse,
  bubbleSortNaiveForBetter,
  bubbleSortOptimizedFor,
  bubbleSortNaiveRecursive
]

for (const { fun, id } of testSubjects) {
  describe(`Bubble Sort algorithm "${id}"`, () => {
    it('sorts an array of numbers', () => {
      expect(fun([]))
        .toEqual([])

      expect(fun([2]))
        .toEqual([2])

      expect(fun([2, 1, 0, -1, -2]))
        .toEqual([-2, -1, 0, 1, 2])

      expect(fun([-2.3, 0.9, 0.3, -11.5, -0.7]))
        .toEqual([-11.5, -2.3, -0.7, 0.3, 0.9])
    })
  })
}
