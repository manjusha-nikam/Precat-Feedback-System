import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Signin from './pages/Signin'
import Home from './pages/Home/Home';
import ScheduleFB from './pages/Scheduled/ScheduleFB';


function App() {
return(
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path= "/schedulefb" element={<ScheduleFB />} />
         
        </Routes>
      </BrowserRouter>
     
    </div>
)

  
}

export default App;
