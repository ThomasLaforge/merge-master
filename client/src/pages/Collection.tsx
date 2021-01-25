import MyTeams from '../components/MyTeams/index'
import HeroesList from '../components/HeroesList/index'
import { Page } from '../components/Page'

export default function Collection(){
    return (
        <Page 
            title='Collection'
            className='collection'
        >
            <MyTeams />
            <HeroesList />
        </Page>
    )
}