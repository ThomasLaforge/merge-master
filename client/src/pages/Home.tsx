import { useHistory } from 'react-router-dom'
import { Page } from '../components/Page';

export default function Home(){
    const history = useHistory();
    return (
        <Page
            title='Home'
            className='home'
        >
            <button onClick={() => {
                history.push('/collection')}}
            >Collection btn</button>
            
            <button onClick={() => {
                history.push('/store')}}
            >Store</button>
        </Page>
    )
}