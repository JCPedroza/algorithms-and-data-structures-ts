# Fizz Buzz

Fizz buzz is a group word game for children to teach them about division. Players take
turns to count incrementally, replacing any number divisible by three with the word
"fizz", any number divisible by five with the word "buzz", and any number divisible
by both 3 and 5 with the words "fizz buzz".

## Write the Fizz Buzz Function

Write a function, `fizzBuzz`, that returns an array of strings of the given
sequence where `start` is inclusive and `end` is exclusive, and where each number is
replaced according to the Fizz Buzz rules.

## Function Signature

```typescript
function fizzBuzz (start: number, end: number): string[]
```

## Examples

```typescript
expect(fizzBuzz(10, 18))
  .toEqual(['buzz', '11', 'fizz', '13', '14', 'fizzbuzz', '16', '17'])

expect(fizzBuzz(-3, 3))
  .toEqual(['fizz', '-2', '-1', 'fizzbuzz', '1', '2', 'fizzbuzz'])
```

## Resources

- [Fizz Buzz at Wikipedia][0]
- [Fizz Buzz at Rosetta Code][1]

[0]: https://en.wikipedia.org/wiki/Fizz_buzz
[1]: https://rosettacode.org/wiki/FizzBuzz
