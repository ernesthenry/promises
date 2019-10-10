const  order = true;
const breakfastPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(order){
            resolve('Your order is ready. Come and get it')
        }
        else{
            reject(Error('Your order cannot be made')) 
        }

    }, 3000)
});

console.log(breakfastPromise);

breakfastPromise
.then(val => console.log(val) )
.catch(err =>  console.log(err) );



// using Named functions

function onResolve(){
    console.log('Your order is ready. Come and get it');
}

function onReject(){
    console.log('Your order cannot be made');
}

const breakfastPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(order){
            resolve()
        }
        else{
            reject(Error()) 
        }

    }, 3000)
});

// pass then a reference to onResolve and catch a reference to onReject.
breakfastPromise
.then(onResolve)
.catch(onReject)


// Promise Chaining

function addfive(n){
    return n+5;
}

function double(n){
    return n*2;
}

function finalValue(nextvalue){
    console.log(`The final value is ${nextvalue}`)
}


const mathPromise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        if (typeof value === number ){
            resolve(value);
        }
        else{
            reject('You must specify a number as the value.')
        }
    },
    3000)
});


const value = 5;
mathPromise
  .then(addFive)
  .then(double)
  .then(finalValue)
  .catch( err => console.log(err) )

// The final value is 20


const value = 5;
mathPromise
  .then(addFive)
  .then(double)
  .then(addFive) // called twice
  .then(finalValue)
  .catch( err => console.log(err) )

// The final value is 25



const value = '5';
mathPromise
  .then(addFive)
  .then(double)
  .then(finalValue)
  .catch( err => console.log(err) )

// You must specify a number as the value.
