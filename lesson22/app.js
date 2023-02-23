let name=['Mike','Nikola','Tom'];
name[0]='Alex';
name.length=1;
console.log(name.length);



let a=[5,3,-4,25,32,-16,6];
let b=[21,-30,9,5,12,-19,5,25];
let sumA=0;
for (let i=0; i<a.length; i++) {
 sumA += a[i];
}
console.log(sumA);

let sumB=0;
for (let i=0; i<b.length; i++) {
 sumB += b[i];
}
console.log(sumB);

function Comparison(sumA,sumB) {
 if(sumA>sumB){
 console.log('a > b');
 } else if (sumA<sumB){
 console.log('a < b');
 } else {
 console.log('a == b');
 }
}
Comparison(sumA,sumB);


let phrase='I am learning JavaScript rigth now';
console.log(phrase.split(' '));


let a=[5,3,8,5,3,2,1,2];
let b=[];
a.forEach((element)=>{
 if (b.indexOf(element) === -1) {
    b.push(element);
  }
  }
);
console.log(b);

let users =[
    {id:1, age:17},
    {id:2, age:18},
    {id:3, age:19},
    {id:4, age:21},
    {id:5, age:17},
    {id:6, age:20},
    {id:7, age:25}
];
function selectionAge(users){
    users.filter(user=>{
    if (user.age>18 && user.age<21){
    console.log(user.id);
     }
     });
    }
    selectionAge(users);