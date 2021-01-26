import { useState } from "react"
import { db } from ".."
import { Page } from "../components/Page"
import { Chest, generateRandomChest } from "../modules/UI"

export default function Store(){
    const [chest, setChest] = useState([] as Chest)
    
    const handleOpenNewChest = (price: number) => {
        const newChest = generateRandomChest(price)
        db.useMoney(price)
        db.addChest(newChest)
        setChest(newChest)
    }

    return <Page
        title='Store'
        className='store'
    >
            <button
                onClick={() => handleOpenNewChest(20)}
            >
                Open new chest
            </button>
            
            {chest.length > 0 &&
                <div>Chest content:</div>
            }
    </Page>
}