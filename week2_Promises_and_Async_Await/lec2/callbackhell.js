// setTimeout(function () {
// 	console.log("First");

// 	setTimeout(function() {
// 		console.log("Second")

// 		setTimeout(function() {
// 			console.log("Third");
// 		}, 8000);
// 	}, 5000);
// }, 2000);


// Doing same callbackhell using promisified version
// function setTimeoutPromisified(ms) {
// 	return new Promise(resolve => setTimeout(resolve, ms));
// }


// setTimeoutPromisified(2000).then(function() {
// 	console.log("First");

// 	setTimeoutPromisified(5000).then(function() {
// 		console.log("Second");

// 		setTimeoutPromisified(10000).then(function() {
// 			console.log("Third");
// 		});
// 	});
// });




// callback hell with async and await

function setTimeoutPromisified(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}


async function callbackhell() {
	await setTimeoutPromisified(2000);
	console.log("First");
	await setTimeoutPromisified(5000);
	console.log("Second");
	await setTimeoutPromisified(10000);
	console.log("Third");
}

callbackhell();







// function main() {
// 	console.log("This is from main method");
// }

// setTimeoutPromisified(5000).then(main);



// simple solution of callbackhell is this

// function setthree() {
//   console.log("How are you?");
// }

// function steptwo() {
//   console.log("Hello");
//   setTimeout(setthree, 8000);
// }

// function stepone() {
//   console.log("Hi");
//   setTimeout(steptwo, 5000);
// }

// setTimeout(stepone, 2000);



// for more clearity 
// function setthree() {
//   for (let i = 1; i <= 8; i++) {
//     console.log(i + "sec");
//   }
//   console.log("How are you?");
// }

// function steptwo() {
//   for (let i = 1; i <= 5; i++) {
//     console.log(i + "sec");
//   }
//   console.log("Hello");
//   setTimeout(setthree, 8000);
// }

// function stepone() {
//   for (let i = 1; i <= 2; i++) {
//     console.log(i + "sec");
//   }
//   console.log("Hi");
//   setTimeout(steptwo, 5000);
// }

// setTimeout(stepone, 2000);





// Now use the promisified version we saw in the last slide






// function setTimeoutPromisified(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }







// Solution #1 (has callback hell)

// function setTimeoutPromisified(duration) {
//   return new Promise((resolve) => setTimeout(resolve, duration));
// }

// setTimeoutPromisified(1000).then(function () {
//   console.log("hi");
//   setTimeoutPromisified(3000).then(function () {
//     console.log("hello");
//     setTimeoutPromisified(5000).then(function () {
//       console.log("hello there");
//     });
//   });
// });


// setTimeoutPromisified(5000).then(function() {
//   console.log("Print me?");
//   setTimeoutPromisified(2000).then(function() {
//     console.log("Print me again?");
//     setTimeoutPromisified(5000).then(function() {
//       console.log("Print me once again?");
//     });
//   });
// });









// Alt solution - this also called promise chaining

// setTimeoutPromisified(1000)
//   .then(function () {
//     console.log("hi");
//     return setTimeoutPromisified(3000);
//   })
//   .then(function () {
//     console.log("hello");
//     return setTimeoutPromisified(5000);
//   })
//   .then(function () {
//     console.log("hello there");
//   });














// Async await syntax


// function setTimeoutPromisified(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function solve() {
// 	await setTimeoutPromisified(1000);
// 	console.log("hi");
// 	await setTimeoutPromisified(3000);
// 	console.log("hello");
// 	await setTimeoutPromisified(5000);
// 	console.log("hi there");
// }

// solve();

