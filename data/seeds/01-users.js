const faker = require('faker');
const bcrypt = require('bcryptjs');

const createUser = () => ({
  username: faker.internet.userName(),
  password: bcrypt.hashSync('password', 10),
  department: faker.random.arrayElement(['Sales', 'Admin', 'Management'])
});

const buildUsers = (count = 30) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push(createUser());
  }
  users.push({
    username: 'test',
    password: bcrypt.hashSync('password', 10),
    department: 'Sales'
  });
  return users;
};

exports.seed = function(knex) {
  return knex('users').insert(buildUsers());
};
