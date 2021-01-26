export default class Hero {
    
    
    constructor(
        public amount = 0,
    ){

    }

    get stockState(){
        let rest = this.amount
        let level = 0
        let levelNeedings = 0

        while(rest > 0){
            level++
            levelNeedings = Math.pow(2, level) 
            rest -= levelNeedings
        }

        return {
            level,
            neededForNextLevel: levelNeedings,
            currentOnLevel: levelNeedings - Math.abs(rest)
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