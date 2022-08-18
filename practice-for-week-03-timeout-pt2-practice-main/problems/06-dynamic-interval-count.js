/***********************************************************************
Write a function, `dynamicIntervalCount`, that accepts a callback, a delay
in milliseconds, and an optional amount as arguments. The function should
set an interval with the given callback and delay. If an amount argument
is passed, the interval should be cleared after the callback has been
called 'amount' number of times. If an amount argument is not passed,
the interval should not be cleared and `dynamicIntervalCount` should instead
return the Timeout object for the interval.

In addition to Mocha, we recommend that you test your code manually using
node with the examples below.

Examples:
***********************************************************************/

function dynamicIntervalCount(cb, delay, amount) {
  const interval = setInterval(function(){
    if(amount === undefined) setInterval(cb,delay);
    cb();
    amount--;
    if(amount === 0) clearInterval(interval)
  }, delay)

  console.log(interval)
  return interval
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = dynamicIntervalCount;
} catch {
  module.exports = null;
}
