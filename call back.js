function greet(name ,callback){
    console.log( "hellow" + " " +  name)
    callback()
}

function bye(){
    console.log("goodbye")
}

greet("hari",bye)
