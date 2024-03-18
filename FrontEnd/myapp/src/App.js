import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Signin from './pages/Signin'
import Sidebar from './component/Navbar'
//import Home from './pages/Home/Home';
import ScheduleFB from './pages/Scheduled/ScheduleFB';
import Home from './pages/Home/Home'


function App() {
return(
    // <div className="container">
       
    //   <BrowserRouter>
    //   <Sidebar />
    //     <Routes>
    //       <Route path="/" element={<Signin />} />
    //       <Route path="/home" element={<Home />} />
    //       <Route path= "/schedulefb" element={<ScheduleFB />} />
         
    //     </Routes>
    //   </BrowserRouter>
     
    // </div>
    <Home></Home>
)

  
}

export default App;
