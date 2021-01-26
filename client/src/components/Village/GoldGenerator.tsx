import { useState } from 'react';
import { db } from '../..';

export function GoldGenerator(){
    const [currentGoldStack, updateGoldStack] = useState(Math.floor(Math.random() * 500))
    
    return (
        <div className="building gold-generator"
            onClick={() => {
                db.addMoney(currentGoldStack)
                updateGoldStack(0)
            }}
        >
            <div className="building-title">
                Gold generator    
            </div>
            <div className="gold-counter">
                {currentGoldStack} / 500
            </div>
        </div>
    )
}