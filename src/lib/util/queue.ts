class QueueItem<T> {
    next: QueueItem<T> | undefined;
    value: T;

    constructor(value: T) {
        this.value = value;
    }
}


class Queue<T> {
    first: QueueItem<T> | undefined
    last: QueueItem<T> | undefined
    length: number

    constructor() {
        this.first = undefined;
        this.last = undefined;
        this.length = 0;
    }

    add(value: T): number {
        const item = new QueueItem<T>(value);
        if (this.length === 0) {
            this.first = item;
            this.last = item;
        } else {
            //@ts-expect-error if length was !== 0, there is a last element
            this.last?.next = item;
            this.last = item;
        }
        this.length++;
        return this.length;
    }

    pop(): QueueItem<T> | undefined {
        if (this.length === 0) return undefined
        const next = this.first as QueueItem<T>;
        this.first = next.next;
        next.next = undefined;
        this.length--;
        return next;
    }
}