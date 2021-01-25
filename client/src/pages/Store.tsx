import { useState } from "react"
import { db } from ".."
import { Chest, generateRandomChest } from "../modules/UI"

export default function Store(){
    const [chest, setChest] = useState([] as Chest)
    
    const handleOpenNewChest = (price: number) => {
        const newChest = generateRandomChest(price)
        setChest(newChest)
        db.useMoney(price)        
    }

    return <div className="page store">
        <button
            onClick={() => handleOpenNewChest(20)}
        >Open new chest</button>
        {chest.length > 0 &&
            <div>Chest content:</div>
        }
    </div>
}