//Problem-2//

let function1= (name,callback)=>{
    console.log(name);
    callback()
}
let function2 = ()=>{
    console.log("hello");
}
function1("Arti",function2)
function calltime(){
    setTimeout(()=>{
     console.log("1");
     setTimeout(()=>{
         console.log("2");
         setTimeout(()=>{
             console.log("3");
             setTimeout(()=>{
                 console.log("4");
                 setTimeout(()=>{
                     console.log("5");
                     setTimeout(()=>{
                         console.log("6")
                         setTimeout(()=>{
                             console.log("7")
                         },7000)
                     },6000)
                    },5000)
             },4000)
            },3000)
     },2000)
    },1000)
 }
 calltime()

 

 //Problem-3//
let prntnumber = (tme, num) => {
    return new Promise((res, rej) => {
        if(num){
            setTimeout(()=>{
                res(num());
            }, tme)
        }
        else{
            rej(console.log("No Number"))
        }

    })
}

prntnumber(0, ()=>console.log("Number"))
.then(()=>{
    prntnumber(1000, ()=>console.log("1"))
})
.then(()=>{
    prntnumber(2000, ()=>console.log("2"))
})
.then(()=>{
    prntnumber(3000, ()=>console.log("3"))
})
.then(()=>{
    prntnumber(4000, ()=>console.log("4"))
})
.then(()=>{
    prntnumber(5000, ()=>console.log("5"))
})
.then(()=>{
    prntnumber(6000, ()=>console.log("6"))
})
.then(()=>{
    prntnumber(7000, ()=>console.log("7"))
})

//Problem-4//
let x = function(condition){
    return new Promise((resolve, reject)=>{
        if(condition == 'yes'){
            resolve('promise resolved')
        }
        else{
            reject('promise rejected')
        }
    })
}
x('yes').then(response => console.log(response)).catch(err=>console.log(err))


//Problem-5//

function fun(a, b, add) {
    console.log(a);
    add(2, 3);
    console.log(b);

}

function add(c, d) {
    console.log(`sum is ${c + d}`);
}

fun(2, 3, add)


//Problem-6//

function CallBackDemo() {
    CallBackDemo1()
    function CallBackDemo1() {
        CallBackDemo2()
        function CallBackDemo2() {
            CallBackDemo3()
            function CallBackDemo3() {
                CallBackDemo4()
                function CallBackDemo4() {
                    console.log("Callback Functon");
                }
            }
        }
    }
}
CallBackDemo()

//Problem-7//

let message = (num) => {
    return new Promise((res, rej) => {
        if(num){
            res(num())
        }
        else{
            rej(console.log("No Data"))
        }

    })
}

message(()=>console.log("Message is printed"))
.then(()=>{
    prntdata(()=>console.log("Promise Functon"))
})
.catch(()=>console.log("No Data available"))


//Problem-8//


let vari=5;
console.log(vari);
add1();
console.log("Hello");
function add1(){
    setTimeout(()=>{
        console.log("Async Await Called");

    }, 2000)
}

//Problem-10//

const fun1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The first promise has resolved');
      resolve(10);
    },1000);
  });
  const fun2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The second promise has resolved');
      resolve(20);
    }, 2000);
  });
  const fun3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The third promise has resolved');
      resolve(30);
    }, 3000);
  });
  
  Promise.all([fun1, fun2, fun3]).then((results) => {
    const total = results.reduce((p, c) => p + c);
  
    console.log(`Results: ${results}`);
    console.log(`Total: ${total}`);
  });