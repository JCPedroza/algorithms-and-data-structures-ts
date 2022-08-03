const map = (mapper: (arg: any) => any, array: any[]): any[] => {
  const maps = []

  for (const item of array) {
    maps.push(mapper(item))
  }

  return maps
}

export const algorithm = {
  fun: map,
  id: 'simple recursion'
}

export default algorithm
