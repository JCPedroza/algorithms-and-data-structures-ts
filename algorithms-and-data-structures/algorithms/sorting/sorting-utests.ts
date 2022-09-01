import Algorithm from '../algorithms.interface'

const testSorters = (algorithms: Algorithm[], sortName: string): void => {
  for (const { fun, id } of algorithms) {
    describe(`${sortName} sorting algorithm "${id}"`, () => {
      it('sorts arrays of numbers', () => {
        expect(fun([]))
          .toEqual([])

        expect(fun([2]))
          .toEqual([2])

        expect(fun([2, 1, 0, -1, -2]))
          .toEqual([-2, -1, 0, 1, 2])

        expect(fun([-13.9, 2.1, 13.9, 2.0, 2.2, -21, 7.092]))
          .toEqual([-21, -13.9, 2.0, 2.1, 2.2, 7.092, 13.9])
      })
    })
  }
}

export default testSorters
