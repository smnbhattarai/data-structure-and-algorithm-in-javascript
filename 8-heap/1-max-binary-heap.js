/**
 * Max Binary Heap
 * 2n + 1
 * 2n + 2
 */
class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element <= parent) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    // Remove max element
    extractMax() {
        const max = this.values[0];
        if (this.values.length > 0) {
            this.values[0] = this.values.pop();
            this.bubbleDown();
        }
        return max;
    }

    bubbleDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }

    get() {
        return this.values;
    }

}

let heap = new MaxBinaryHeap();
heap.insert(1);
console.log(heap.get());
heap.insert(33);
console.log(heap.get());
heap.insert(12);
console.log(heap.get());
heap.insert(27);
console.log(heap.get());
heap.insert(18);
console.log(heap.get());
heap.insert(45);
console.log(heap.get());
console.log(heap.extractMax());
console.log(heap.get());