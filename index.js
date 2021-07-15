const delay = n => new Promise(resolve => setTimeout(resolve, n));

const promises = [
    delay(2000).then(() => 1),
    delay(1000).then(() => 2),
    delay(3000).then(() => {
        throw new Error('Boom');
    }),
];

/*
const testePromiseAll = async () => {
    try {
        const result = await Promise.all(promises);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

testePromiseAll();
*/

const testePromiseAllSettled = async () => {
    try {
        const result = await Promise.allSettled(promises);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

testePromiseAllSettled();

// Promise.all(promises).then(console.log).catch(console.error);
// Error: Boom
//     at /home/heyfelipao/Code/javascript/using-promise-allSettled/index.js:7:15
//     at async Promise.all (index 2)

// Promise.race(promises).then(console.log).catch(console.error);
// retorna a promise que mais rapido for resolvida

// Promise.allSettled(promises)
//     .then(res => res.filter(p => p.status === 'fulfilled'))
//     .then(res => res.map(p => p.value))
//     .then(console.log);

/*
Promise.allSettled(promises)
    // .then(res => res.map(p => console.log(`Status: ${p.status} - value: ${p.value}`)));
    .then(res => console.log(res));
*/