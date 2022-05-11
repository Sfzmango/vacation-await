const { User } = require('../models');

const users = [
    {
        'username': 'maung22',
        'password': 'password30' 
    },
    {
        'username': 'keerti77',
        'password': 'password24'
    },
    {
        'username': 'callan99',
        'password': 'password01'
    },
];

const userSeeds = () => User.bulkCreate(users);

module.exports = userSeeds;