import {HeroType} from '../modules/definitions'
import MyHero from '../modules/Hero'

import '../styles/hero.scss'

const getHeroClassName = (type: HeroType) => {
    return 'hero-' + getHeroName(type).replaceAll(' ', '-')
}

const getHeroName = (type: HeroType) => {
    switch (type) {
        case HeroType.Archer:
            return 'archer'
        case HeroType.Ninja:
            return 'ninja'
        case HeroType.TourDefense:
            return 'tour de defense'
        case HeroType.Cuisinier:
            return 'cuisinier'
        case HeroType.Militaire:
            return 'militaire'
        case HeroType.Paysan:
            return 'paysan'
        default:
            return 'default'
    }
}

interface HeroProps {
    id: HeroType,
    number?: number
}

export default function Hero(props: HeroProps){
    const {id, number} = props
    const hero = new MyHero(number)
    const {level} = hero

    return <div className={"hero " + getHeroClassName(id)}>
        <div className="hero-name">
            {getHeroName(id)}
        </div>
        {level && 
            <div className="hero-level">{level}</div>
        }
    </div>
}