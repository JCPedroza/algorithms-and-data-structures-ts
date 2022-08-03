const map = (mapper: (arg: any) => any, array: any[]): any[] =>
  array.map(mapper)

export const algorithm = {
  fun: map,
  id: 'native array map method'
}

export default algorithm
