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

const mergeSort = (nums: number[]): number[] => {
  if (nums.length < 2) return nums

  const mid = nums.length / 2
  const left = nums.slice(0, mid)
  const right = nums.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

const algorithm = {
  fun: mergeSort,
  id: 'copy simple'
}

export default algorithm
