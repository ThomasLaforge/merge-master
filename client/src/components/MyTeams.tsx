import { CompoData } from "../modules/definitions"
import {Compo, EmptyComp} from "./Compo"
import {useState} from "react"

export default function MyTeams(){
    const [compoIndex, setCompoIndex] = useState(0)
    const compoString = localStorage.getItem('compos')
    const compos: CompoData[] = compoString ? JSON.parse(compoString) : []
    const NB_POSSIBLE_COMPOS = 5
    
    const renderCompoSelectorsBtn = () => {
        return new Array(NB_POSSIBLE_COMPOS)
            .fill('')
            .map((e,k) => (
                <div 
                    className={"compo-selector" + 
                        (compoIndex === k ? ' compo-selected' : '')
                    }
                    onClick={() => setCompoIndex(k)}
                    key={k}
                >
                    {k + 1}
                </div>
            ))
    }
    
    const renderCompos = (compoIndex: number) => {
        const compoData = compos[compoIndex]
        return compoData 
            ? <Compo data={compos[compoIndex]} />
            : <EmptyComp />

    }

    return (
        <div className="my-teams">
            <div className="compo-selector-list">
                {renderCompoSelectorsBtn()}
            </div>
            <div className="compos">
                {renderCompos(compoIndex)}
            </div>
        </div>
    )
}