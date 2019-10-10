const breakfastPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Your order is ready. Come and get it') // resolved promise returns the fulfilled value

    }, 3000)
});

console.log(breakfastPromise);

breakfastPromise.then(val => console.log(val));
