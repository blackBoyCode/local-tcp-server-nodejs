const net = require('net');
var socketTest;

module.exports = class Server {

  //can't declare variable here...

  printTestClass() {

    console.log('test class');


  }


  start(){

    //creating a tcp server
   const server = net.createServer(socket => {
     socketTest = socket;

     socket.on('connect',() => {

       console.log('connected');
      // socket.write('welcome to server 2019')

      });

     //this works
      socket.on('close',had_error => {
        console.log('error')
      });

      //this works
      socket.on('data',function(data){
          socket.setEncoding('utf-8')
          console.log('succesful write: ' + data);




      })

    });


    server.listen(2019,'localHost');
    console.log('listening...');
    console.log(server.address());





  }

  sendExampleMessage(message){

   socketTest.write(message);

  }


};
