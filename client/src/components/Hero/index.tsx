import { ReactNode } from 'react'
import {HeroType} from '../../modules/definitions'
import MyHero from '../../modules/Hero'

import './style.scss'

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
    number?: number,
}

interface BaseHeroProps extends HeroProps {
    children: ReactNode
}

export default function BaseHero(props: BaseHeroProps){
    const {id, number, children} = props

    return <div className={"hero " + getHeroClassName(id)}>
        <div className="hero-name">
            {getHeroName(id)}
        </div>
        {children}
    </div>
}

export function CollectionHero(props: HeroProps){
    const {number} = props
    const hero = new MyHero(number)
    const {level, currentOnLevel, neededForNextLevel} = hero.stockState
    return (
        <BaseHero {...props}>
            <div className="hero-collection-stats">
                <div className="hero-level">{level || 0}</div>
                <div className="hero-next-level-info">{currentOnLevel} / {neededForNextLevel}</div>
            </div>
        </BaseHero>
    )
}

export function ChestHero(props: HeroProps){
    const {number} = props
    return (
        <BaseHero {...props}>
            <div className="hero-chest-number">x {number}</div>
        </BaseHero>
    )
}