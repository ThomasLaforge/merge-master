import {db} from '../../index'
// import MyHero from "../modules/Hero"
import { CollectionHero } from '../Hero/index'
import {getAllHeroes, HeroType} from '../../modules/definitions'

import './style.scss'

const heroes = getAllHeroes()

export default function HeroesList(){
    const myHeroes = db.getMyHeroes()
    return (
        <div className="heroes-list">
            {heroes.map( (hType: HeroType, k: number) => {
                const myData = myHeroes.find(myH => myH.id === hType)
                // const hero = new MyHero(myData?.number)
                return <div className="heroes-list-elt" key={k}>
                    <CollectionHero id={hType} number={myData?.number} />
                </div>
            })}
        </div>
    )
}