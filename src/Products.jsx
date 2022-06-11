import React, {useState} from 'react'
import './Products.css'

const CAR = 'car'
const FOOD = 'food'

function Products({setCart, cart}) {
  const [products] = useState([
    {
      category: CAR,
      name: 'Car battery',
      cost: 199,
      image:
        'data:image/jpeg;base64,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',
    },
    {
      category: FOOD,
      name: 'Milk',
      cost: 1441,
      image:
        'data:image/jpeg;base64,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',
    },
  ])

  const [category, setCategory] = useState(CAR)

  const getProductsInCategory = () => {
    return products.filter(product => product.category === category)
  }

  const addToCart = (product) => {
    let itemInCart = cart.find((i) => product.name === i.name)
    let newCart = [...cart]
    if (itemInCart) {
      itemInCart.quantity++
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      }
      newCart.push(itemInCart)
    }
    setCart(newCart)
  }


  return (
    <>
      <h1>Products</h1>
      Select a category
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value={CAR}>{CAR}</option>
        <option value={FOOD}>{FOOD}</option>
      </select>
      <div className='products'>
        {getProductsInCategory().map((product, idx) => (
          <div className='product' key={idx}>
            <h1>{product.name}</h1>
            <h4>${product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Products