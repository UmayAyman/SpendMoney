import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Products.jsx';
import SpendMoneyCounter from './components/spendmoney.jsx';

function App() {
  const [totalMoney, setTotalMoney] = useState(100000000000);

  return (
    <>
      <Navbar />
      <div className='billgates'>
        <img src='src/assets/billgates.jpg' alt='billgate' />
        <p>Spend Bill Gates' Money</p>
      </div>
      <SpendMoneyCounter totalMoney={totalMoney} />
      <Product totalMoney={totalMoney} setTotalMoney={setTotalMoney} />
    </>
  );
}

export default App;
