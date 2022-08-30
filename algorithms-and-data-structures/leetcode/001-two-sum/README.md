# LeetCode 001 - Two Sum

Given an array of integers `nums` and an integer `target`, return *indices* of the
two numbers such that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you may not
use the same element twice.

You can return the answer in any order.

## Function Signature

```typescript
function twoSum (nums: number[], target: number): number[]
```

## Examples

```text
Input: nums = [11, 3, 9, 15], target = 12
Output: [1, 2] or [1, 2]

Input: nums = [2, 4, 3], target = 6
Output: [0, 1] or [1, 0]

Input: nums = [1,1], target = 2
Output: [0, 1] or [1, 0]
```

## Constraints

```text
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists, but the indexes of that answer can be in any order.
```

## Follow-Up

Can you come up with an algorithm that is less than `O(n²)` time complexity?

## Resources

- [LeetCode 001 Two Sum][0]

[0]: https://leetcode.com/problems/two-sum/
