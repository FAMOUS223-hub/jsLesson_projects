import { Routes, Route } from 'react-router';
import HomePage  from './pages/HomePage'
const App = () => {
  return (
   <>
   <Routes>
    <Route path='/' element = { <HomePage />} /> {/* path can be changed to 'index' tp mean path='/' */}
    <Route path='checkout' element = {<div>Test Checkout</div>} />
   </Routes>
   </>
  )
}

export default App