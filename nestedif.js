//1.check positive and even.
// let num = 8;
// if (num > 0) {
//     if (num % 2 == 0) {
//         console.log("Positive and Even");
//     }
// }

//2.check age and driving eligibility
// let age = 20;
// if (age >= 18) {
//     if (age >= 18) {
//         console.log("Eligible for driving");
//     }
// }

//3.check Exam eligibility.
// let attendance = 80;
// let marks = 60;

// if (attendance >= 75) {
//     if (marks >= 35) {
//         console.log("Eligible and Passed");
//     } else {
//         console.log("Eligible but Failed");
//     }
// } else {
//     console.log("Not eligible due to low attendance");
// }

//4.check user name and password.
// let username = "admin";
// let password = "1234";
// if (username == "admin") {
//     if (password == "1234") {
//         console.log("Login Successful");
//     } else {
//         console.log("Wrong Password");
//     }
// } else {
//     console.log("Wrong Username");
// }

//5.check Number range and even/odd.
// let num = 24;

// if (num >= 1 && num <= 100) {
//     if (num % 2 == 0) {
//         console.log("Number is between 1 and 100 and Even");
//     } else {
//         console.log("Number is between 1 and 100 and Odd");
//     }
// } else {
//     console.log("Number is outside the range");
// }

//6.atm  withdrawal.
let balance = 10000;
let withdraw = 5000;
if (withdraw > 0) {
    if (withdraw <= balance) {
        if (withdraw % 100 == 0) {
            console.log("Withdrawal Successful");
        } else {
            console.log("Enter amount in multiples of 100");
        }
    } else {
        console.log("Insufficient Balance");
    }
} 
else {
    console.log("Invalid Amount");
}