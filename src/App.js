import React, {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios';

function App() {

  const[prod, setProd] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3002/products?_page=10&_limit=15')
    .then(res => {
        setProd(res.data)

    })
},[])

console.log(prod)
  return (
    <div className="App">
      <div> Hello ascii emoji world</div>

      <div>
        {prod.map(product=> 
          <div>
            {product.face}
            </div>
        )}
      </div>
    </div>
  );
}

export default App;
