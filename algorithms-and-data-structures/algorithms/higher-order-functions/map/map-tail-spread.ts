/**
 * Builds an array with the results of applying the mapper function to each element of
 * the given array. Uses tail call recursion and array spread (no array mutation).
 * Complexity: time O(n), space O(n).
 * @param mapper Function to apply to each element of the given array.
 * @param array Array whose items will be mapped into an array of results.
 * @returns An array with the results of applying the mapper function to each element
 * of the array.
 */
const map = <T, U> (mapper: (arg: T) => U, array: T[]): U[] => {
  const loop = (results: U[]): U[] => {
    if (results.length === array.length) return results
    return loop([...results, mapper(array[results.length])])
  }

  return loop([])
}

const algorithm = {
  fun: map,
  id: 'tail call recursion and array spread'
}

export default algorithm
