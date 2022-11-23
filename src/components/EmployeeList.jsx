export const EmployeeList = ({ details, handleDelete, handleEdit }) => {
  
  return (
    <div className="container">
      <h2 className="text-center my-4">Employee Details</h2>
      <p className="lead">Our team comprises of web developers, software engineers, project managers and content creators. We cover a range of technologies including Python and aspi net. We emphasize full stack development. We have accomplished instructors both for backend server and client side technologies. Here are some of our prominent professionals:</p>
      <table className="table table-bordered table-hover border-info mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
      {details.map((detail,index) => (
        <tr key={index}>
          <td>{detail.id}</td>
          <td>{detail.name}</td>
          <td>{detail.email}</td>
          <td>{detail.phone}</td>
          <td>
            <button className="btn btn-warning me-2" onClick={()=>handleEdit(index)}><i className="fas fa-pencil"></i></button>
            <button className="btn btn-danger ms-1" onClick={()=>handleDelete(detail)}><i className="fas fa-trash"></i></button>
          </td>
        </tr>
        ))}
      </tbody>
      </table>
    </div>
  )
};
