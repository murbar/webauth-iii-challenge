const faker = require('faker');
const bcrypt = require('bcryptjs');

const createUser = () => ({
  username: faker.internet.userName(),
  password: bcrypt.hashSync('password', 10),
  department: faker.name.jobArea()
});

const buildUsers = (count = 10) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push(createUser());
  }
  return users;
};

exports.seed = function(knex) {
  return knex('users').insert(buildUsers());
};
