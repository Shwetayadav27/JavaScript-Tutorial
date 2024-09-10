// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         document.write("*");
//     }
//     document.write("<br>");
// }

// for(let i=1;i<=4;i++){
//     for(let j=1;j<=6-i;j++){
//         document.write("*");
//     }
//     document.write("<br>");
// }

// let arr=[10,'apple',true]
// let newarr = arr.map(i=>i)
// document.write(newarr)

// let arr = [10,20,30,40,55,67,23,34,59]
// let newarr=arr.map(i=> i%2==0 ? i : " ")

// document.write(newarr)
// let arr = [10,20,30,40]
// let double = i=>i*2
// let myarr = arr.map(double)
// document.write(myarr)

// let arr = [10,20,30,40]
// arr.forEach((item,index) => document.write(`${index}: ${2*item}<br>`)) 

for(let i=1;i<=5;i++){
    for(let j=1;j<=5-i;j++){
        document.write("&nbsp");
    }
    for(let k=1;k<=i;k++){
        document.write("*");
    }
    document.write("<br>");
}