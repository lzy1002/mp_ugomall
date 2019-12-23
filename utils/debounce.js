export function deBounce(fn, time) {
  let timeId = null;
  return function(args) {
    clearTimeout(timeId);
    timeId = setTimeout(() => {
      fn(...args);
    }, time)
  }
}
