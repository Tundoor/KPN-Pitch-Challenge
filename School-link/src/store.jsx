import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom';


function Store() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        console.log(data);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setError(true);
      });
  }, []);

  if (error) {
    return <h1>An error occurred while loading.</h1>;
  }

  if (items.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="store-header">
        <h1>Store</h1>
        <h2>
          Welcome to "School's Name" Store where you can find all your uniform needs
        </h2>
      </div>
      <div className="store-body">
        {items.map((item) => {
           return (
            <div className="store-card">
          <img src={item.images[0]} alt="Product" />
          <div classname="item-description">
            <h1>{item.title}</h1>
            <h2>{item.description}... <Link to="/">Read more</Link></h2>
            <div className='price-div'>
              <p>Price</p>
              <h1>{item.price}</h1>
            </div>
          </div>
        </div>
           )
        })}
      </div>
    </>
  );
}

export default Store
