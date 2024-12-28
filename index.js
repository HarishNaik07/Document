let newHeading  = document.createElement("h1");
newHeading.innerHTML = "<i>Hi,new Heading<i/>";

document.querySelector("body").prepend(newHeading);
newHeading.remove();


let newButton = document.createElement("button");
newButton.innerText = "Click me";

newButton.style.backgroundColor = "red";
newButton.style.color = "white";


let heading = document.createElement("h1");
heading.innerText= "New Heading";

document.querySelector(".box").before(heading);

let chan = document.querySelector(".box");
chan.classList.add("box","newone");


document.querySelector("body").prepend(newButton);


document.querySelector("#box");


let para = document.querySelector("p");
para.classList.add("newClass");
para.classList.remove("newClass");


//DOM events

let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    console.log("btn was clicked1");
})
  
btn.addEventListener("click",()=>{
    console.log("btn was clicked2");
})

const handler3 = ()=>{
    console.log("btn was clicked  -handler 3");
}

btn.addEventListener("click",handler3);

btn.addEventListener("click",()=>{
    console.log("btn was clicked4");
})

btn.removeEventListener("click",handler3);

 //Practice 1

//  let btn1 = document.querySelector("#change");
//  let body = document.querySelector("body");
//  let currMode = "light";

//  btn1.addEventListener("click",()=>{
//     if(currMode === "light"){
//         currMode = "dark";
//         //document.querySelector("body").style.backgroundColor="black";
//         body.classList.add("dark")
//     }else{
//         currMode = "light";
//         //document.querySelector("body").style.backgroundColor="white";
//         body.classList.add("light");
//     }
//     console.log(currMode);
//  });


 //mouseover change

 let mouse  = document.querySelector("#mouse");

let mode = "red";

let body = document.querySelector("body");

 mouse.addEventListener("mouseover",()=>{
    if(mode === "green"){
        mode = "red";
        body.style.backgroundColor = "red";
    }else{
        mode="green"
       body.style.backgroundColor = "green";
    }
 });


//  let get  = document.querySelector("#get");
//  get.getAttribute();
// get.setAttribute("#get","this is attribute","newone");



//objects

// const property = "firstName";
// const name = "Harish"
// const user = {
//     name:"Harish",
//     age:"24",
//     "like this video":true
//     // [property] :name,

// }
// console.log(user)
// for(key in user){
//     console.log(user[key]);
// }

const obj = {
    a:"one",
    b:"two",
    a:"three"
}
console.log(obj);

let nums={
    a:100,
    b:200,
    title:"My nums",
}
multiplyByTwo(nums);

function multiplyByTwo(obj){
    for(key in obj){
        if(typeof obj[key] === "number"){
            obj[key]*=2;
        }
    }
}
console.log(nums);

const a={};
const b={key:"b"};
const c = {key:"c"};

a[b]=123;
a[c]=456;
console.log(a[b]);


const user1 = {
    name:"Harish",
    age:24,
}
const strObj = JSON.stringify(user1);
//to convert into an object agagin

localStorage.setItem("test",strObj);

console.log(JSON.parse(strObj));

//write a function that flattens a nested object

var cars = {
    label:'Autos',
    subs:[
        {
            label:'SUV',
            subs:[]
        },
        {
            label:'Trucks',
            subs:[
                {
                    label:'2 wheel Drive',
                    subs:[]
                },
                {
                    label:'4 wheel drive',
                    subs:[
                       {
                        label:'Ford',
                        subs:[]
                       },
                       {
                        label:'chervolet',
                        subs:[]
                       }

                    ]
                }
            ]
        }
    ]
};

function itertedObj(obj){
    for(var key in obj){
        if(typeof obj[key] ==="object" && obj[key] !==null){
            itertedObj(obj[key]);
        }else{
            console.log(key + " : ",obj[key]);
        }
    }
};
itertedObj(cars);


//Shallow copy

let employee = {
    eid :"E102",
    ename:"Jack",
    eaddress:"New York",
    salary:50000
}
console.log("Employee=>",employee);
let newEmployee = employee;  //shallowcopy
console.log("New Employee=>" ,newEmployee);

//after modification

newEmployee.ename = "Beck";
console.log("Employee=>",employee);
console.log("NewEmployee=>",newEmployee);

let employee1 = {

    eid:"E103",
    ename:"Rocky",
    eaddress:"Mumbai",
    salary:100000
};

console.log("Employee1=>",employee1);
let newEmployee1 = JSON.parse(JSON.stringify(employee1));
console.log("Employee1=>",employee1);
console.log("New Employee1=>",newEmployee1);

//after modification

newEmployee1.ename = "Yash";
newEmployee1.salary = 150000;
console.log("Employee1=>",employee1);
console.log("NewEmployee1=>",newEmployee1);

  

const array = [10, 20, 30, 40];
const result = array.map((num) => num / 2).filter((num) => num >= 15);
console.log(result);

let counter = 0;
for (var i = 1; i <= 10; i++) {
  counter+= i;
}
console.log(counter);
console.log(i);

const object1 = {
    a: 10,
    b: 20,
    c: function () {
      console.log(this.a + this.b);
    },
  };
  const func = object1.c;
  func();

  function calculateTip(tipPercentage,billAmount){
   if(isNaN(tipPercentage) || isNaN(billAmount) || billAmount<0 || tipPercentage<0){
    return "valid positive number for both the inputs"
   }
   const tip = (billAmount*tipPercentage)/100;

   return tip;
  }
  const  bill = 100;
  const tipPercent = 15;
  const tip = calculateTip(bill,tipPercent);
  console.log(`The tip for a bill of $${bill} with a ${tipPercent}% tip is $${tip}.`);

  function greetHello(name) {
    return `Hello, ${name}!`;
  }
  console.log(greetHello("Brian"));


const runProcess = async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    if(data.userId === 2){
        data.completed == false;
        data.title == false;
    }else{
        data.completed == true;
    }
    console.log(data);
};
runProcess();


Array.prototype.myMap = function(cb){
    let temp=[];
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){
            temp.push(this[i]);
        }
    }
    return temp;

const number = [1,2,3,4,5];
const res = number.myMap((n)=>{
    return n*2;
})
console.log(res);