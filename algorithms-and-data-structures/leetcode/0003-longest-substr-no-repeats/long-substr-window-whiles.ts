/**
 * Find length of longest substring without repeating characters.
 * Uses a sliding window approach with nested while loops.
 * Complexity: time O(n), space O(n).
 * @param str String to be searched.
 * @returns Length of the longest substring without repeating characters.
 */
const findSubstr = (str: string): number => {
  const chars = new Map<string, number>()
  const limit = str.length

  let left = -1
  let nxtLeft = -1
  let right = 0
  let len = 0
  let max = len

  while (right < limit) {

    // Increase right until repeat is found, adding chars and their indexes to the map
    while (!chars.has(str[right]) && right < limit) {
      chars.set(str[right], right)
      right++
      len++
      if (len > max) max = len
    }

    nxtLeft = chars.get(str[right]) ?? -1
    chars.set(str[right], right)

    // Increase left until next left is reached, removing chars from the map
    while (left < nxtLeft) {
      left++
      chars.delete(str[left])
      len--
    }
  }

  return max
}

const solution = {
  fun: findSubstr,
  id: 'sliding window with nested while loops'
}

export default solution
