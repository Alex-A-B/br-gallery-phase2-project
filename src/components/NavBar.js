import { Link } from "react-router-dom"

function NavBar() {

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/add-new-artwork">Add New Artwork</Link>
        </nav>
    )
}

export default NavBar    