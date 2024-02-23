import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Signin from './pages/Signin'
import Home from './pages/Home/Home';


function App() {
return(
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/home" element={<Home />} />
         
        </Routes>
      </BrowserRouter>
     
    </div>
)

  
}

export default App;
