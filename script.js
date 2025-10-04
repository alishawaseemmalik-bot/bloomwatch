document.addEventListener('DOMContentLoaded', function(){
  var map = L.map('mapContainer').setView([20,0], 2);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  var points = [
    [33.6844,73.0479,'Islamabad Bloom'],
    [51.5074,-0.1278,'London Bloom'],
    [40.7128,-74.0060,'New York Bloom']
  ];
  points.forEach(p=>L.marker([p[0],p[1]]).addTo(map).bindPopup(p[2]));
  var ctx = document.getElementById('bloomChart').getContext('2d');
  new Chart(ctx, {
    type:'line',
    data:{
      labels:['Jan','Feb','Mar','Apr','May'],
      datasets:[{label:'Flower count',data:[5,10,25,40,30],borderColor:'#2d9c71',backgroundColor:'rgba(45,156,113,0.2)',fill:true}]
    }
  });
});
