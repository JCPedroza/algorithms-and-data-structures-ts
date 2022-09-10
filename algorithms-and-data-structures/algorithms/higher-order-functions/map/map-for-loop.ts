const map = <T, U> (fun: (arg: T) => U, array: T[]): U[] => {
  const maps = []

  for (const item of array) {
    maps.push(fun(item))
  }

  return maps
}

export const algorithm = {
  fun: map,
  id: 'for loop'
}

export default algorithm
