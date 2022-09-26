# Longest Substring Without Repeating Characters

Write a *function* `findSubstr` that takes a *string* `str` as argument, and returns
the length (as *number*) of the longest substring that has no repeating characters.

## Function Signature

```typescript
function findSubstr (str: sting): number
```

## Examples

```text
in: ''
out: 0

in: 'a'
out: 1

in: 'aaa'
out: 1

in: 'axa'
out: 2

in: 'xyzxyzxy'
out: 3

in: '1212312345671234'
out: 7
```

## Constraints

- 0 <= str.length <= 100,000
- `str` consists of english letters, digits, symbols, and spaces

## Resources

- [Longest Substring Without Repeating Characters at LeetCode][0]

[0]: https://leetcode.com/problems/longest-substring-without-repeating-characters/
