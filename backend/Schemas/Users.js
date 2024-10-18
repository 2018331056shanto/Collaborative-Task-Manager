const user = `CREATE TABLE user (
    ID  VARCHAR(200) PRIMARY KEY UNIQUE,
    username VARCHAR(200) UNIQUE,
    password VARCHAR(200) )`;
module.exports = user;
