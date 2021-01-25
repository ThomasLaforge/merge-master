import { HeroCollectionElt } from "./definitions"

export interface HeroData {
    id: number,
    name: string,
    color: string
}

export function generateRandomChest(price: number){
    return [{
        id: 1,
        number: 3
    }] as Chest
}

export type Chest = HeroCollectionElt[]