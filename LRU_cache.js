class Node {
    
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }

}

class LRUCache {
    // your code goes here
    
    
    constructor(n) {
        // your code goes here
        this.n = n;
        this.cacheMap = new Map();
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    get(key) {
        // your code goes here
        if(this.cacheMap.has(key)) {
            const nodePointer = this.cacheMap.get(key);
            console.log('nodePointer', nodePointer)
            const tail = this.moveNode(nodePointer);
            console.log('tail', tail)
            const val = tail.value;
            return val;
        }
        else {
            return null;
        }

    }

    set(key, val) {
        // your code goes here
        console.log(key, val)
        if(this.cacheMap.has(key)) {
            const nodePointer = this.cacheMap.get(key);
            nodePointer.value = val;
            this.moveNode(nodePointer);
        }
        else {
            this.insertNode(key, val);
        }
        return;
    }

    insertNode(key, val) {
        const newNode = new Node(key, val);
        this.cacheMap.set(key, newNode);
        console.log('this.cacheMap', this.cacheMap)
        if(this.tail) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        else {
            this.head = newNode;
            this.tail = newNode
        }
        this.count += 1;
        if(this.count > this.n) {
            const headKey = this.head.key;
            this.head = this.head.next;
            this.cacheMap.delete(headKey);
        }
        console.log('head', this.head, 'tail', this.tail, newNode, this.cacheMap)
    }


    moveNode(pointer) {
        const prevNode = pointer.prev;
        const nextNode = pointer.next;

        if(prevNode && nextNode) {
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
            if(this.tail) {
                this.tail.next = pointer;
                pointer.prev = this.tail;
                pointer.next = null;
                this.tail = pointer;
            }
        }
        else if(this.tail === null) {
            this.tail = pointer;
        }
        return this.tail;
    }
}

// debug your code below
let cache = new LRUCache(2);
cache.set('user1', 'Alex');
cache.set('user2', 'Brian')
cache.set('user3', 'Chris');
cache.set('user4', 'Shalu')
console.log(cache.get('user4'));
console.log(cache.get('user3'));
