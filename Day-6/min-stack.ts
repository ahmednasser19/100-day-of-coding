type QNode<T> = {
  value: T;
  next?: QNode<T>;
  minValue?: T | undefined;
};

class MyMinStack {
  public length: number;
  private head: QNode<number> | undefined | null;
  constructor() {
    this.length = 0;
    this.head = null;
  }

  push(val: number): void {
    const node = { value: val } as QNode<number>;
    if (!this.head) {
      this.head = node;
      node.minValue = val;
      this.length++;
    }

    if (val < this.head.minValue) {
      node.minValue = val;
    } else {
      node.minValue = this.head.minValue;
    }

    this.head.next = this.head;
    this.head = node;
    this.length++;
  }

  pop(): void {
    if (!this.head) {
      return;
    }

    this.head = this.head?.next;
    this.length--;
  }

  top(): number {
    if (!this.head) {
      return null;
    }
    return this.head.value;
  }

  getMin(): number {
    if (!this.head) {
      return null;
    }
    return this.head.minValue;
  }
}
