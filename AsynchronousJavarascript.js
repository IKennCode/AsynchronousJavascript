//Asynchronous

// console.log ("I")
// console.log ("can")

// setTimeout (() => {
//     console.log ("Code");
// }, 3000)

// console.log ("for")
// console.log ("you")

//Callback

// let stocks = {
//     Fruits : ["mangga", "papaya", "strawberry", "coconut"],
//     liquid : ["water", "ice"],
//     holder : ["cone", "cup", "stick"],
//     toppings : ["chocolate", "peanuts"]
// }



// let order = (Fruits_name, call_production) => {
   
//     setTimeout(() => {
       
//         console.log(`${stocks.Fruits[Fruits_name]} was selected`)

//         call_production()
    

//     }, 2000)
  
// }


// let production = () => {

//     setTimeout(() => {
//         console.log("Production has started")
//         setTimeout(() => {
//             console.log("the fruit has been chopped")
//             setTimeout(() => {
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
//                 setTimeout(() => {
//                     console.log("the machine was started")
//                     setTimeout(() => {
//                         console.log(`${stocks.holder[0]} was selected to be container`)
//                         setTimeout(() => {
//                             console.log(`${stocks.toppings[0]} was selected to be toppings`)
//                             setTimeout(() => {
//                                 console.log("Served Icecream")
//                             }, 3000)
//                         }, 3000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 2000)
//     }, 1000)
  
// }

// order(1, production)

//Promises

// let stocks = {
//     Fruits : ["mangga", "papaya", "strawberry", "coconut"],
//     liquid : ["water", "ice"],
//     holder : ["cone", "cup", "stick"],
//     toppings : ["chocolate", "peanuts"]
// }

// let = is_shop_open = true;

// let order = (time, work) => {

//     return new Promise ( (resolve, reject)=> {
//         if(is_shop_open) {
//             setTimeout (() => {
//                 resolve(work())

//             }, time)
           
//         }
//          else {
//             reject(console.log("shop closed"))
//         }

//     })

// }

// order (2000, ()=> console.log(`${stocks.Fruits[2]} was selected`))
// .then()
// .then()
// .catch()
//.finally()

//Async/Await
let stocks = {
    Fruits : ["mangga", "papaya", "strawberry", "coconut"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
}

let = is_shop_open = true;

let toppings_choice = () => {

    return new Promise ( (resolve, reject) => {
        setTimeout (()=> {
            resolve(
                console.log("which topping you want?")
          )
        },3000)
    })
}

async function kitchen () {
    console.log("a")
    console.log("b")
    console.log("c")
    await toppings_choice()
    console.log("d")
    console.log("e")
}

kitchen()

console.log ("cleaning the dishes")
console.log ("cleaning the dishes")
console.log ("cleaning the dishes")
 




