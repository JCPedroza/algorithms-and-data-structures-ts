// https://en.wikipedia.org/wiki/Exponentiation_by_squaring

const intExp = (base: number, pow: number): number => {
  if (!Number.isInteger(base) || !Number.isInteger(pow)) {
    throw new Error(`Non-integer argument (base: ${base} pow: ${pow})`)
  }

  const loop = (lbase: number, lpow: number): number => {
    if (lpow < 0) {
      return loop(1 / lbase, -lpow)
    } else if (lpow === 0) {
      return 1
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
