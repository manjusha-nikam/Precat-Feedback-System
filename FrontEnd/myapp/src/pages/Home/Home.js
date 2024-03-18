//import Navbar from '../../component/Navbar'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Signin from '../Signin'
import ScheduleFB from '../Scheduled/ScheduleFB'
import ListFeedback from '../List Schedule Feedback/ListSchedule'
import ListFilledFeedback from '../Filled Feedback/FilledFeedback'
import Sidebar from '../../component/Navbar'

const Home = () =>{

    return(
        <> 
        <div className="container-fluid">
       
      <BrowserRouter>
      <Sidebar />
        <Routes>
          <Route path="/" element={<Signin />} />
         
          <Route index element={<Signin />} />
        <Route path='/' element={<Signin />} />
         <Route path='/list' element={<ListFeedback />} /> 
        <Route path= "/schedulefb" element={<ScheduleFB />} />
        <Route path= "/filledfeedback" element={<ListFilledFeedback />} />
        
         
        </Routes>
      </BrowserRouter>
      <ToastContainer />
     
    </div>
            
        </>
        
        
        
        
    )

}

export default Home