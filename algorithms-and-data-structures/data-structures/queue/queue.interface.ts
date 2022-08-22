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

export default QueueADT
