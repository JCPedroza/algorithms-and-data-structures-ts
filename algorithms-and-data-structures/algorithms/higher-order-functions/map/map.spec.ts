import algorithms from './map.repo'

algorithms.forEach(({ fun, id }) => {
  describe(`Map algorithm "${id}"`, () => {
    it('maps values according to the mapper function', () => {
      expect(fun((_) => 1, []))
        .toEqual([])

      expect(fun((n: number) => n + 1, [0, 1, 2]))
        .toEqual([1, 2, 3])

      expect(fun((b: boolean) => !b, [true, false, true]))
        .toEqual([false, true, false])

      expect(fun(
        (s: string) => [s.toLowerCase(), s.toUpperCase()], ['a', 'B', 'c']))
        .toEqual([['a', 'A'], ['b', 'B'], ['c', 'C']])

      expect(fun(
        (ba: Array<bigint>) => [ba[1], ba[0]],
        [[10n, 20n], [30n, 40n], [50n, 60n]]))
        .toEqual([[20n, 10n], [40n, 30n], [60n, 50n]])
    })
  })
})
