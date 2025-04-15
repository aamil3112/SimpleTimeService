const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const response = {
    timestamp: new Date().toISOString(),
    ip: req.ip || req.connection.remoteAddress
  };
  
  res.json(response);
});

app.listen(PORT, () => {
  console.log(`SimpleTimeService running on port ${PORT}`);
});
