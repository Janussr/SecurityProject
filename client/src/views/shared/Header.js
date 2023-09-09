import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";

const Header = ({ isLoggedIn, onLogout }) => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} size="1x" />

    const onClick = () => {
        onLogout()
    }

    return (
        <div>
            <nav>
                <ul className='header'>
                    <li><NavLink to='/'>Shop</NavLink></li>
                    <li><NavLink to='/profile'>Profile</NavLink></li>
                    {/* <li className="align-right login-nav"><NavLink to="/login">Log in</NavLink></li> */}
                    {!isLoggedIn && <li className="align-right login-nav"><NavLink to="/login">Log in</NavLink></li>}
                    {isLoggedIn && <li onClick={onClick} className='align-right login-nav'><NavLink to="/landing">Log out</NavLink></li>}
                    <li className="align-right"><NavLink to="/cart"><div className="cart-icon">{cartIcon}</div></NavLink></li>
                </ul>
            </nav>
        </div >
    )
}

export default Header;