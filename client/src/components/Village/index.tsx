import { useHistory } from 'react-router-dom'

import './style.scss'

export default function Village(){
    const history = useHistory();

    return (
        <div className="village">
            <div className="main-content">
                <div className="buildings">
                    <div className="building gold-generator">gold-generator</div>
                    <div className="building stock">stock</div>
                    <div className="building store"
                        onClick={() => history.push('/store')}
                    >
                        store
                    </div>
                    <div className="building team"
                        onClick={() => history.push('/collection')}
                    >
                        Team
                    </div>
                    <div className="building training-stadium">training-stadium</div>
                    <div className="building competition-center">competition-center</div>
                </div>
            </div>
            <div className="show-more">

            </div>
        </div>
    )
}