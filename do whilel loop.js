let correctpin = 1234;
let userpin;
do{
    userpin =parseIn("enter your pin : ");
} while (userpin !== correctpin);
console.log("correct pin access!!");