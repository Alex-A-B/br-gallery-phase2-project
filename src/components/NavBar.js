import { NavLink } from "react-router-dom"

function NavBar() {

    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/add-new-artwork">Add New Artwork</NavLink>
        </nav>
    )
}

export default NavBar    