import '../Cart.css'
const Cart = ({productImage, productName, price, discount}) => {
  return (
    <>
    
    <div className="myItems">
      <img src= {productImage} width={320} />
      <p className='productName'> {productName}</p>
     {!discount ? (
       <p>Price: {price}</p>
     ):
      <p>
        <del>Price: {price}</del>
        <p>Discount Price: {discount}</p>
      </p>
     }

     <button>Add to Cart</button>
    </div>
    </>
  )
}

export default Cart