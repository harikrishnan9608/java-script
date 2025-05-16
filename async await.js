function orderingpizza(){
    return new promise ((resolve) =>{
        console.log("ordering for pizzas")

        setTimeout(() =>{
             resolve("pizza is ready")
        },2000)
    })
}

async function getpizza () {
    console.log("placing order")

    let pizza = await orderingpizza()
    console.log(getpizza)
    console.log("enjoy ur pizzas")
    
}

