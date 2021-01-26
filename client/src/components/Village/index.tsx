import { useHistory } from 'react-router-dom'
import { GoldGenerator } from './GoldGenerator';

import './style.scss'

export default function Village(){
    const history = useHistory();
    return (
        <div className="village">
            <div className="main-content">
                <div className="buildings">
                    <GoldGenerator />
                    <div className="building stock">
                        Stock
                    </div>
                    <div className="building store"
                        onClick={() => history.push('/store')}
                    >
                        Store
                    </div>
                    <div className="building team"
                        onClick={() => history.push('/collection')}
                    >
                        Team
                    </div>
                    <div className="building training-stadium">Training stadium</div>
                    <div className="building competition-center">Competition Center</div>
                </div>
            </div>
            <div className="show-more">

            </div>
        </div>
    )
}