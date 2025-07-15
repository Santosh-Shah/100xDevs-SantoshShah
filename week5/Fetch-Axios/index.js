const axios = require('axios');


// By using fetch() function

// async function main() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await response.json();
//   console.log(data);
// };

// main();



// function main() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(async response => {
//       const data = await response.json();
//       console.log(data);
//     })
// }

// main();






// By using axios 
// async function main() {
//     const data =  await axios.get('https://jsonplaceholder.typicode.com/users');
//     console.log(data.data);
// }

// main();




// async function main() {
//   const data = await axios.post('https://jsonplaceholder.typicode.com/users', {
//     name: 'Santosh',
//     email: 'test@example.com'
//   })

//   console.log(data.data.name);
// }
//   // .then(response => console.log(response.data));

// main();



// Post method

// fetch('https://httpdump.app/dumps/b6c91920-11ee-439b-907f-4819b2034a0c', {
//   method: 'POST',
//   body: JSON.stringify({ name: 'Omprakash Shah', email: 'test@example.com' }),
//   headers: { 'Content-Type': 'application/json' }
// })
//   .then(response => response.json())
//   .then(data => console.log(data.headers));


// async function main() { 
//   const response = await fetch('https://httpdump.app/dumps/b6c91920-11ee-439b-907f-4819b2034a0c', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({ name: 'Santosh', email: 'test@example.com' })
// })
//   const data = await response.json();
//   console.log(data.name);
//   console.log(data.email);
//   console.log(data);
// }

// main();







// axios.post('https://jsonplaceholder.typicode.com/users', {
//   name: 'Santosh Shah',
//   email: 'shasantosh679@gmail.com',
//   phone: '9811243552'
// }).then(response => console.log(response.data));




// async function main() {
//   const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
//     name: 'Hariom Shah',
//     email: 'hariom@gmail.com',
//     phone: '9811243552'
//   })
//   console.log(response.data);
// };

// main();




//  async function main() {
//   const response = await axios(
//   {
//     method: 'POST',
//     url: 'https://httpdump.app/dumps/b6c91920-11ee-439b-907f-4819b2034a0c',
//     data : {
//       name: 'Hariom Shah',
//       email: 'hariom@gmail.com',
//       phone: '9811243552'

//     },
//     headers: {
//       Authorization: "bear 123"
//     }
//   })
//   console.log(response.data);
// };

// main();

