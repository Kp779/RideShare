import React, { useState, useEffect } from "react";
// const apiUrl = 'http://localhost:8000/data';
import axios from "axios";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    start: "",
    destination: "",
    route: "",
    startTime: "",
  });
  const [isPopoverOpen, setPopoverOpen] = useState(false);

  const handleButtonClick = () => {
    setPopoverOpen(!isPopoverOpen);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/employees")
      .then((response) => setEmployees(response.data));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
   
    setNewEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
  };

  const handleAddEmployee = (event) => {
    axios
      .post("http://localhost:5000/api/employees", newEmployee)
      .then((response) => {
        setEmployees([...employees, response.data]);
        setNewEmployee({
          name: "",
          start: "",
          destination: "",
          route: "",
          startTime: "",
        });
      });
      setPopoverOpen(!isPopoverOpen);
    event.preventDefault();
    
  };
  return (
    <div className="d-flex flex-column align-items-center p-2 ">
      <div>
        <h2>RIDE - SHARE - CONNECT</h2>
        <h4 className="text-center">Find Your Ride</h4>
      </div>
      <div>
        <button
          onClick={handleButtonClick}
          className="open-button btn btn-primary "
        >
          Create Ride
        </button>
        {isPopoverOpen && (
          <div className="popover">
            <div class="modal-header m-1 ">
              <h5 class="modal-title fs-5">CREATE NEW RIDE</h5>
              <button
                type="button"
                class="btn-close"
                aria-label="Close"
                onClick={handleButtonClick}
              ></button>
            </div>
            <form>
              <label className="form-label">Author Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                value={newEmployee.name}
                onChange={handleInputChange}
              />
              <label className="form-label">Start</label>
              <input
                className="form-control"
                type="text"
                name="start"
                value={newEmployee.start}
                onChange={handleInputChange}
              />
              <label className="form-label">destination</label>
              <input
                className="form-control"
                type="text"
                name="destination"
                value={newEmployee.destination}
                onChange={handleInputChange}
              />
              <label className="form-label">route</label>
              <input
                className="form-control"
                type="text"
                name="route"
                value={newEmployee.route}
                onChange={handleInputChange}
              />
              <label className="form-label">startTime</label>
              <input
                className="form-control"
                type="text"
                name="startTime"
                value={newEmployee.startTime}
                onChange={handleInputChange}
              />
              <button
                onClick={handleAddEmployee}
                type="submit"
                className=" btn btn-success form-button"
              >
                Add Ride
              </button>
              <button
                onClick={handleButtonClick}
                className="btn btn-secondary form-button"
              >
                Close
              </button>
            </form>
          </div>
        )}
      </div>

      <div className="align-self-stretch m-4">
        <table className="table table-striped table-hover mt-2">
          <thead>
            <tr>
              <th>ID</th>
              <th>Author Name</th>
              <th>Start</th>
              <th>Destination</th>
              <th>Route</th>
              <th>Start Time</th>
              <th>Request Ride</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {employees.map((employee) => (
              <tr key={employee._id}>
                <td scope="row">{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.start}</td>
                <td>{employee.destination}</td>
                <td>{employee.route}</td>
                <td>{employee.startTime}</td>
                <td>
                  <button className="btn btn-dark btn-sm ">Send</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
