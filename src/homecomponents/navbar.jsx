import React, {Component} from 'react';
import {Link} from "react-router-dom";


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark ">
                <span className="navbar-brand m-3">About</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    
                    <Link to={"/"} style={{textDecoration:"none"}} className='m-3'>
                        <span style={{color:"white"}}>
                            Home
                        </span>
                    </Link>
                </div>

            </nav>
        );
    }
}

export default Navbar;