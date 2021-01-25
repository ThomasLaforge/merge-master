import MyTeams from '../components/MyTeams/index'
import HeroesList from '../components/HeroesList/index'

export default function Collection(){
    return (
        <div className="page collection">
            <MyTeams />
            <HeroesList />
        </div>
    )
}