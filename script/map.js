
/**
 * Simple function that initializes the map on screen. 
 */
 function startMap() {

  var map = L.map('map');
  map.setView([37.1375, -80.5502], 17); //13
   
  showLots(map);

  var legend = L.control({position:"bottomleft"});
  legend.onAdd = function(map) {
    var div = L.DomUtil.create('div','leaflet-control-layers leaflet-control-layers-expanded leaflet-control');
    L.DomUtil.setOpacity(div,.85);
    
    if(cookiesEnabled && loginExists && userpark != null && userpark[0].isParked == 1) {
      div.innerHTML += "<form align='center' method='POST'><p>Currently parked at " + userpark[0].LotLetter + ": " + userpark[0].SpID + "</p><button type='submit' name='unparksubmission' value='" + userpark[0].LotLetter + "," + userpark[0].SpID +"'>Unpark</button></form><hr>";
    }
    div.innerHTML += "<p style='text-align: center;'>&#9670; Map Legend &#9670;</p><hr>";
    div.innerHTML += "<p style='color:#00FF00; text-align: center;'>&#9670; Low Occupancy</p><p style='color: #DDDD00; text-align: center;'>&#9670; Medium Occupancy</p><p style='color: #FF0000; text-align: center;'>&#9670; High Occupancy</p>";
    div.innerHTML += "<hr><p style='text-align: center;'>Please select a lot.</p>";

    return div;
  }

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19, //19
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  legend.addTo(map);

  document.getElementById("main").scrollIntoView({behavior: "smooth",block: "end"});
  }