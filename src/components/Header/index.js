import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  console.log('login')
  return (
    <nav className="nav-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="app-logo"
        />
      </div>
      <ul className="nav-items-container">
        <li>
          <Link to="/" className="home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="products">
            Products
          </Link>
        </li>
        <li>
          <Link to="/cart" className="cart">
            Cart
          </Link>
        </li>
        <li>
          <button type="button" className="logout-btn">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}
export default Header
