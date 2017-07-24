// exercise 1

var p = Promise.resolve('Hello Promise!');

p.then(function(message) {
  setTimeout(function() {
    console.log(message)
  }, 1000);
});

//exercise 2

function delay(milliseconds) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(milliseconds);
    }, milliseconds);
  });
}

function countDown(milliseconds) {
  if(milliseconds > 0){
    console.log(milliseconds);
    return delay(milliseconds - 100);
  }
  else {
    console.log("Done!");
  }
}

delay(1000)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)

// exercise 3

function numSquared(num) {
  var p3 = new Promise(function(resolve, reject) {
    if (typeof num === 'undefined') {
      reject('please enter a number');
    } else {
      resolve(num * num);
    }
  });
  p3.then(function(result) {
    console.log(result);
  });
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr = arr.map(function(x) {
  return numSquared(x);
});

Promise.all(arr)
  .then(function(results) {
    console.log(results);
  });
