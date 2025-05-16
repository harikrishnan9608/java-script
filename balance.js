class bankAccount{
    #balance;
    constructor (initialbalance){
        this.#balance = initialbalance;
    }

    deposit(amount){
        this.#balance += amount;
        console.log ('deposited : ${this.amount}')
    }

    withdraw(amount){
        if(amount>this.#balance){
            console.log("insufficient balance")
        }else{
            this.#balance -= amount;
            console.log('withdraw : ${this.amount}')
        }
    }

    getbalance(){
        return ("currentbalance : ${this.#balance}")
    }
}

const account = new bankAccount(1000);
account.withdraw(500);
account.deposit(1000);

console.log(account.getbalance())

