class MyPromise extends Promise {
    syncThen(fn) {
        const value = fn();
        return this.then(_ => value);
    }
}
let promise = new MyPromise((resolve) => {
    console.log(1);
    resolve();
}).syncThen(() => {
    console.log(2);

}).then(() => {
    console.log(3);
})
console.log(4);