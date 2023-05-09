import React, {useState} from "react"
import Detail from "./Detail"
function Tile({name, image, specialty, weight, greased}){
    const [clickName, setClickName] = useState(false)
    const [hide, setHide] = useState(image)

    const handleClick = () => {
        setClickName(currentValue => !currentValue)
    }

    const handleHide = () => {
        setHide(current => {
            if (current){
                return ""
            } else {
                return image
            }
        })
    }

    return (
        <div className='pigTile'>
            <h3 onClick={handleClick}>{name}</h3>
            <button onClick={handleHide}>Hide</button>
            <Detail handleClick={clickName} specialty={specialty} weight={weight} greased={greased}/>
            <img className="minPigTile" src={hide} />
        </div>
    )
}

export default Tile;