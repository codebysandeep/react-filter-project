import './Category.css';

function Category() {
  return (
    <>
      <section className='filter-list'>
        <h3>Category</h3>
        {/* Category List */}
        <ul>
          <li><label><input type="radio" name="category"/> All</label></li>
          <li><label><input type="radio" name="category"/> Sneakers</label></li>
          <li><label><input type="radio" name="category"/> Flats</label></li>
          <li><label><input type="radio" name="category"/> Sandles</label></li>
          <li><label><input type="radio" name="category"/> Loffers</label></li>
        </ul>
      </section>
    </>
  );
}

export default Category;
