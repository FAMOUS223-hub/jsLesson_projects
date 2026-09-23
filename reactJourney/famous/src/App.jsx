import Cart from './components/Cart.jsx'
const App = () => {
  return (
   <>
     <Cart 
      productImage = '../src/assets/test.png'
      productName = 'Plain T-Shirt'
      price = '120.00'
    />
    <Cart 
      productImage = '../src/assets/test2.JPG'
      productName = 'Men Wrist Watch'
      price = '890.00'
    />
    <Cart 
      productImage = '../src/assets/test3.JPG'
      productName = 'Women Gucci Bag'
      price = '1650.00'
    />
    <Cart 
      productImage = '../src/assets/test.png'
      productName = 'Laptop Charger'
      price = '100.00'
      discount = "4.55"
    />
    <Cart 
      productImage = '../src/assets/test2.JPG'
      productName = 'Macbook Pro M5'
      price = '4000.00'
    />
    <Cart 
      productImage = '../src/assets/test3.JPG'
      productName = 'Apple Series Watch'
      price = '1000.00'
      discount = "4.55"
    />
   </>
  )
}

export default App