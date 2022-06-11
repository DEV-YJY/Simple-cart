import { useState } from 'react'
import './App.css'
import Products from './Products'
import Cart from './Cart'

const PAGE_PRODUCTS = 'products'
const PAGE_CART = 'cart'

function App() {
  const [page, setPage] = useState(PAGE_PRODUCTS)
  const [cart, setCart] = useState([])

  const navigateTo = (nextPage) => {
    setPage(nextPage)
  }

  const getCartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0)
  }

  return (
    <div className='App'>
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>Go to Cart {getCartTotal()}</button>
      </header>

      <header>
        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>
      </header>

      {page === PAGE_PRODUCTS && <Products setCart={setCart} cart={cart} />}
      {page === PAGE_CART && <Cart cart={cart} setCart={setCart} />}
    </div>
  )
}

export default App
