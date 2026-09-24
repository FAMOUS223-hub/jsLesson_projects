import { Routes, Route } from 'react-router';
import HomePage  from './pages/HomePage'
import CheckOut from './pages/CheckOut'
const App = () => {
  return (
   <>
   <Routes>
    <Route path='/' element = { <HomePage />} /> {/* path can be changed to 'index' tp mean path='/' */}
    <Route path='checkout' element = {<CheckOut />} />
   </Routes>
   </>
  )
}

export default App