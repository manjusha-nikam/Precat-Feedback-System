//import { useSelector } from 'react-redux'
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
   <div>
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">FeedBack-Schedule</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link align-middle px-0">
                        <li className='nav-item'>
              <Link className='nav-link' aria-current='page' to='/home'>
                Home
              </Link>
            </li>
                        </a>
                    </li>
                    <li>
              <Link className='nav-link' aria-current='page' to='/schedulefb'>
                {/* Cart ({cart.items.length}) */}
                Feedback
              </Link>
            </li>
            <li>
              <Link className='nav-link' aria-current='page' to='/home'>
                Orders
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
                 </div>
                 </div>   
    


   </>
  )
}

export default Navbar
