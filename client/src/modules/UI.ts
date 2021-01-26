import { HeroCollectionElt, NB_HERO_TYPE, getAllHeroes } from "./definitions"
import { shuffle } from "./tools"

export function generateRandomChest(price: number){
    const nbHeroesType = 3
    const heroTypes = shuffle(getAllHeroes()).slice(0, nbHeroesType)
    return heroTypes.map(t => {
        const number = Math.floor(Math.random() * 20) + 1
        return {
            id: t, 
            number
        }
    })
}

export type Chest = HeroCollectionElt[]