var dgram = require('dgram');
var server = dgram.createSocket('udp4');
var host = '192.168.1.51';
var port= 5005;



// server.on('error', fucntion(err){
//   console.log(err);
//   server.close();
// });

server.on('message', function(msg, rinfo){
	console.log(msg.toString());
  //console.log('data received from client : '+msg.toString());
 // console.log('Received %d bytes from %s:%d\n',msg.length, rinfo.address, rinfo.port);
});

server.on('listening', function(){
  const address = server.address();
  console.log('Server is listening at port' + port);
});
server.bind(port);


var sendData =function(data){
var buf = new Buffer(data);
server.send(buf, 0, buf.length, port, host, function(err, bytes) {
 // server.close();
 console.log(err);
});
}

var lmao=parseInt(msg)


module.exports.sendData = sendData;














//------------------------------------------------------
//  var setServer =function(host,port){
// //(host,port) 
//   server.on('error',function(err){
//   console.log('Error: ' + err);
//   server.close();
// });
//   /*server.on('error', fucntion(err){
//   //console.log(`server error:\n${err.stack}`);
//   server.close();
// });*/

// server.on('message', function(msg, rinfo){
//   console.log('data received from client : '+msg.toString());
//   console.log('Received %d bytes from %s:%d\n',msg.length, info.address, info.port);
// });

// server.on('listening', function(){
//   const address = server.address();
//   console.log('Server is listening at port' + port);
//   //console.log(`server listening ${address.address}:${address.port}`);
//   //console.log(address.address + address.port);
// });
// server.bind(port);
// }

// var sendData =function(data){
// 	// const dgram = require('dgram');
// var buf = new Buffer(data);
// //const server = dgram.createSocket('udp4');
// server.send(buf, 0, buf.length, port, host, function(err, bytes) {
//  server.close();
// });
// }

//  /*var getData= function (data) {
//  	if (data[0] == '$')
//  		data=JSON.parse(data);
//  	var long=data[1];
//  	var lati=data[2];
//  	document.getElementById("lat3").innerHTML = lati;
//  	document.detElementByID("long3").innerHTML = long;

//  }*/

// module.exports.setServer = setServer;
// module.exports.sendData = sendData;
