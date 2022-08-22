# Queue

A `queue` is an abstract data type that represents a collection of entities that are
maintained in a sequence and can be modified by the addition of entities at one end of
the sequence and the removal of entities from the other end of the sequence.

The operation of adding an element to the rear of the queue is known as `enqueue`, and
the operation of removing an element from the front is known as `dequeue`. Other
operations may also be allowed, often including a `peek` or front operation that returns
the value of the next element to be dequeued without dequeuing it.

## Write the Queue Data Structure

Write a data structure that holds a sequence of items and implements the following
interface:

```typescript
/**
 * Abstract data type for first-in-first-out collection.
 */
interface QueueADT<T> {
  /**
   * Add item to the back of the queue.
   * @param item Item to add to the back of the queue.
   * @return The new length of the collection.
   */
  enqueue: (item: T) => number

  /**
   * Remove and get item from the front of the queue.
   * @return Item at the front of the queue.
   */
  dequeue: () => T | undefined

  /**
   * Get item from the front of the queue, without remocving it.
   * @return Item at the front of the queue.
   */
  peek: () => T | undefined

  /**
   * Get the number of items in the queue.
   * @return Number of items in the queue.
   */
  length: () => number

  /**
   * Check if the queue is empty (has zero items).
   * @return True if queu is empty, false otherwise.
   */
  isEmpty: () => boolean
}
```

### Resources

- [The Queue Abstract Data Type at Wikipedia][0]

[0]: https://en.wikipedia.org/wiki/Queue_(abstract_data_type)
