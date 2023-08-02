const mysql = require('mysql');

// MySQL database configuration for XAMPP default setup
const dbConfig = {
  host: 'localhost',
  user: 'root', // Default username for XAMPP MySQL is 'root'
  password: '', // Default password for XAMPP MySQL is empty (no password)
  database: 'test_laravel', // Replace with your MySQL database name
};

// Create a connection to the database
const connection = mysql.createConnection(dbConfig);

// Attempt to connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err.message);
    return;
  }

  console.log('Connected to MySQL database!');
  connection.end(); // Close the connection
});

