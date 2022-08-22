import fizzBuzzForCon from './fizz-buzz-for-con'
import fizzBuzzMapSet from './fizz-buzz-map-sel'

const testSubjects = [
  fizzBuzzForCon,
  fizzBuzzMapSet
]

for (const {fun, id} of testSubjects) {
  describe(`Fizz Buzz solution "${id}"`, () => {
    it('builds an array that contains a fizz buzz sequence', () => {
      expect(fun(10, 18))
        .toEqual(['buzz', '11', 'fizz', '13', '14', 'fizzbuzz', '16', '17'])

      expect(fun(-3, 3))
        .toEqual(['fizz', '-2', '-1', 'fizzbuzz', '1', '2'])


      expect(fun(15, 16)).toEqual(['fizzbuzz'])
    })

    it('builds an empty array for incongruent ranges', () => {
      expect(fun(2, -10)).toEqual([])
      expect(fun(4, 4)).toEqual([])
    })
  })
}
