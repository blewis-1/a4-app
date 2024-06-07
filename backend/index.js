const express = require('express')
const { mongoose } = require('mongoose');
const Note = require('./model/Note');

const port = 3000;
const app = express();


//Access user data.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Connect to database

// CORS for frontend to interact from this origin
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


const uri = ""
mongoose.connect(uri)
    .then(console.log("✅ Connected to database."))
    .catch((error) => {
        console.log('Unable to connect to MongoDB Atlas!');
        console.error(error);
    });



// Get Notes
app.get('/notes', (req, res) => {
    return Note.find()
        .then((notes) => res.status(200).json(notes))
        .catch((error) => res.send(500).json({ error: error }))
});

// Create Notes
app.post('/notes', (req, res) => {

    const noteData = req.body.note;


    if (noteData) {
        const note = new Note({ note: noteData });
        note.save()
            .then(() => { res.status(201).json({ 'message': 'Post created successfully' }); })
            .catch((error) => { res.status(400).json({ error: "Custom error to verify" }) });
    } else {
        res.status(401).status({ "message": "Please add a note" })
    }
});







app.listen(port, () => {
    console.info(`⚙️ Server running on port localhost:${port}`)
})