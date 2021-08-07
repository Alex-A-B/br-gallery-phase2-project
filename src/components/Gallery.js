// import { useState } from 'react'
import ArtworkThumbnail from "./ArtworkThumbnail"

function Gallery({ paintings }) {

     const renderPaintings = paintings.map( (painting) => {
        return <ArtworkThumbnail
                key={painting.id}
                painting={painting}
            />
        }
    )

    return (
        <div className="gallery">
            {/* <p>Here is where the paintings will be stored and all will be good in the world!</p> */}
            {renderPaintings}
        </div>
    )
}

export default Gallery