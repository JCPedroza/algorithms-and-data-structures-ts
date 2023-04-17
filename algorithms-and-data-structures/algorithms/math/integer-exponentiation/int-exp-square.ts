// https://en.wikipedia.org/wiki/Exponentiation_by_squaring

/**
 * Integer exponentiation.
 * Uses exponentiation by squaring.
 * Complexity: time O(log n), space O(log n).
 * 
 * @param base Base that will be taken to the given power (must be integer).
 * @param pow The base will be taken to this power (must be integer).
 * @return The base taken to the power.
 */
const intExp = (base: number, pow: number): number => {
  if (!Number.isInteger(base) || !Number.isInteger(pow)) {
    throw new Error(`Non-integer argument (base: ${base} pow: ${pow})`)
  }

  const loop = (lbase: number, lpow: number): number => {
    if (lpow === 0) {
      return 1
    } else if (lpow < 0) {
      return loop(1 / lbase, -lpow)
    } else if (lpow % 2 === 0) {
      return loop(lbase * lbase, lpow / 2)
    } else {
      return lbase * loop(lbase * lbase, (lpow - 1) / 2)
    }
  }

  return loop(base, pow)
}

const algorithm = {
  fun: intExp,
  id: 'exponentiation by squaring'
}

export default algorithm
