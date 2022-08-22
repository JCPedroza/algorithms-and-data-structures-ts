/**
 * Build an array that contains a fizz buzz string sequence,
 * Uses a for loop with an accumulator and string concatenation.
 * Complexity: time O(n), space O(n)
 * @param from Inclusive start of sequence.
 * @param to Exclusive end of sequence.
 * @returns Sequence of fizz buzz strings.
 */
const fizzBuzz = (from: number, to: number): string[] => {
  const fbs = []

  for (let num = from; num < to; num++) {
    let fbStr = ''

    if (num % 3 === 0) fbStr += 'fizz'
    if (num % 5 === 0) fbStr += 'buzz'

    fbs.push(fbStr.length === 0 ? String(num) : fbStr)
  }

  return fbs
}

const solution = {
  fun: fizzBuzz,
  id: 'for loop accumulator and string concatenation'
}

export default solution
