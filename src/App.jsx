import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import ProductDesc from './Components/ProductDesc'
function App() {


  return (
    <>
   <Routes>
   <Route exact path='/' element={<Home/>}/>
    <Route exact path='/product/:productId' element={<ProductDesc/>}/>
    
   </Routes>

    </>
  )
}

export default App
