
//225. Implement Stack using Queues

var MyStack = function() {
    this.items = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.items.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.items.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
        return this.items[this.items.length - 1 ]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.items.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

/////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * 
 * 
 * 
 * 
 146. LRU Cache
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.map = new Map();
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.map.has(key)){
        return -1;
    }

    let value = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, value);
    return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    this.map.delete(key);
    this.map.set(key, value);
    if (this.map.size > this.capacity) {
        this.map.delete(this.map.keys().next().value);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

//////////////////////////////////////////////////////////////////////////

//232. Implement Queue using Stacks


var MyQueue = function() {
    this.items = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.items.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.items.shift();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.items[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.items.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */