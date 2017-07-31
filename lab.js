function fadeIn(element, time) {
  return new Promise(function(resolve) {
    $(element).fadeIn(time, function() {
      resolve(element)
    })
  })
}

function fadeOut(element, time) {
  return new Promise(function(resolve) {
    $(element).fadeOut(time, function() {
      resolve(element)
    })
  })
}

const $titleHeader = $('h1.title');
  fadeOut($titleHeader, 1000)
    .then(function (node) { return fadeIn(node, 2000) })
    .then(function (node) { return fadeOut(node, 1500) })
    .then(function (node) { return fadeIn(node, 2000) })
    .then(function (node) { return fadeOut(node, 1500) })
//
// const title = $('h1.title');


// async function add(n,a=0) {
//   return new Promise((resolve, reject) =>  {
//     const sum = n+a;
//     setTimeout(() => resolve(sum));
//     if(n === NaN || a === NaN) {
//       reject(new Error('That is an invalid input'));
//     }
//   });
// }
//
// async function mult(n,a=0) {
//   return new Promise((resolve, reject) =>  {
//     const mult = n*a;
//     setTimeout( () => resolve(mult));
//     if(n === NaN || a === NaN) {
//       reject(new Error('That is an invalid input'));
//     }
//  });
// }
//
// async function div(n,a=0) {
//   return new Promise((resolve, reject) =>  {
//     const div = n/a;
//     setTimeout( () => resolve(div));
//     if(n === NaN || a === NaN) {
//       reject(new Error('That is an invalid input'));
//     }
//   });
// }
//
// async function sub(n,a=0) {
//   return new Promise((resolve, reject) =>  {
//     const sub = n-a;
//     setTimeout( () => resolve(sub));
//     if(n == NaN || a == NaN) {
//       reject(new Error('That is an invalid input'));
//     }
//   });
// }
//
// async function pow(n,a) {
//   return new Promise((resolve, reject) =>  {
//     const pow = Math.pow(n,a);
//     if(isNaN(n) || isNaN(a)) {
//       reject(new Error('That is an invalid input'));
//     }
//     setTimeout( () => resolve(pow));
//
//   });
// }



// class Counter {
//   constructor (count = 0, step = 1) {
//     this.count = count;
//     this.step = step;
//   }
//   setCount (n) { this.count = n }
//   setStep (step) { this.step = step }
//   inc () { return this.count += this.step }
//   dec () {
//
//
//     return this.count -= this.step
//
//
//    }
//   now () { return this.count }
//   show () { return this.count }
//   reset () {
//     this.count = 0;
//     this.step = 1;
// }
//   time (startTime) {
//     this.setCount(startTime);
//     const that = this;
//     let intervalId = setInterval(function () {
//       //
//       // if (that.dec() <= 0) clearInterval(intervalId);
//
//       if (that.dec() <= 0) return new Promise((resolve, reject) => {
//
//         resolve();
//         clearInterval(intervalId);
//       });
//
//       console.info(that.show());
//     }, 1000);
//   }
// }
