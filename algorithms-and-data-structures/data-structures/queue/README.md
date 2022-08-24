# Queue

A `queue` is an abstract data type that represents a collection of entities that are
maintained in a sequence and can be modified by the addition of entities at one end of
the sequence and the removal of entities from the other end of the sequence (also known
as FIFO order for first in first out).

The operation of adding an element to the rear of the queue is known as `enqueue`, and
the operation of removing an element from the front is known as `dequeue`. Other
operations may also be allowed, often including a `peek` or front operation that returns
the value of the next element to be dequeued without dequeuing it.

Other common operations include `length`, that returns the number of entities in the
queue, and `isEmpty`, that returns `true` if the queue has zero entities and `false`
otherwise.

## Build the Queue Data Structure

Build a data structure, `Queue`, with methods `enqueue`, `dequeue`, `peek`, `length`,
and `isEmpty`.

The methods `dequeue` and `peek` must throw an error if called on an empty queue.

## Structure Interface

```typescript
interface QueueADT<T> {
  enqueue: (item: T) => number
  dequeue: () => T | undefined
  peek: () => T | undefined
  length: () => number
  isEmpty: () => boolean
}
```

### Resources

- [The Queue Abstract Data Type at Wikipedia][0]

[0]: https://en.wikipedia.org/wiki/Queue_(abstract_data_type)
