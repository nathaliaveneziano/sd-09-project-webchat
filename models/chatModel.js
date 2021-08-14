const connection = require('./connection');

const saveMessage = async ({ message, nickname, timestamp }) => {
  await connection()
    .then((db) => db.collection('messages').insertOne({ message, nickname, timestamp })); 
};

const getMessage = async () => {
  await connection()
    .then((db) => db.collection('message').find({}).toArray());
};

module.exports = {
  saveMessage,
  getMessage,
};
