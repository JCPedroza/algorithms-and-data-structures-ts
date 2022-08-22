# Fizz Buzz

Fizz buzz is a group word game for children to teach them about division. Players take
turns to count incrementally, replacing any number divisible by three with the word
"fizz", any number divisible by five with the word "buzz", and any number divisible
by both 3 and 5 with the words "fizz buzz".

## Write the Fizz Buzz Function

Write a function, `fizzBuzz`, that returns an array of strings of the given
sequence where `from` is inclusive and `to` is exclusive, and where each number is
replaced according to the Fizz Buzz rules.

Return an empty array for incongruent ranges (ranges where `from` is greater than or
equal to `to`).

## Function Signature

```typescript
function fizzBuzz (from: number, to: number): string[]
```

## Examples

```typescript
fizzBuzz(10, 18) returns ['buzz', '11', 'fizz', '13', '14', 'fizzbuzz', '16', '17']
fizzBuzz(-3, 3) returns ['fizz', '-2', '-1', 'fizzbuzz', '1', '2']
fizzBuzz(2, -10) returns []
fizzBuzz(4, 4) returns []
```

## Resources

- [Fizz Buzz at Wikipedia][0]
- [Fizz Buzz at Rosetta Code][1]

[0]: https://en.wikipedia.org/wiki/Fizz_buzz
[1]: https://rosettacode.org/wiki/FizzBuzz
