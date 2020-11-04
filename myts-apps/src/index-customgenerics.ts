// class Queue {
//     private data = [];
//     push = item => this.data.push(item);
//     pop = () => this.data.shift();
// }
// const queue = new Queue();
// queue.push(10.78);
// queue.push("111.8999");
// console.log(queue.pop().toFixed(1));
// console.log(queue.pop().toFixed(1)); 

//Add generincs
class Queue<T> {
    private data = [];
    push = (item: T) => this.data.push(item);
    pop = (): T => this.data.shift();
}
const numQueue = new Queue<number>();
numQueue.push(10.78);
//numQueue.push("23.899");
console.log(numQueue.pop().toFixed(1));
