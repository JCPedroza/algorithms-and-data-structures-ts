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
