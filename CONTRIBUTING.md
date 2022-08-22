# Contributing

## Documentation

### Readme

Implementations must include a README.md file with explanations, examples, and
resources.

#### Examples

Examples in the README.md file must be written in TypeScript, and must be in one of
this two forms:

- Expressions that evaluate to true
- Jest expect notation

Using expressions that evaluate to true looks like this:

```typescript
fibo(-1) === 0
fibo(0) === 0
fibo(1) === 1
fibo(2) === 1
fibo(3) === 2
// etc ...
```

And using the jest expect notation looks like this:

```typescript
expect(fizzBuzz(10, 18))
  .toEqual(['buzz', '11', 'fizz', '13', '14', 'fizzbuzz', '16', '17'])

expect(fizzBuzz(-3, 3))
  .toEqual(['fizz', '-2', '-1', 'fizzbuzz', '1', '2', 'fizzbuzz'])
```
