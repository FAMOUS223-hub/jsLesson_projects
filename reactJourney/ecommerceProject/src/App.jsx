import { Routes, Route } from 'react-router';
import HomePage  from './pages/HomePage'
import CheckOut from './pages/CheckOut'
import Orders from './pages/Orders'
import TrackingPage  from './pages/trackingPage'; 
const App = () => {
  return (
   <>
   <Routes>
    <Route path='/' element = { <HomePage />} /> {/* path can be changed to 'index' tp mean path='/' */}
    {/* I will work on this before i continue */}
    <Route path='checkout' element = {<CheckOut />} />
    <Route path='orders' element = {<Orders />} />
    <Route path='tracking' element = {<TrackingPage />} />
   </Routes>
   </>
  )
}

export default App