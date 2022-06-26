const express = require('express');
const usersRoute = require('./user.route');
const ticketsRoute = require('./ticket.route');
const userTickets = require('./userTickets.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/tickets',
    route: ticketsRoute,
  },
  {
    path: '/users',
    route: usersRoute,
  },
  {
    path: '/userTickets',
    route: userTickets,
  },
];


defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});


module.exports = router;
