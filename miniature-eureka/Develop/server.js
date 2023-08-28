const express = require('express');
const path = require('path');
const dbInfo = require('./db/db.json')

const app = express();
const PORT = 3001;

app.use(express.static('public'));

// app.get('/', (req, res) => res.send('Navigate to /send or /routes'));
app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, 'public/index.html'))
);


app.get("/api/notes",(req, res)=>{
    console.log("Hi")
    res.json(dbInfo)
})
//app.get("/doug",()=>{console.log("Bye")})

app.post("/api/notes", (req,res)=> {
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