# Contributing

## Documentation

### Readme

Implementations must include a README.md file with explanations, examples, and
resources.

#### Examples

Include at least one example in one or multiple of these forms:
  - Natural language
  - Expression that evaluates to true
  - Jest expect notation

Use whatever is more concise and easily understood.

Two to five examples should be ok, depending on the case. Examples should complement
the explanations. Use the examples to illustrate edge cases, and basic expected inputs
and outputs.

##### Natural Language

```
double(-1) is 1
double(0) is 0
double(1) is 1
double(2) is 4
```

##### Expressions that Evaluate to True.

```typescript
double(-1) === 1
double(0) === 0
double(1) === 1
double(2) === 4
```

##### Jest Expect Notation

```typescript
expect(fun(-1)).tobe(1)
expect(fun(0)).tobe(0)
expect(fun(1)).tobe(1)
expect(fun(2)).tobe(2)
```
