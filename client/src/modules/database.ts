import { CompoData, HeroCollection, Teams } from "./definitions"
import { Chest } from "./UI"

export default class Database {

    getMyHeroes(){
        return this.getElement('myHeroes', []) as HeroCollection
    }

    addHeroes(type: number, amount: number){
        let newHeroes = this.getMyHeroes()
        const heroIndex = newHeroes.findIndex(h => h.id === type)
        if(heroIndex !== -1){
            const hero = newHeroes[heroIndex]
            hero.number += amount
        }
        else {
            newHeroes.push({ id: type, number: amount })
        }
        this.setElement('myHeroes', newHeroes)
    }

    getTeams(){
        return this.getElement('myTeams', []) as Teams
    }

    addTeam(id: number, team: CompoData){
        const newTeams = this.getTeams().map( 
            (t, i) => i === id ? team : t
        )
        this.setElement('myTeams', newTeams)
    }

    addChest(chest: Chest){
        chest.forEach(h => {
            this.addHeroes(h.id, h.number)
        })
    }

    addMoney(amount: number){
        this.setElement('money', this.getElement('money', 0) + amount)
    }

    useMoney(amount: number){
        const currentMoney = this.getElement('money', 0)
        const newMoney = currentMoney - amount
        if(newMoney < 0){
            console.warn('you are using more money than you have')
        }
        this.setElement('money', currentMoney)
    }

    getElement(key: string, defaultValue: any){
        const stringValue = localStorage.getItem(key)
        return stringValue 
            ? JSON.parse(stringValue) 
            : defaultValue 
    }

    setElement(key: string, value: any){
        localStorage.setItem(key, JSON.stringify(value))
    }
}