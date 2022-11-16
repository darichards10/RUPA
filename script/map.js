
function startMap() {
  var map = L.map('map');
  map.setView([37.1375, -80.5502], 17); //13
   
  showLots(map);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19, //19
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    document.getElementById("main").scrollIntoView({behavior: "smooth",block: "end"});
   }