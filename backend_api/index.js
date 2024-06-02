const express = require('express');
const { default: mongoose, connect } = require('mongoose');
const User = require('./model/User');
const app = express();
const port = 3000;

//Access user data.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CORS for frontend to interact from this origin
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


// connect to database
const uri = "this is blank and need to be processed from an env file.";
mongoose.connect(uri)
    .then(console.log("✅ Connected to database."))
    .catch((error) => {
        console.log('Unable to connect to MongoDB Atlas!');
        console.error(error);
    });




app.post('/api/users', (req, res) => {
    // Create a user
    const password = req.body.password;
    const fullName = req.body.fullName;
    const email = req.body.email;

    let user = User.findOne({ email: email });
    if (user) return res.status(400).send("User already register.");

    if (email && password && fullName) {
        user = new User({
            email: email,
            password: password,
            fullName: fullName,
        });

        user.save()
            .then(() => res.status(201).json({ message: 'User created.', user }))
            .catch((error) => res.status(500).send({ error: error }));
    }
})


// Get the current
app.get('/api/users/', (req, res) => {
    User.find()
        .then((users) => res.status(200).json(users))
        .catch((error) => res.send(500).json({ error: error }))
})


app.listen(port, () => {
    console.info(`⚙️ Server running on port localhost:${port}`)
});

