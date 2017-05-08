import React from 'react';
import {Link} from 'react-router-dom';


function Nav() {
    return (
        <div id='navBar'>
            <div className="logo">
                <img src="https://avatars3.githubusercontent.com/u/26086677?v=3&s=400" alt=""/>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/'>Guides</Link>
                    </li>
                    <li>
                        <Link to='/'>Forum</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;