import QueueADT from './queue.interface'
import ArrayQueue from './queue-array'

const testSubjects = [
  ArrayQueue
]

for (const Queue of testSubjects) {
  describe(`Queue structure "${Queue.id}"`, () => {
    it('performs basic queue operations', () => {
      const queue = new Queue<number>()
      expect(queue.peek()).toEqual(undefined)
      expect(queue.length()).toBe(0)
      expect(queue.isEmpty()).toBe(true)

      expect(queue.dequeue()).toBe(undefined)
      expect(queue.peek()).toEqual(undefined)
      expect(queue.length()).toBe(0)
      expect(queue.isEmpty()).toBe(true)

      expect(queue.enqueue(2)).toBe(1)
      expect(queue.peek()).toEqual(2)
      expect(queue.length()).toBe(1)
      expect(queue.isEmpty()).toBe(false)

      expect(queue.enqueue(4)).toBe(2)
      expect(queue.peek()).toEqual(2)
      expect(queue.length()).toBe(2)
      expect(queue.isEmpty()).toBe(false)

      expect(queue.dequeue()).toBe(2)
      expect(queue.peek()).toEqual(4)
      expect(queue.length()).toBe(1)
      expect(queue.isEmpty()).toBe(false)

      expect(queue.dequeue()).toBe(4)
      expect(queue.peek()).toEqual(undefined)
      expect(queue.length()).toBe(0)
      expect(queue.isEmpty()).toBe(true)

      expect(queue.dequeue()).toBe(undefined)
      expect(queue.peek()).toEqual(undefined)
      expect(queue.length()).toBe(0)
      expect(queue.isEmpty()).toBe(true)
    })
  })
}
