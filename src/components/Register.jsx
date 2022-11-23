export const Register = ({employee, setEmployee,details, setDetails, show, handleUpdate}) => {  

  const handleChange = (e) => {
    // const { name } = e.target;
    // const { value } = e.target;
    const { name, value } = e.target;
    setEmployee((prev) => {
      return {...prev,[name]:value}
    })
  }

  const { name, email, phone } = employee;
  const handleSubmit = (e) => {
    e.preventDefault();
    setDetails([...details, { id: Date.now(), name, email, phone }]);
    setEmployee({ name: "", email: "", phone: "" })
  } 

  return (
    <div className="container">
      <h2 className="text-center my-4">Register Your Staff Here</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" value={employee.name||""} onChange={handleChange} className="form-control" placeholder="Enter Your Name here"/>
        </div>
        <div className="mb-3">
          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" value={employee.email||""} onChange={handleChange} className="form-control" placeholder="Enter Email address here"/>
        </div>
        <div className="mb-3">
          <label htmlFor="phone">Your Phone</label>
          <input type="text" name="phone" value={employee.phone||""} onChange={handleChange} className="form-control" placeholder="Enter Phone number here"/>
        </div>
        {!show ? (<button className="btn btn-primary form-control mb-4" onClick={handleSubmit}>Submit</button>):(<button className="btn btn-success form-control" onClick={handleUpdate}>Update</button>)}
      </form>
      <hr />
    </div>
  )
};