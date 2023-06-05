import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>

            <h1>Navbar</h1>
            <hr />
            <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/save">Save</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/show">Show</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <hr />


        </div>
    )
}

export default Navbar
