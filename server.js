// Load Environment Variables from the .env file
require('dotenv').config();

//API Service Dependencies

// Application Dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// Database Client
const client = require('./lib/client');

// Auth
const ensureAuth = require('./lib/auth/ensure-auth');
const createAuthRoutes = require('./lib/auth/create-auth-routes');
const authRoutes = createAuthRoutes({
    selectUser(userName) {
        return client.query(`
            SELECT id, user_name as "userName", hash 
            FROM users
            WHERE user_name = $1;
        `,
        [userName]
        ).then(result => result.rows[0]);
    },
    insertUser(user, hash) {
        return client.query(`
            INSERT into users (user_name, hash)
            VALUES ($1, $2)
            RETURNING id, user_name as "userName";
        `,
        [user.userName, hash]
        ).then(result => result.rows[0]);
    }
});

// Application Setup
const app = express();
const PORT = process.env.PORT;
app.use(morgan('dev')); // http logging
app.use(cors()); // enable CORS request
app.use(express.static('public')); // enable serving files from public
app.use(express.json()); // enable reading incoming json data

// setup authentication routes
app.use('/api/auth', authRoutes);

// everything that starts with "/api" below here requires an auth token!
app.use('/api', ensureAuth);

app.post('/api/rounds', (req, res) => {
    const round = req.body;

    client.query(`
       INSERT INTO rounds (colors, count, user_id)
       VALUES ($1, $2, $3)
       RETURNING *;
    `,
    [round.colors, round.count, round.user_id]
    )
        .then(result => {
            res.json(result.rows[0]);
        })
        .catch(err => {
            if(err.code === '23505') {
                res.status(400).json({
                    error: `This round already exists`
                });
            }
            res.status(500).json({
                error: err.message || err
            });
        });
});

app.get('/api/rounds', (req, res) => {
    const userId = req.userId;
    client.query(`
    SELECT *
    FROM rounds 
    WHERE rounds.user_id = $1
    `,
    [userId])
        .then(result => {
            res.json(result.rows);
        });
});

app.get('/api/users', (req, res) => {
    const userId = req.userId;
    client.query(`
    SELECT user_name
    FROM users
    WHERE users.id = $1
    `,
    [userId])
        .then(result => {
            res.json(result.rows[0]);
        });
});

// Start the server
app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});

