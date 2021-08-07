import { useState } from "react"

function ArtworkDetails( { painting }) {
    const [extraDetails, setExtraDetails] = useState(false)
    const {img_src, painting_title, season, episode} = painting

    function handleExtraDetails(){
        setExtraDetails(!extraDetails)
    }

 

    return (
        <div className="artwork home" onClick={handleExtraDetails}>
            <div className="title">
                <h2>{painting_title}</h2>
            </div>
            <div>
                <img className="artwork-large" src={img_src} alt={painting_title} />
            </div>
            {extraDetails ? <div> <p>This picture is from season <strong>{season}</strong> episode <strong>{episode}</strong>.</p></div> : null}
        </div>
    )
}

export default ArtworkDetails