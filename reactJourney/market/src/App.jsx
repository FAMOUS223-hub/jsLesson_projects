import {Routes, Route} from 'react-router'
import Index from './Components/Index'
import AboutPage from './Components/AboutPage'

export const App = () => {
  return (
   <>
    <Routes>
        <Route  index element={<Index />} />
        <Route  path ='about' element={<AboutPage />} />
      </Routes>
   </>
  )
}
