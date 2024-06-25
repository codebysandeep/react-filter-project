import './Sidebar.css';
import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';

function Sidebar() {
    return (
        <>
            <section className="sidebar">
                {/* Logo */}
                <div className="logo">
                    <h2><a href="http://localhost:3000"> 🛍️ </a></h2>
                </div>

                {/* Category */}
                <Category />

                {/* Price */}
                <Price />

                {/* Colors */}
                <Colors />
            </section>
        </>
    );
}

export default Sidebar;