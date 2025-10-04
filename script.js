document.addEventListener('DOMContentLoaded', function(){
  var map = L.map('mapContainer').setView([20,0], 2);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  L.marker([33.6844,73.0479]).addTo(map).bindPopup('Islamabad Bloom').openPopup();
  var ctx = document.getElementById('bloomChart').getContext('2d');
  new Chart(ctx, {
    type:'line',
    data:{
      labels:['Jan','Feb','Mar','Apr','May'],
      datasets:[{label:'Flower count',data:[5,10,25,40,30],borderColor:'#2d9c71',fill:true}]
    }
  });
});