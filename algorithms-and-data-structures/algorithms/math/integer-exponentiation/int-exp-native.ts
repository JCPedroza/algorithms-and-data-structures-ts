/**
 * Integer exponentiation.
 * Uses the native power function.
 * Complexity: depends on implementation.
 * 
 * @param base Base that will be taken to the given power (must be integer).
 * @param pow The base will be taken to this power (must be integer).
 * @return The base taken to the power.
 */
const intExp = (base: number, pow: number): number => {
  if (!Number.isInteger(base) || !Number.isInteger(pow)) {
    throw new Error(`Non-integer argument (base: ${base} pow: ${pow})`)
  }

  return Math.pow(base, pow)
}

const algorithm = {
  fun: intExp,
  id: 'native'
}

export default algorithm
