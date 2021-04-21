class MyPromise {
  static PENDING = "pending";

  static FULFILLED = "fulfilled";

  static REJECTED = "rejected";

  constructor(executor) {
    this.status = MyPromise.PENDING;
    this.value = null;
    this.callbacks = [];
    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }

  resolve(value) {
    if (this.status == MyPromise.PENDING) {
      this.status = MyPromise.FULFILLED;
      this.value = value;
    }
    this.callbacks.forEach((callback) => {
      setTimeout(() => {
        callback.onFulfilled(this.value);
      });
    });
  }

  reject(reason) {
    if (this.status == MyPromise.PENDING) {
      this.status = MyPromise.REJECTED;
      this.value = reason;
      if (reason instanceof Error) {
        //如果异常没有被then处理，则应该在最后抛出该异常
        this.exception = true;
      }
      setTimeout(() => {
        setTimeout(() => {
          if (this.exception) {
            throw reason;
          }
        });
      });
    }
    this.callbacks.forEach((callback) => {
      this.exception = false;
      setTimeout(() => {
        callback.onRejected(this.value);
      });
    });
  }

  then(onFulfilled, onRejected) {
    this.exception = false;
    if (typeof onFulfilled != "function") {
      onFulfilled = () => this.value;
    }
    if (typeof onRejected != "function") {
      onRejected = () => this.value;
    }
    let promise = new MyPromise((resolve, reject) => {
      if (this.status == MyPromise.PENDING) {
        this.callbacks.push({
          onFulfilled: (value) => {
            try {
              this.parse(promise, onFulfilled(value), resolve, reject);
            } catch (error) {
              reject(error);
            }
          },

          onRejected: (reason) => {
            try {
              this.parse(promise, onRejected(reason), resolve, reject);
            } catch (error) {
              reject(error);
            }
          }
        });
      }
      if (this.status == MyPromise.FULFILLED) {
        setTimeout(() => {
          try {
            this.parse(promise, onFulfilled(this.value), resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      }
      if (this.status == MyPromise.REJECTED) {
        setTimeout(() => {
          try {
            this.parse(promise, onRejected(this.value), resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      }
    });
    return promise;
  }

  parse(promise, result, resolve, reject) {
    if (promise == result) {
      throw new TypeError(`Chaining cycle detected`);
    }
    if (result instanceof MyPromise) {
      result.then(resolve, reject);
    } else {
      resolve(result);
    }
  }
}
