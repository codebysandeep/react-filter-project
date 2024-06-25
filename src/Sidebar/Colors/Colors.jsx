import './Colors.css';

function Color() {
  return (
    <>
      <section className='filter-list'>
      <h3>Colors</h3>
      {/* Category List */}
      <ul>
        <li><label><input type="radio" name="price"/> All </label></li>
        <li><label><input type="radio" name="price"/> Black </label></li>
        <li><label><input type="radio" name="price"/> Red </label></li>
        <li><label><input type="radio" name="price"/> Green </label></li>
        <li><label><input type="radio" name="price"/> White </label></li>
      </ul>
    </section>
    </>
  );
}

export default Color;
