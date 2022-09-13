# Map aka Apply-To-All

Map (also known as "apply to tall") is a one-to-one mapping of a collection. It applies
a given function to each element of a collection (array, list, set, etc), returning
the results in a collection of the same type.

## Write the Map Algorithm

Write a function `map` that takes a function `mapper` and an array `array` as arguments,
and returns an array with the results of applying `mapper` to each element of `array`.

## Function signature

```typescript
function map <T, U> (mapper: (arg: T) => U, array: T[]): U[]
```

## Resources

- [Map at Wikipedia](https://en.wikipedia.org/wiki/Map_(higher-order_function))
