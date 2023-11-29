import React, { useState, useEffect } from 'react';
const apiUrl = 'http://localhost:8000/data';


const App = () => {
  const [data, setData] = React.useState([]);
  const [newName, setNewName] = React.useState('');
  const [newStart, setNewStart] = React.useState('');
  const [newDestination, setNewDestination] = React.useState('');
  const [newRoute, setNewRoute] = React.useState('');
  const [newStartTime, setNewStartTime] = React.useState('');

  const [isPopoverOpen, setPopoverOpen] = useState(false);

  const handleButtonClick = () => {
    setPopoverOpen(!isPopoverOpen);
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newName, destination: newDestination, start: newStart, route: newRoute, startTime: newStartTime })
      });

      if (response.ok) {
        // If the post request is successful, fetch updated data
        fetchData();
        setNewName('');
        setNewStart('');
        setNewDestination('');
        setNewRoute('');
        setNewStartTime(''); // Clear the form input
      } else {
        console.error('Failed to post data');
      }
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    
       <div className='d-flex flex-column align-items-center p-2 '> 
      <div>
        <h2>RIDE - SHARE - CONNECT</h2>
        <h4 className='text-center'>Find Your Ride</h4>
      </div>
      <div>
        <button onClick={handleButtonClick} className="open-button btn btn-primary ">
          Create Ride
        </button>
        {isPopoverOpen && (
          <div className="popover" >
            <div class="modal-header m-1 ">
        <h5 class="modal-title fs-5" >CREATE NEW RIDE</h5>
        <button type="button" class="btn-close"  aria-label="Close" onClick={handleButtonClick}></button>
      </div>
            <form className='' onSubmit={handleSubmit}>

              <label className='form-label'>
                Author Name
              </label>
              <input
              className='form-control'
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <label className='form-label'>
                Start
              </label>
              <input
               className='form-control'
                type="text"
                value={newStart}
                onChange={(e) => setNewStart(e.target.value)}
              />
              <label className='form-label'>
                Destination
              </label>
              <input
               className='form-control'
                type="text"
                value={newDestination}
                onChange={(e) => setNewDestination(e.target.value)}
              />
              <label className='form-label'>
                Route
              </label>
              <input
               className='form-control'
                type="text"
                value={newRoute}
                onChange={(e) => setNewRoute(e.target.value)}
              />
              <label className='form-label'>
                Start Time 
              </label>
              <input
               className='form-control'
                type="text"
                value={newStartTime}
                onChange={(e) => setNewStartTime(e.target.value)}
              />
              <button type="submit" className=" btn btn-success form-button">Add Ride</button>
              <button onClick={handleButtonClick} className="btn btn-secondary form-button">
                Close
              </button>
            </form>

          </div>
        )}
      </div>

      <div className='align-self-stretch m-4'>
        <table className='table table-striped table-hover mt-2'>
          <thead>
            <tr>
              <th >ID</th>
              <th >Author Name</th>
              <th >Start</th>
              <th >Destination</th>
              <th >Route</th>
              <th >Start Time</th>
              <th >Request Ride</th>
            </tr>
          </thead>
          <tbody className='table-group-divider'>
            {data.map((item) => (
              <tr key={item.id}>
                <td scope="row">{item.id}</td>
                <td>{item.name}</td>
                <td>{item.start}</td>
                <td>{item.destination}</td>
                <td>{item.route}</td>
                <td>{item.startTime}</td>
                <td><button className='btn btn-dark btn-sm '>Send</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


    </div>
   
   
  );
};

export default App;






