const merge = (numsA: number[], numsB: number[]): number[] => {
  const mergedNums: number[] = []

  while ((numsA.length > 0) && (numsB.length > 0)) {
    mergedNums.push(
      numsA[0] <= numsB[0]
        ? numsA.shift() ?? 0
        : numsB.shift() ?? 0)
  }

  return [...mergedNums, ...numsA, ...numsB]
}

const mergeSort = (numsA: number[]): number[] => {
  const queue = numsA.map(num => [num])

  while (queue.length > 1) {
    queue.push(merge(
      queue.shift() ?? [],
      queue.shift() ?? []))
  }

  return queue.pop() ?? []
}

const algorithm = {
  fun: mergeSort,
  id: 'copy while'
}

export default algorithm
