// import React from 'react'
// import './Navbar.css'
// import { Link } from 'react-router-dom'
// //import add_product_icon from '../../assets/add-product.png'
// //import list_product_icon from '../../assets/list_product_icon.png'

// const Navbar = () => {
//   return (
//     <div className='sideBar'>
//         <Link to={'/addproduct'} style={{textDecoration:"none"}}>
//             <div className='sidebar-item'>
//                 {/* <img src={add_product_icon} /> */}
//                 <p>Hmoe</p>
//             </div>
//         </Link>
//         <Link to={'/listProducts'} style={{textDecoration:"none"}}>
//             <div className='sidebar-item'>
//                 {/* <img src={list_product_icon} /> */}
//                 <p>Schduled Feedback</p>
//             </div>
//         </Link>
//         <Link to={'/listProducts'} style={{textDecoration:"none"}}>
//             <div className='sidebar-item'>
//                 {/* <img src={list_product_icon} /> */}
//                 <p>Feedback Filled</p>
//             </div>
//         </Link>
//     </div>
//   )
// }

// export default Navbar


import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

export function Navbar() {
  const navigate = useNavigate()

  // get a selector
  //const cart = useSelector((state) => state.cart)

  const onLogout = () => {
    sessionStorage.removeItem('token')
    navigate('/')
  }

  return (
   <>
  <nav className='navbar navbar-expand-lg  bg-primary' data-bs-theme='dark'>
      <div className='container-fluid'>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link' aria-current='page' to='/list'>
                List-Schedule-Feedback
              </Link>
            </li>
            <li>
              <Link className='nav-link' aria-current='page' to='/ScheduleFB'>
                Scheduled-Feedback 
              </Link>
            </li>
            <li>
              <Link className='nav-link' aria-current='page' to='/filledfeedback'>
                List-Of-Filled-Feedback
              </Link>
            </li>
            <li>
              <button
                onClick={onLogout}
                className='nav-link'
                aria-current='page'
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>


   </>
  )
}

export default Navbar
