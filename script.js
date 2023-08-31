//1

// const addition= (a, b) =>  a+b  
// console.log(addition(3,2));

// const arr = [3, 2]

// const result = arr.reduce((a, b) => a + b)

// console.log(result);


//2

// let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1]

// let max = arr[0]

// for(i=0; i>arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//     }
// }
// console.log(max);

// let arr = [5, 10, -3, 12, -9, 5, 90, 0, 1];

// let max = arr[3];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// console.log(max);

// function largest(arr) {
//        let max = arr[0];
//     for (i = 1; i < arr.length; i++) {
//         if (arr[i] > max)
//             max = arr[i];
//     }
     
//     return max;
// }
 
// let arr = [5, 10, -3, 12, -9, 5, 90, 0, 1];

// console.log(largest(arr));

// function isPrime(num){
//     for(let i = 2; i <= num; i++){
//       if(num % i === 0){
//         isPrime = false;
//       } else {
//         isPrime = true;
//       }
//     }
//     return isPrime;
  
//   }
//   console.log(isPrime(1));
  


// const number = 6;
// let isPrime = true;

// if (number > 1) {
//     for(let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//         }
//     }
//     if (isPrime) {
//         console.log(`${number} prime `);
//     } else {
//         console.log(`${number}  not prime `);
//     }
// }


// function isPrime(number) {
// if (number > 1) {
//     for(let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//         }
//     }
//     if (isPrime) {
//         console.log(`${number} prime `);
//     } else {
//         console.log(`${number}  not prime `);
//     }
// }
// return number;

// }
//  isPrime(4)



const mobileMenuToggle = document.getElementById("mobileMenuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    mobileMenuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
    });