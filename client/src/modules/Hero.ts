export default class Hero {
    
    
    constructor(
        public amount = 0,
    ){

    }

    get stockState(){
        let rest = this.amount
        let level = 0
        while(rest > 0){
            rest -= Math.pow(2, level + 1) 
            level++
        }
        console.log({
            level,
            neededForNextLevel: Math.pow(2, level),
            currentOnLevel: -rest
        })
        return {
            level,
            neededForNextLevel: Math.pow(2, level + 1),
            currentOnLevel: -rest
        }
    }

    get level(){
        return this.stockState.level
    }

    get currentLevelAmount(){
        return 3
    }

    get amountNeededForNextLevel(){
        return 8
    }
}