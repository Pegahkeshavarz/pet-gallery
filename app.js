const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));


app.get('/', (req,res) => {
  res.render();
});

const PORT = process.env.port || 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
