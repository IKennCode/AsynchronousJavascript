//Asynchronous

// console.log ("I")
// console.log ("can")

// setTimeout (() => {
//     console.log ("Code");
// }, 3000)

// console.log ("for")
// console.log ("you")

//Callback

let stocks = {
    Fruits : ["mangga", "papaya", "strawberry", "coconut"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
}



let order = (Fruits_name, call_production) => {
   
    setTimeout(() => {
       
        console.log(`${stocks.Fruits[Fruits_name]} was selected`)

        call_production()
    

    }, 2000)
  
}


let production = () => {

    setTimeout(() => {
        console.log("Production has started")
        setTimeout(() => {
            console.log("the fruit has been chopped")
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
                setTimeout(() => {
                    console.log("the machine was started")
                    setTimeout(() => {
                        console.log(`${stocks.holder[0]} was selected to be container`)
                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} was selected to be toppings`)
                            setTimeout(() => {
                                console.log("Served Icecream")
                            }, 3000)
                        }, 3000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 2000)
    }, 1000)

   
  
}


order(1, production)





