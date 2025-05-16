function borrowBook(){
    return new promise((resolve,reject) => {
        console.log("asking friend for book....")

        setTimeout(() =>{
            let BookAvailable = Math.random()>0.5

            if (BookAvailable){
                resolve(" friend gave the book")
            }else{
                reject("friend the lost book")   
            }
        },2000)
        })
}

   borrowBook()
    .then((message) => {
        console,log(message)
    })
    .catch((error) =>{
        console.log(error)
    })
