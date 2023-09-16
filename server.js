const express = require('express');
const path = require('path');
const fs = require('fs')
const dbInfo = require('./db/db.json')

const app = express();
const PORT = 3001;

app.use(express.static('public'));

// app.get('/', (req, res) => res.send('Navigate to /send or /routes'));
app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, 'public/notes.html'))
);


app.get("/api/notes",(req, res)=>{
  var data = fs.readFileSync(path.join(__dirname, 'db', 'db.json'))
  var myObject= JSON.parse(data)
  console.log(myObject)
    res.json(data)
})


app.post("/api/notes", (req,res)=> {
  var data = fs.writeFile(path.join(__dirname, 'db', 'db.json'),[],(error) => {
    if (err) throw err;
    console.log('The file has been saved!');
  })
  res.json("WHATS UP!?!?!")
})

//app.delete("/api/notes", (req, res)=>{})//EC
app.get("*",(req, res)=>{
    res.json("Sorry!")
})


// app.get('/paths', (req, res) =>
//   res.sendFile(path.join(__dirname, 'public/paths.html'))
// );

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);