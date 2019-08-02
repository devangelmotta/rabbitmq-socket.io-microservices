const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const { setTask } = require('../../../handler-queued/publisher');
const { getUsers } = require('../model')

  router.post('/api/get-users', async(req, res, next) => {

    //let data = {"type": "get-users"}
    let info = await getUsers()
    console.log(info)
    if(info){
      res.json({"status": true, "msj": 'Recovery records'});
    }else{
      res.json({"status": false, "msj": 'Failed recoveryr records'});
    }
    

  });

module.exports = router;