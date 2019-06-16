var Server = require('./Server.js');

//code for opening a file
var openButton = document.getElementById('open-btn-id');
var p = document.createElement('p');
var startServerButton = document.getElementById('server-btn-id');
var p1 = document.createElement('p');
var sendMessage = document.getElementById('send-btn-id');



const { dialog } = require('electron').remote;//I need remote here to access it via another js file


var localServer = new Server();
localServer.printTestClass();


openButton.addEventListener('click', function(){

  //will have to specified file type to chose by extension
  const filePathSelected = dialog.showOpenDialog();//return an array

  console.log(filePathSelected[0]);
  document.body.append(p);
  p.innerText = filePathSelected[0];

});

startServerButton.addEventListener('click', function(){

  localServer.start();
  document.body.append(p1);
  p1.innerText = 'connection Started';

});

sendMessage.addEventListener('click',function () {
  localServer.sendExampleMessage('hello from server at port 2019');

});

