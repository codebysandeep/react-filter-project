import './Price.css';

function Price() {
  return (
  <>
    <section className='filter-list'>
      <h3>Price</h3>
      {/* Category List */}
      <ul>
      <li><label><input type="radio" name="price"/> All </label></li>
        <li><label><input type="radio" name="price"/> $0-$50 </label></li>
        <li><label><input type="radio" name="price"/> $50-$100 </label></li>
        <li><label><input type="radio" name="price"/> $100-$150 </label></li>
        <li><label><input type="radio" name="price"/> Over $150 </label></li>
      </ul>
    </section>
  </>
  );
}

export default Price;
