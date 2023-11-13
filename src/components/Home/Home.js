import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

function Home() {
  return (
    <div className="container">
      <Navbar />
      <Banner />
      <div className='product-card-container'>
        <Products />
      </div>
    </div>
  )
}

export default Home;