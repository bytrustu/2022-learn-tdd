class Stack {
    constructor() {
        this._size = 0;
        this.head = null;
    }

    size() {
        return this._size;
    }

    push(value) {
        const node = { value, next: this.head };
        this.head = node;
        this._size++;
    }

    pop() {
        if (this.head === null) {
            throw new Error('스택이 비어있습니다.');
        }
        const node = this.head;
        this.head = node.next;
        this._size--;
        return node.value;
    }

    peek() {
        if (this.head === null) {
            throw new Error('스택이 비어있습니다.');
        }
        return this.head.value;
    }
}


module.exports = Stack;
