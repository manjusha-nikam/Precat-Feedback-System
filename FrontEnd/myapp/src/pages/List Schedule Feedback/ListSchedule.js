import axios from 'axios'
import { URL } from '../../config'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ListFeedback = () => {
  const [feedbacks, setfeedbacks] = useState([])

  // hook used to navigate
  const navigate = useNavigate()

  // this hooks is called when the value(s) are changed
  // first param: callback function which will be called
  // second param:
  // - list of values which when changed, the callback function gets called
  // - empty array as a second param means the callback gets calld when the component
  //   get loaded successfully
  useEffect(() => {
    // load all the homes created by the user
    getfeedback()
  }, [])

  // get my homes
  const getfeedback = () => {
    axios
      .get(`${URL}/feedback/schedule`, {
      })
      .then((response) => {
        const result = response.data

        if (result['status'] === 'success') {
          console.log(result.data)
          // set the homes to the state member
          setfeedbacks(result['data'])
        } else {
          toast.error(result['error'])
        }
      })
  }

  // delete my home
//   const deleteHome = (id) => {
//     axios
//       .delete(config.serverURL + '/home/' + id, {
//         headers: { token: sessionStorage['token'] },
//       })
//       .then((response) => {
//         const result = response.data
//         if (result['status'] === 'success') {
//           // reload the screen
//           getMyHomes()
//         } else {
//           toast.error(result['error'])
//         }
//       })
//   }

 
  return (
    <div className='container'>
      <h3 style={styles.h3}>List Of Schedule Feedback</h3>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Course Name </th>
            <th>Module Name</th>
          </tr>
        </thead>
        <tbody>
        {feedbacks.map((feedback) => {
            return (
              <tr>
                <td>{feedback.id}</td>
                <td>{feedback.courseName}</td>
                <td>{feedback.moduleName}</td>
              </tr>
            )
          })}

        </tbody>
      </table>
    </div>
  )
}

const styles = {
  h3: {
    textAlign: 'center',
    margin: 20,
  },
  button: {
    marginRight: 10,
  },
}

export default ListFeedback
