import { Page } from '../components/Page';
import Village from '../components/Village';

export default function Home(){
    return (
        <Page
            title='Home'
            className='home'
        >
            <Village />
        </Page>
    )
}