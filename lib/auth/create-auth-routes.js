const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('./jwt');

function getProfileWithToken(user) {
    // eslint-disable-next-line no-unused-vars
    const { hash, ...rest } = user;
    return {
        ...rest,
        token: jwt.sign({ id: user.id })
    };
}

module.exports = function createAuthRoutes(queries) {
    // eslint-disable-next-line new-cap
    const router = express.Router();

    router.post('/signup', (req, res) => {
        console.log(req.body);
        const { password, ...user } = req.body;
        const userName = user.userName;

        // username and password needs to exist 
        if(!userName || !password) {
            res.statusCode(400).json({ error: 'user name and password required' });
            return;
        }

        // username needs to not exist already
        queries.selectUser(userName)
            .then(foundUser => {
                if(foundUser) {
                    res.statusCode(400).json({ error: 'user name already exists' });
                    return;
                }

                // insert into profile  the new user
                queries.insertUser(user, bcrypt.hashSync(password, 8))
                    .then(user => {
                        res.json(getProfileWithToken(user));
                    });
            });
    });

    router.post('/signin', (req, res) => {
        const body = req.body;
        const userName = body.userName;
        const password = body.password;

        // username and password needs to exist
        if(!userName || !password) {
            res.status(400).json({ error: 'user name and password required' });
            return;
        }

        queries.selectUser(userName)
            .then(user => {
                // does username match one in db?
                // #1 !user - if no user, then no match on a row for username
                // #2 !compareSync - provided password did not match hash from db
                if(!user || !bcrypt.compareSync(password, user.hash)) {
                    res.status(400).json({ error: 'username or password incorrect' });
                    return;
                }

                res.json(getProfileWithToken(user));
            });
    });

    return router;
};