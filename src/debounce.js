
const debounceTest = function(fn, delay) {
   console.log('clicked debounceTest...', delay);
  let timeOut;
  return function() {
    if(timeOut) {
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
       fn();
    }, delay)
     
  }
}


document.getElementById("debounce").addEventListener("click", debounceTest((e) => {
  console.log('clicked debounceTest child...');
}, 1000));
