export function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`odihnit ${ms / 1000}sec`);
    }, ms);
  });
}
export function debounce(fn, ms) {
  return function () {
    console.warn("inner");
    console.warn("debounce", fn, ms);
    setTimeout(function () {
      console.info("timeout");
    }, ms);
  };
}
