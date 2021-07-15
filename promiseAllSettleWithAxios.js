const axios = require('axios');

const promise1 = axios.get('http://localhost:3000/1');
const promise2 = axios.get('http://localhost:3000/2');
const promise3 = axios.get('http://localhost:3000/3');

const promises = [
    promise1,
    promise3,
    promise2
];

// const testePromiseAll = async () => {
//     try {
//         const result = await Promise.all(promises);
//         console.log(result);
//         console.log('essa mensagem não deve acontecer!')
//     } catch (error) {
//         console.error(error.message);
//     }
// }
// testePromiseAll();

const testePromiseAllSettled = async () => {
    try {
        const result = await Promise.allSettled(promises); // devolve um array
        result.map(r => {
            if (r.value) {
                console.log(r.value.data);
            }
        }); 
        console.log('essa mensagem deve acontecer!')
    } catch (error) {
        console.error('Error: ', error.message);
    }
}
testePromiseAllSettled();
