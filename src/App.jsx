import Navigation from './Navigation/Navigation';
import Sidebar from './Sidebar/Siderbar';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';

function App() {
  return (
    <>
      <Sidebar />
      <Navigation />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
