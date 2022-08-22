/**
 * Build an array that contains a fizz buzz string sequence,
 * Uses array map and string selection.
 * Complexity: time O(n), space O(n)
 * @param from Inclusive start of sequence.
 * @param to Exclusive end of sequence.
 * @returns Sequence of fizz buzz strings.
 */
const fizzBuzz = (from: number, to: number): string[] =>
  [...Array(from >= to ? 0 : to - from).keys()]
    .map((idx) => {
      const num = idx + from
      if (num % 15 === 0) return 'fizzbuzz'
      if (num % 3 === 0) return 'fizz'
      if (num % 5 === 0) return 'buzz'
      return String(num)
    })

const solution = {
  fun: fizzBuzz,
  id: 'array map and string selection'
}

export default solution
