import mapForLoop from './map-for-loop'

const testSubjects = [
  mapForLoop
]

testSubjects.forEach(({ fun, id }) => {
  describe(`Map algorithm "${id}"`, () => {
    it('maps values according to the mapper function.', () => {
      expect(fun(x => x + 1, [0, 1, 2])).toEqual([1, 2, 3])
    })
  })
})
