export class Game {

    public money = 0

    constructor(){
        // Get data from localstorage
        this.load()
    }

    save(){
        localStorage.setItem('money', JSON.stringify(this.money))
    }

    load(){
        let moneyString = localStorage.getItem('money')
        if(moneyString){
            this.money = parseInt(moneyString)
        }
    }

}