import { useHistory } from 'react-router-dom'

export default function Home(){
    const history = useHistory();
    return (
        <div className="page home">
            <button onClick={() => {
                history.push('/collection')}}
            >Collection btn</button>
            
            <button onClick={() => {
                history.push('/store')}}
            >Store</button>
        </div>
    )
}