import React from 'react'

function Cart({cart, setCart}) {
  

  const getTotalSum = () => {
    return cart.reduce((sum, {cost, quantity}) => sum + cost * quantity, 0)
  }

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove))
  }

  const clearCart = () => {
    setCart([])
  }

  const setQuantity = (product, amount) => {
    const newCart = [...cart]
    newCart.find((i) => i.name === product.name).quantity = amount
    setCart(newCart)
  }

  return (
    <>
      <h1>Cart</h1>
      {cart.length > 0 && (
        <button onClick={clearCart}>Clear Cart</button>
      )}
      <div className='products'>
        {cart.map((cart, idx) => (
          <div className='product' key={idx}>
            <h1>{cart.name}</h1>
            <h4>${cart.cost}</h4>
            <input 
              value={cart.quantity} 
              onChange={(e) => 
                setQuantity(cart, parseInt(e.target.value))
              } 
            />
            <img src={cart.image} alt={cart.name} />
            <button onClick={() => removeFromCart(cart)}>
              Remove from Cart
            </button>
          </div>
        ))}
      </div>

      <div>
        Total Cost: ${getTotalSum()}
      </div>
    </>
  )
}

export default Cart