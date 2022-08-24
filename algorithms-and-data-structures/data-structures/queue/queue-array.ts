import QueueADT from './queue.interface'

class Queue<T> implements QueueADT<T> {
  items: T[]

  constructor () {
    this.items = []
  }

  enqueue (item: T): number {
    return this.items.push(item)
  }

  dequeue (): T | undefined {
    if (this.isEmpty()) {
      throw new Error('Cannot dequeue empty queue')
    }

    return this.items.shift()
  }

  peek (): T | undefined {
    if (this.isEmpty()) {
      throw new Error('Cannot peek empty queue')
    }

    return this.items.at(0)
  }

  length (): number {
    return this.items.length
  }

  isEmpty (): boolean {
    return this.items.length === 0
  }

  static id = 'array-based queue'
}

export default Queue
