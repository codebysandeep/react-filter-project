import './Recommended.css';

function Recommended() {
  return (
    <>
      <section className='recommended-container'>
        <h2>Recommended</h2>
        {/* Buttons */}
        <div className="action-btns">
          <button className="btns">All Products</button>
          <button className="btns">Nike</button>
          <button className="btns">Adidas</button>
          <button className="btns">Puma</button>
          <button className="btns">Vans</button>
        </div>
      </section>
    </>
  );
}

export default Recommended;
