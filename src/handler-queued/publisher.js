var q = 'tasks';
var connect;
var channel;
var setQueue;

//rabbitmq:rabbitmq@rabbitmq
async function handlerQueued(){
    try{
      connect = await require('amqplib').connect('amqp://localhost');
        channel = await connect.createChannel();
        setQueue = await channel.assertQueue(q)
    } catch(err){
        console.log(err)
    }
}
 
async function setTask(objectData){
  
    try {
        console.log('Publicando task')
        channel.sendToQueue(q, Buffer.from(JSON.stringify(objectData))) 
    } catch (err) {
        console.log(err)
    }
}

handlerQueued()

module.exports = {
  setTask, handlerQueued
}
