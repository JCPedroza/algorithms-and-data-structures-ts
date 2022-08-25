# Bubble Sort

Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that
repeatedly steps through the input list element by element, comparing the current
element with the one after it, swapping their values if needed. This repeats until
the array has been traversed `array.length` times, or until the array is sorted.

This simple algorithm performs poorly in real world use and is used primarily as an
educational tool. More efficient algorithms such as quicksort, timsort, or merge sort
are used by the sorting libraries built into programmin languages.

## Write the Bubble Sort Algorithm

Write a function, `bubbleSort`, that takes an `array` of `number`s as input, and
sorts the `array` in ascending order, and in-place (it modifies the argument array
and returns a reference to that same array, it doesn't return a copy of the array).

Use the Bubble Sort pattern.

## Function Signature

```typescript
function bubbleSort (nums: number[]): number[]
```

## Examples

```text
bubbleSort([]) returns []
bubbleSort([2]) returns []
bubbleSort([2, 1, 0, -1, -2]) returns [-2, -1, 0, 1, 2]
bubbleSort([-2.3, 0.9, 0.3, -11.5, -0.7]) returns [-11.5, -2.3, -0.7, 0.3, 0.9]
```

## Resources

- [Bubble Sort at Wikipedia][0]
- [Bubble Sort at Rosetta Code][1]

[0]: https://en.wikipedia.org/wiki/Bubble_sort
[1]: https://rosettacode.org/wiki/Sorting_algorithms/Bubble_sort
