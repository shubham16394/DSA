function maxProfitGreedy(stockPrices) {
    // your code goes here

    // MinHeap - 
    //          Heapify - Creates Min Heap
    //          Get First Node
    //          Remove First Node
    //          Insert Node



    // check every current price if it is bigger than heap val, calculate profit insert price
    
    class MinHeap {
        constructor() {
            this.heap = [];
        }

        heapify() {
            for(let i=this.heap.length-1; i>=0; i--) {
                let index = i;
                while(index < this.heap.length) {
                    let minChild;
                    if(this.heap[2*index+1] && this.heap[2*index+2]) {
                        if(this.heap[2*index+1] < this.heap[2*index+2]){
                            minChild = 2*index+1;
                        }
                        else {
                            minChild = 2*index+2;
                        }
                    }
                    else if(this.heap[2*index+1]) {
                        minChild = 2*index+1;
                    }
                    else if(this.heap[2*index+2]) {
                        minChild = 2*index+2;
                    }
                    else {
                        break;
                    }
                    if(minChild && this.heap[index] > this.heap[minChild]) {
                        [this.heap[index], this.heap[minChild]] = [this.heap[minChild], this.heap[index]];
                        index = minChild;
                    }
                    else {
                        break;
                    }
                }
            }
        }

        peek() {
            return this.heap[0];
        }

        insert(val) {
            this.heap.push(val);
            this.heapify();
        }

        remove() {
            const val = this.heap.shift();
            const pushVal = this.heap.pop();
            if(pushVal !== undefined || pushVal !== null) {
                this.heap.unshift();
                this.heapify();
            }
            return val;
        }
    }

    const minHeap = new MinHeap();

    let profit = 0;
    for(let sp of stockPrices) {
        if(minHeap.heap.length && sp > minHeap.peek()) {
            profit += sp - minHeap.peek();
            minHeap.remove();
        }
        minHeap.insert(sp);
    }

    return profit; 
}

//  debug your code below
console.log(maxProfitGreedy([1, 10, 2, 3]));