var q = 'tasks';
var open = require('amqplib').connect('amqp://localhost');
const path = require('path');
const { createUser } = require('../microservices/create-user/model');
const { updateUser } = require('../microservices/update-user/model');
const { deleteUser } = require('../microservices/delete-user/model');
const { getUsers } = require('../microservices/get-users/model');

function handlerConsumerTask(){
  console.log('Starting consumer task')

  open.then(function(conn) { 
      return conn.createChannel();
    }).then(function(ch) {
      return ch.assertQueue(q).then(function(ok) {
        return ch.consume(q, function(msg) {
          if (msg !== null) {
            let dataString = msg.content.toString();
            let dataJson = JSON.parse(dataString);
            if(dataJson.type){
              switch (dataJson.type) {
                case 'create':
                  async ()=>{
                    await createUser(dataJson.data)
                  }
                  break;

                case 'update':
                    updateUser(dataJson.data)
                  break;

                case 'delete':
                    deleteUser(dataJson.data)
                  break;
              
                case 'delete':
                    deleteUser(dataJson.data)
                  break;

                default:
                  break;
              }
            }            
          }
        });
      }); 
    }).catch(console.warn);

}

  module.exports = handlerConsumerTask()