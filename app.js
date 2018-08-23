const {app, BrowserWindow} = require('electron')
  
  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 1280, height: 800})
  
    // and load the index.html of the app.
    win.loadFile('index.html')
  }
  
  app.on('ready', createWindow)

function myFunction() {
  var map = L.map('map').setView([12.818825299999999, 80.0478493], 13);
  // improve experience on mobile
  if (map.tap) map.tap.disable();
  L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
}).addTo(map);
  map._layersMinZoom=1;

  var srf = L.icon({
// path to the icon
      iconUrl: 'icons/marker.png',
// size of the icon 
     iconSize:     [60, 52],
// point of the icon which will correspond to marker's location 
      iconAnchor:   [0, 26],
// point of the icon where the popup window will open
      popupAnchor: [35, -26]
  });

  var rp = L.icon({
      iconUrl: 'icons/marker.png',
      iconSize:     [52, 60], 
      iconAnchor:   [26, 60], 
      popupAnchor: [0, -60]
  });


  var p1 = L.marker([12.838581915230744, 80.04501342773439], {icon: srf}).addTo(map);
  var p2 = L.marker([12.825191972118786, 80.02578735351564], {icon: rp}).addTo(map);


  p1.bindPopup("<strong style='color: #84b819'>Location 1");
 
// the .openPopup() opens this popup when the page is loaded
p2.bindPopup("<strong style='color: #84b819'>Location 2").openPopup();
 
var popup = L.popup();
}
