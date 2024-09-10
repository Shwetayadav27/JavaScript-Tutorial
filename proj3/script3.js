// function oddeven(num){
//     if(num%2==0){
//         return `${num} is even`
//     }
//     else{
//         return `${num} is odd`
//     }
// }
// console.log(oddeven(10))
// let oddeven=function(num){
//     return `Number ${num} is ${num%2==0 ?"even":"odd"}`
// }
// console.log(oddeven(99));

// let age=function(num){         //function expression
//     return `${num}`
// }
// console.log(age(21))
// let greeting= ()=>{  
//      return "welcome"                      //arrow function

// } 
// console.log(greeting()) 
                                                    // arrow function mainly
// let greeting=(name)=>`welcome, ${name}`
// console.log(greeting("Ravi"))

// let sum=(a,b) => a+b
// console.log(sum(2,3))

// (function msg(a,b){             //IIFE
//     console.log(`sum of ${a} and ${b} is ${a+b}`);
    
// })(12,13)

// function* myGen(){
//     yield 1
//     yield 2
//     yield 3
//     yield 4

// }
// const g=myGen()
// console.log(g.next().value)
// console.log(g.next().value)
// console.log(g.next().value)
// console.log(g.next().value)
// console.log(g.next().value)

// function *myGen(){
//     for(let i=0;i<=10;i++){
//         yield i;
//     }
// }

// const g=myGen()
// for(let i=1;i<=10;i++){
//     console.log(g.next().value);
    
// }

// console.log("hello" && "welcome");
// console.log("" && "welcome");
// console.log("hello" && "");
// console.log(12 && 13);
// console.log(null &&  13);

// let a=10
// console.log(a>10 && "a is greater than 10");
// console.log("hello");

// console.log(!"hello")

// console.log(!!"hello")
// let a=12
// console.log(a>10 || "a is greater than 10");

    // var x=30;
    // var y=20;
    // if(x >= y && y <= 20){
    //     document.write(true);
    // }

    // let a=10
    // let show=a>5 ? "a is greater than 5": "a is not greater than 5"
    // console.log(show);

//     var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]%2==0) 
//             console.log(arr[i],"divisible by 2")
//         else if(arr[i]%3==0) 
//             console.log(arr[i],"divisible by 3")
//         else(arr[i]%5==0) 
//              console.log(arr[i],"divisible by 5")
// }

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }

// let arr=[10,55,68,3,49,35]
// let max=arr[0];
// for(let i=1;i<arr.length;i++){
//     if(max<arr[i]){
//         max=arr[i]
//     }
// }
// console.log(max)

// let arr=[10,55,68,3,49,35]
// let min=arr[0];
// for(let i=1;i<arr.length;i++){
//     if(min>arr[i]){
//         min=arr[i]
//     }
// }
// console.log(min)

let arr=[4,8,5,2,9]
let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i]
}
console.log(sum)

count=0;
for(let i=0;i<arr.length;i++){
    count+=1;
}
console.log(count)
let avg;
avg=sum/count;
console.log(avg);
