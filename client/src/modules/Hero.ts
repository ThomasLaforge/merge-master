export default class Hero {
    
    
    constructor(
        public amount = 0,
    ){

    }

    get level(){
        let rest = this.amount
        let level = 0
        while(rest > 0){
            rest -= Math.pow(2, level + 1) 
            level++
        }
        return level
    }

    get currentLevelAmount(){
        return 3
    }

    get amountNeededForNextLevel(){
        return 8
    }
}