import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArtworkDetails from "./ArtworkDetails";

function PaintingView() {
    const { id } = useParams();
    const [painting, setPainting] = useState([])
       
    function fetchPainting(){
        fetch(`https://br-gallery-project.herokuapp.com/paintings/${id}`)
          .then(response => response.json())
          .then(painting => setPainting(painting))
          .catch(error => console.log(error))
    }

    useEffect( () => {
        fetchPainting()
        // eslint-disable-next-line
        }, [])
    
    return (
        <ArtworkDetails painting={painting} />
    )
}

export default PaintingView