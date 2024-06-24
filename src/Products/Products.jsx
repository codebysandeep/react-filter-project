import './Products.css';
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from 'react-icons/bs';

function Products() {
  return (
    <>
      <section className="card-container">
        {/* Card */}
        <section className="card">
          {/* Card Img */}
          <div>
            <img
              src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
              alt="product"
            />
          </div>
          {/* Card Details */}
          <div className="card-details">
            {/* Card Title */}
            <h3 className="card-title">Shoe</h3>
            {/* Card Reviews */}
            <section className="card-reviews">
              <AiFillStar />
              <span className="total-reviews">4</span>
            </section>
            {/* Card Price */}
            <section className="card-price">
              {/* Card Old vs New Price */}
              <div className="price">
                <del>$ 300</del> 200
              </div>
              {/* Card Add to Cart Bag */}
              <div className="bag">
                <BsFillBagHeartFill />
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  );
}

export default Products;
