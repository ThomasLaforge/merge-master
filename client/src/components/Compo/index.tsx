import { CompoData } from "../../modules/definitions";

interface Props {
    data: CompoData
}

export function Compo(props: Props){
    const {data} = props

    return (
        <div className='compo'>
            <div className="compo-name">
                {data.name}
            </div>
        </div>
    )
}

export function EmptyComp(){
    return <div className="compo-empty">
        <div className="compo-empty-content">
            Not used yet
        </div>
    </div>
}