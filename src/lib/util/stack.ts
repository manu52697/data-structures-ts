type Stack<T> = {
    push: (element: T) => void
    pop: () => T | undefined
    peek: () => T | undefined
    isEmpty: () => boolean
    clear: () => void
    size: () => number
}



class ArrayStack<T> implements Stack<T> {

    array: T[];
    protected _size: number;

    protected amplify() {
        this.array = new Array<T>(...this.array, ...new Array<T>(this._size))
    }

    constructor(size: number = 50) {
        this.array = new Array<T>(size);
        this._size = 0
    }

    push(element: T) {
        if(2 * this._size > this.array.length){
            this.amplify()
        }
        this.array[this._size] = element;
        this._size++;
    }

    pop() {
        if (this._size > 0){
            const item = this.array[this._size - 1]
            //* Dirty but technically having controlled access to the underlying array, we can do this safely
            this.array[this._size -1] = undefined as unknown as T
            this._size-- ;
            return item;
        }

    }
    peek () {
        if(this._size > 0) return this.array[this._size - 1]
        return undefined
    }
    isEmpty() {
        return this._size === 0;
    }
    clear() {
        this.array = new Array<T>();
        this._size = 0;
    }
    size(){
        return this._size
    }

}