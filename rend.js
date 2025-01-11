var app = require('express')();
const http = require('http').Server(app);
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb+srv://mani2309:mani2309@vtcluster.oeavm.mongodb.net/court", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true,
  tlsAllowInvalidCertificates: true  // Not recommended for production
})


// Define Schema for 'tax' collection
const taxSchema = new mongoose.Schema({}, { collection: 'tax' }); // Empty schema assumes flexible structure
const Tax = mongoose.model('Tax', taxSchema);

// Route to display court.tax data
app.get('/render', async (req, res) => {
  try {
    const taxes = await Tax.find(); // Retrieve all documents from the 'tax' collection
    res.json(taxes); // Send the data as JSON
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

module.exports=app;
