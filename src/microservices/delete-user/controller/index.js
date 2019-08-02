const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const { setTask } = require('../../../handler-queued/publisher');
const { deleteUser } = require('../model')

  router.post('/api/delete-user', [

    check('id').isNumeric(),


  ], async(req, res, next) => {
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  } 
    let data = {"type": "delete", "data": req.body}
    await setTask(data)
    //deleteUser(req.body)

    res.json({status: true, msj: 'Petición agregada a la lista'});

  });



module.exports = router;