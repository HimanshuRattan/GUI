var map;
var rp;
var link = require('./demo_dgram');

const {app, BrowserWindow} = require('electron')
  
  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 1360, height: 760})
  
    // and load the index.html of the app.
    win.loadFile('index.html')
  }
  
  app.on('ready', createWindow)

var DATA_RATE = 1; //ms

function getInput(){
  var w=document.getElementById("lat1").value;
  var x=document.getElementById("long1").value;
  var y=document.getElementById("lat2").value;
  var z=document.getElementById("long2").value;

  var lol= L.marker([w, x], {icon: rp}).addTo(map);
  var hmm =L.marker([y, z], {icon: rp}).addTo(map);
  lol.bindPopup("<strong style='color: #84b819'> Start Point");
  hmm.bindPopup("<strong style='color: #84b819'> End Point");
  //link.sendData("a");
//make it a string
link.sendData(" " + w + " " + x + " " + y + " " + z);
//document.getElementById("item4").innerHTML = "Value of z="+z; 
 
}
  


function myFunction() {

  map = L.map('map').setView([12.818825299999999, 80.0478493], 13);
  // improve experience on mobile
  //if (map.tap) map.tap.disable();


  L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
}).addTo(map);
  map._layersMinZoom=1;

  var srf = L.icon({
// path to the icon
      iconUrl: 'icons/marker.png',
// size of the icon 
     iconSize:     [26, 30],//52,60
// point of the icon which will correspond to marker's location 
      iconAnchor:   [13, 30],//26,60
// point of the icon where the popup window will open
      popupAnchor: [0, -20]//0,-60
  });

  rp = L.icon({
      iconUrl: 'icons/marker.png',
      iconSize:     [26, 30], 
      iconAnchor:   [13, 30], 
      popupAnchor: [0, -20]
  });

  // var p1 = L.marker([12.838581915230744, 80.04501342773439], {icon: srf}).addTo(map);
  // var p2 = L.marker([12.825191972118786, 80.02578735351564], {icon: rp}).addTo(map);
 
  
  /*var p3 = L.marker([w, x], {icon: rp}).addTo(map);*/
 // p1.bindPopup("<strong style='color: #84b819'>Location 1").openPopup();
 // p2.bindPopup("<strong style='color: #84b819'> Location 2");

// the .openPopup() opens this popup when the page is loaded

/*p3.bindPopup("<strong style='color: #84b819'> Start");
p4.bindPopup("<strong style='color: #84b819'> End");
 */
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);


}
/*map.on('click', function(e) {
    alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
});*/

/*function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
*/
  /*$('#button').click(function() {
    link.sendData(1);
    //$('#autoStatus').removeClass('yellow').removeClass('red').addClass('green');
    //$('[id^=send]').prop('disabled', true);
});
 // */


