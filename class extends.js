class animal{
    constructor(name){
        this.name = name;
    }  
        speak(){
        console.log(' ${this.name} makes sound');
    }
}

class Dog extends animal { 
    speak(){
        console.log('${this.name}. barks')
    }
}
const dog = new dog( "teddy");
dog.speak();
