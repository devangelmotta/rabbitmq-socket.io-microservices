const router = require('express').Router();
const passport = require('passport');
const Subscriber = require('../models/user');


  router.post('/api/set-subscriber', async(req, res, next) => {
    const { id, name, email, token, recurrency, type, status, theme } = req.body;
    success = {status: true, msj: 'Subscrito'};
    failed = {status: false, msj: 'No se pudo guardar'}
    
  });

  router.post('/api/send-notification', async(req, res, next) => {
    const { title, msj, image, token} = req.body;
    success = {status: true, msj: 'Subscrito'};
    failed = {status: false, msj: 'No se pudo guardar'}
    
  });

  router.post('/api/all-users', async(req, res, next) => {
   
  });

module.exports = router;