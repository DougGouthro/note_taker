const express = require('express');
const path = require('path');
const fs = require('fs')
const dbInfo = require('./db/db.json')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => res.send('Navigate to /send or /routes'));
// app.get('/', (req, res) =>
// res.sendFile(path.join(__dirname, 'public/index.html'))
// );

app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, 'public/notes.html'))
);


app.get("/api/notes",(req, res)=>{
  var data = fs.readFileSync(path.join(__dirname, 'db', 'db.json'))
  var myObject= JSON.parse(data)
  console.log(myObject)
    res.json(myObject)
})


app.post("/api/notes", (req,res)=> {
  console.log(req.body)
  var oldNotes = JSON.parse(fs.readFileSync(path.join(__dirname, 'db', 'db.json')))
  oldNotes.push({
    title:req.body.title,
    text:req.body.text
  })
  fs.writeFileSync(path.join(__dirname, 'db', 'db.json'),JSON.stringify(oldNotes))
  res.json({message:"Added new note."})
})

//app.delete("/api/notes", (req, res)=>{})//EC
app.get("*",(req, res)=>{
  res.sendFile(path.join(__dirname, 'public/index.html'))
})


// app.get('/paths', (req, res) =>
//   res.sendFile(path.join(__dirname, 'public/paths.html'))
// );

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);