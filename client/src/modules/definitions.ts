export enum HeroType {
    TourDefense = 0,
    Archer = 1,
    Ninja = 2,
    Paysan = 3,
    Militaire = 4,
    Cuisinier = 5
}

export function getAllHeroes(){
    return [
        HeroType.TourDefense,
        HeroType.Archer,
        HeroType.Ninja,
        HeroType.Paysan,
        HeroType.Militaire,
        HeroType.Cuisinier
    ]
}

export const NB_HERO_TYPE =  getAllHeroes().length

export interface HeroStats {

}

export type HeroCollection = HeroCollectionElt[]

export interface HeroCollectionElt {
    id: number,
    number: number
}

export type Teams = CompoData[]
export interface CompoData {
    name: string,
    heroesId: number[]
}