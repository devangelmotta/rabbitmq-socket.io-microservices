const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const { setTask } = require('../../../handler-queued/publisher');
const { updateUser } = require('../model')

  router.post('/api/update-user', [
    check('id').isNumeric(),
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
    let data = {"type": "update", "data": req.body}
    //await updateUser(req.body)
    await setTask(data)

    res.json({status: true, msj: 'Petición agregada a la lista'});

  });



module.exports = router;