// P R O M I S E S

// When creating a promise, use the Promise constructor
// that requires a callback (named executor sometimes resolver)
// which will be called with two functions: resolve & reject.
new Promise((resolve, reject) => {
  if (false /* something bad happens */) {
    // To "throw an error" inside a promise, use the `reject` function with
    // the error as its argument.
    reject(new Error('Oops!'));
  }

  const resolveValue = 'It worked!';
  // To "return" a value from a promise, call the `resolve` function
  // with the value as its argument. This is the *resolved value* of the
  // promise.
  resolve(resolveValue);
})

// DEMO: Flipping Coins
// function flipCoin() {
//   return new Promise((resolve, reject) => {
//     const side = ['heads', 'tails'][Math.floor(Math.random() * 2)];
//     resolve(side);
//   });
// }

// 👇 flipcoin written with a callback instead of with a Promise 👆

function flipCoinWithCb(cb) {
  const side = ['heads', 'tails'][Math.floor(Math.random() * 2)];
  if (typeof cb === 'function') cb(side);

}

function random(number) {
  return Math.ceil(Math.random() * number);
}

function rollDie(number) {
  return new Promise((resolve, reject) => {
    resolve(random(number));
  })
}


//Demo: Throwing the coin too far
function flipCoin () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const side = ['heads', 'tails'][random(2) - 1];
      resolve(side);
    }, 1000 + random(3000));


    setTimeout(() => {
      reject('The coin was thrown too far!');
    }, 3000);

  });
};

    //A promise can only resolve or reject once
    //Whichever is called first will give the promise its final value
    //Then change the state of the promise from `pending` to `resolved`
    //Or to `rejected`


//Using a promise

//To get the resolved value (shown as [[PromiseValue]] in Chrome) from a promise object
//Use the `.then` method when the promise status is `resolved` or
// use the `.catch method when the promise status is `rejected`
// 👇
// flipCoin()
// .then(resolvedValue => {
//   console.log(resolvedValue);
//   return flipCoin()
// })
// .then(resolvedValue => {
//   console.info('next value:', resolvedValue);
//   return flipCoin()
// })
// .then(console.info)
// .catch(console.info)


//DEMO: Create a delay function

//Promisfy setTimeOut - We're converting the setTimeOut function to work
// as a promise instead
function delay (ms) {
  return new Promise((resolve, reject) => {
    console.log('time:', ms, 'value:', value);
    setTimeout(() => resolve(), ms);
  });
}


//Exercise - Upgrade delay
function delay (ms, val) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(val), ms);
  });
}

//Promise Utility Methods

// Promise.resolve immediately returns a promise that is resolved with an argument
Promise.resolve(20) // returns promise that resolved with PromiseValue 20
// ð shortcut for ð
new Promise((resolve, reject) => resolve(20));

// Promise.reject immediately returns that is rejected with an argument
Promise.reject(20) // returns promise that rejected with PromiseValue 20
// ð shortcut for ð
new Promise((resolve, reject) => reject(20));

// Promise.all

function sequentialDemo () {
  console.time('sequentialDemo total time');
  delay(1000 + random(2000), 10)
    .then(() => delay(1000 + random(2000), 20))
    .then(() => delay(1000 + random(2000), 30))
    .then(() => delay(1000 + random(2000), 40))
    .then(() => delay(1000 + random(2000), 50))
    .then(() => { console.timeEnd('sequentialDemo total time'); })
}

function parallelDemo () {
  console.time('parallelDemo total time');
  Promise.all([
    delay(1000 + random(2000), 10),
    delay(1000 + random(2000), 20),
    delay(1000 + random(2000), 30),
    delay(1000 + random(2000), 40),
    delay(1000 + random(2000), 50)
  ])
    .then(arrOfResolvedValues => {
      console.timeEnd('parallelDemo total time');
      console.log(arrOfResolvedValues)
    })
}


async function MyAsyncFn() {}
const mySecondAsyncFn = async function () {}
const myAsyncArrowFn = async () => {};


//Async function
//async functions were added to Javascript in ES2017. They're fully supported in node 7.6+ and node 8+
//async functions are functions declared prefixed with the keyword `async`
//async functions can treat promise as regular values if they're prefixed
//with the word `await`



async function  () {
  console.time('sequentialDemo total time');
  await delay(1000 + random(2000), 10);
  await delay(1000 + random(2000), 20);
  await delay(1000 + random(2000), 30);
  await delay(1000 + random(2000), 40);
  await delay(1000 + random(2000), 50);
  console.timeEnd('sequentialDemo total time');
}
