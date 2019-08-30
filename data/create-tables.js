const client = require('../lib/client.js');

client.query(`
        CREATE TABLE users (
               id SERIAL PRIMARY KEY,
               hash VARCHAR(512) NOT NULL,
               user_name VARCHAR(256) NOT NULL
        );

        CREATE TABLE rounds (
                id SERIAL PRIMARY KEY NOT NULL,
                colors TEXT[],
                count INTEGER NOT NULL,
                user_id INTEGER NOT NULL REFERENCES users(id)
        );
`)
    .then(
        () => console.log('create tables complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });
