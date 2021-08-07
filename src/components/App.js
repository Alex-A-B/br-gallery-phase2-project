import { useEffect, useState } from "react"
import { Switch, Route } from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./Home"
import Gallery from "./Gallery"
import AddArtForm from "./AddArtForm"


function App() {
  const [paintings, setPaintings] = useState([])

  useEffect( () => {
  fetch("https://br-gallery-project.herokuapp.com/paintings")
    .then(response => response.json())
    .then(paintings => setPaintings(paintings))
    .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/gallery">
          <Gallery paintings={paintings}/>
        </Route>
        <Route path="/add-new-artwork">
          <AddArtForm />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
