import './App.css'
import Navbar from './components/Navbar'
import './components/Products.jsx'
import Product from './components/Products.jsx'

function App() {

  return (
    <>
    <Navbar />
    <div className='billgates'>
    <img src = 'src\assets\billgates.jpg' alt = 'billgate' />
    <p>Spend Bill Gates' Money</p>
    </div>
    <Product />
    </>
  )
}

export default App
