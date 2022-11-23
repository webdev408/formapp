import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import { Contact } from './components/Contact'
import { EmployeeList } from './components/EmployeeList'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Register } from './components/Register'

const initialValue = {
  name:"",email:"",phone:""
}

function App() {
  const [employee, setEmployee] = useState({initialValue})
  const [details, setDetails] = useState([])
  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  
  const handleEdit = (index) => {
    setEmployee(details[index]);
    setShow(true);
    setEditIndex(index);
  }

  const handleUpdate = () => {
    details.splice(editIndex, 1, employee);
    setDetails([...details])
    setShow(false);
    setEmployee({name:"",email:"",phone:""})
  }

  const handleDelete = (detailToRemove) => {
    const newList = details.filter((detail) => detail !== detailToRemove)
    setDetails(newList)
  }

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register details={details} setDetails={setDetails} show={show}  handleUpdate={handleUpdate}employee={employee} setEmployee={setEmployee} />} />
        <Route path="/employee" element={<EmployeeList details={details} setDetails={setDetails} handleDelete={handleDelete} handleEdit={handleEdit} employee={employee} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
