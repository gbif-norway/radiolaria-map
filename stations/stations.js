document.addEventListener("DOMContentLoaded", function(event) { 
  var el = document.getElementById("map");
  if(el) {
    var lat = el.getAttribute("data-latitude");
    var lon = el.getAttribute("data-longitude");
    var map = L.map('map', {
      center: [lat, lon],
      zoom: 4
    });
    console.log("OK");
    var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    osm.addTo(map);
    var marker = L.marker([lat, lon]).addTo(map);
}
});

