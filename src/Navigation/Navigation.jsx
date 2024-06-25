import './Navigation.css';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';

function Navigation() {
  return (
    <>
      <nav>
        <div className="nav-container">
          {/* Search Input Bar */}
          <div className="search-input">
          <input
            type="text"
            className="search-input"
            placeholder="Search for Products, Brand and more..."
          />
          </div>

          {/* Profile Container */}
          <div className="profile-container">
            <a href="#" title="Heart">
              <FiHeart className="nav-icons" />
            </a>

            <a href="#" title="Shopping Cart">
              <AiOutlineShoppingCart className="nav-icons" />
            </a>

            <a href="#" title="User">
              <AiOutlineUserAdd className="nav-icons" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
