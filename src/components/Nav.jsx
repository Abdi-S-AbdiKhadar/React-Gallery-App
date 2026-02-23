
import {Outlet, NavLink, useParams } from 'react-router-dom';

// renders the navigation.
const Nav = (props)=> {
    return (
        <div> 
            <nav className="main-nav">
                <ul>
                    <li><NavLink to='Moon'>Moon</NavLink></li>
                    <li><NavLink to='Ocean' >Ocean</NavLink></li>
                    <li><NavLink to='Flowers' >flowers</NavLink></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}
export default Nav;