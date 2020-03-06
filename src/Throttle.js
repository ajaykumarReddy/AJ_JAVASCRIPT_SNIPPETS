const throttleFn = (fn, delay) => {
 
  let last = 0;
  return (e)=> {
    let now = new Date().getTime();
    if(now - last < 2000) {
       return ;
    }
    fn();
    last = now;
  }
}

document.getElementById('throttle').addEventListener('click', throttleFn(()=> {
   console.log('trolle after 2s..');
}, 2000))
