import Navbar from "../../component/Navbar"

const ScheduleFB = () =>{

    return(
        <>

    {/* <div className="col-md-8" >
     <div class="leftside">
     <Navbar/>
    </div>
  </div> */}

  <div className="col-md-8" >
        <div class="leftside">
          <label>Course</label>
          <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
        </div>
        <div>
          <label>Module</label>
        </div>
        <div>
          <label>Feedback Type</label>
        </div>
        <div>
          <label>From Date</label>
        </div>
        <div>
          <label>To Date</label>
        </div>
        <div>
          <label>Staff</label>
        </div>

        </div>
        </>
    )

}

export default ScheduleFB