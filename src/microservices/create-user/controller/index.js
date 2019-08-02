const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const {  createUser} = require('../model')
const { setTask } = require('../../../handler-queued/publisher');

  router.post('/api/create-user', [

    check('name').isString(),
    check('email').isEmail(),
    check('phone').isMobilePhone('es-MX'),
    check('birthday').isString(),
    check('status').isBoolean(),

  ], async(req, res, next) => {
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  } 
    let data = {"type": "create", "data": req.body}
    await setTask(data)

    res.json({status: true, msj: 'Petición agregada a la lista'});

  });



module.exports = router;