const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://admin:admin1234@cluster0.cd5oxal.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Define the Employee schema
const employeeSchema = new mongoose.Schema({
  name: String,
  position: String,
  department: String,
});

const Employee = mongoose.model('Employee', employeeSchema);

// API routes
app.get('/api/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/employees', async (req, res) => {
  const { name, position, department } = req.body;

  const newEmployee = new Employee({ name, position, department });

  try {
    const savedEmployee = await newEmployee.save();
    res.json(savedEmployee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/employees/:id', async (req, res) => {
  const { name, position, department } = req.body;

  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      { name, position, department },
      { new: true }
    );
    res.json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/employees/:id', async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
    res.json(deletedEmployee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
