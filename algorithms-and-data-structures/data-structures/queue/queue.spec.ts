import QueueADT from './queue.interface'
import ArrayQueue from './queue-array'

const testSubjects = [
  ArrayQueue
]

const checkState = <T>(
  queue: QueueADT<T>,
  peek: T | undefined,
  length: number,
  isEmpty: boolean
): void => {
  expect(queue.peek()).toEqual(peek)
  expect(queue.length()).toBe(length)
  expect(queue.isEmpty()).toBe(isEmpty)
}

for (const Queue of testSubjects) {
  describe(`Queue structure "${Queue.id}"`, () => {
    it('performs basic queue operations', () => {
      const queue = new Queue<number>()
      checkState(queue, undefined, 0, true)

      expect(queue.dequeue()).toBe(undefined)
      checkState(queue, undefined, 0, true)

      expect(queue.enqueue(2)).toBe(1)
      checkState(queue, 2, 1, false)

      expect(queue.enqueue(4)).toBe(2)
      checkState(queue, 2, 2, false)

      expect(queue.dequeue()).toBe(2)
      checkState(queue, 4, 1, false)

      expect(queue.dequeue()).toBe(4)
      checkState(queue, undefined, 0, true)

      expect(queue.dequeue()).toBe(undefined)
      checkState(queue, undefined, 0, true)
    })
  })
}
