import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                <Link to="/signup" >Sign Up</Link>
                <Link to="/login" >Login</Link>
                <Link to="/" >Home Page</Link>
                <Link to="/posts">Post Page</Link>
            </div>


        </>
    )
}

export default Navbar