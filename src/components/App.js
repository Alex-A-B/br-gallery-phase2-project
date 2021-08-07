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
        <Route path="*">
          <h1>404: Looks like we're gonna have to beat the devil out of our servers, we can't find your file</h1>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
