const map = <T, U> (fun: (arg: T) => U, array: T[]): U[] => {
  if (array.length === 0) return []
  const [head, ...tail] = array
  return [fun(head), ...map(fun, tail)]
}

export const algorithm = {
  fun: map,
  id: 'simple recursion'
}

export default algorithm
