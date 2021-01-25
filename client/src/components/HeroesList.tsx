import {db} from '../index'
// import MyHero from "../modules/Hero"
import Hero from './Hero'
import {getAllHeroes, HeroType} from '../modules/definitions'

const heroes = getAllHeroes()

export default function HeroesList(){
    const myHeroes = db.getMyHeroes()
    return (
        <div className="heroes-list">
            {heroes.map( (hType: HeroType, k: number) => {
                const myData = myHeroes.find(myH => myH.id === hType)
                // const hero = new MyHero(myData?.number)
                return <Hero id={hType} number={myData?.number} key={k} />
            })}
        </div>
    )
}