const intExp = (base: number, pow: number): number => {
  if (!Number.isInteger(base) || !Number.isInteger(pow)) {
    throw new Error(`Non-integer argument (base: ${base} pow: ${pow})`)
  }

  const absPow = Math.abs(pow)
  let product = 1

  for (let loop = 0; loop < absPow; loop++) {
    product *= base
  }

  return pow < 0 ? 1 / product : product
}

const algorithm = {
  fun: intExp,
  id: 'simple'
}

export default algorithm
