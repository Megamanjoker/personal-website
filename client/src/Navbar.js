import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return(
            <nav>
                <div class="nav-wrapper">
                <a href="#" class="brand-logo">Lyft</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="badges.html">About</a></li>
                    <li><a href="collapsible.html">Login</a></li>
                </ul>
                </div>
            </nav>    
        );
    }
}

export default Navbar;

