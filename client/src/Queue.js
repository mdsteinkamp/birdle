class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}


export default class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  enqueue(data) {
    const node = new Node(data)
    this.length ++
    if(this.length === 1) {
      this.first = node
      this.last = node
    } else {
      this.last.next = node
      this.last = node
    }
    return this
  }

  dequeue() {
    if (this.length === 0) return undefined
    this.length --
    const temp = this.first
    this.first = this.next
    return temp.data
  }
}