import {Routes, Route} from 'react-router'
import Index from './Components/Index'
import AboutPage from './Components/AboutPage'
import LegalPage from './Components/LegalPage'
import {legalContent} from './Components/legalContent'

export const App = () => {
  return (
   <>
    <Routes>
        <Route  index element={<Index />} />
        <Route  path ='about' element={<AboutPage />} />
        <Route  path ='privacy' element={<LegalPage {...legalContent.privacy} />} />
        <Route  path ='terms' element={<LegalPage {...legalContent.terms} />} />
      </Routes>
   </>
  )
}
