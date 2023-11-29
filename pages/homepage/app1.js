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
        body: JSON.stringify({ name: newName, destination : newDestination, start: newStart , route : newRoute, startTime : newStartTime })
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
    <div>
      <h1>CRUD Application</h1>

      <button onClick={handleButtonClick} className="open-button">
        Open Popover
      </button>
      {isPopoverOpen && (
        <div className="popover">
            <form onSubmit={handleSubmit}>
           
        <label>
          Author Name:
          </label>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        <label>
          Start:
          </label>
          <input
            type="text"
            value={newStart}
            onChange={(e) => setNewStart(e.target.value)}
          />
          <label>
          Destination:
          </label>
          <input
            type="text"
            value={newDestination}
            onChange={(e) => setNewDestination(e.target.value)}
          />
          <label>
          Route:
          </label>
          <input
            type="text"
            value={newRoute}
            onChange={(e) => setNewRoute(e.target.value)}
          />
          <label>
          Start Time:
          </label>
          <input
            type="text"
            value={newStartTime}
            onChange={(e) => setNewStartTime(e.target.value)}
          />
        <button type="submit" >Add Ride</button>
        <button onClick={handleButtonClick} className="close-button">
            Close
          </button>
      </form>
          
        </div>
      )}
      <table>
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
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.start}</td>
              <td>{item.destination}</td>
              <td>{item.route}</td>
              <td>{item.startTime}</td>
              <td><button>Send</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;



 


