/***********************************************************************
Write a function, `intervalCount`, that accepts a callback, a delay in
milliseconds, and an amount. The function should set an interval with
the given callback and delay, but clear the interval after the callback
has been executed 'amount' number of times.

Hint: utilize a 'closure' to your advantage

In addition to Mocha, we recommend that you test your code manually using
node with the examples below.

Example
***********************************************************************/

// function intervalCount(cb, delay, amount) {
//   const interval = setInterval(times => {
//     cb()
//     amount--
//     if (amount === 0) clearInterval(interval)
//   }, delay)
// }

function intervalCount(cb, delay, amount) {
  const interval = setInterval(() => amount > 0 ? typeof (amount--) === "number" ? cb() : null : clearInterval(interval), delay)
}

// made one liner cuz why not
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = intervalCount;
} catch {
  module.exports = null;
}
