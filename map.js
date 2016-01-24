var map

setInterval(issData, 7000)
function issData(){
  $.ajax({
    method: "GET",
    url: "http://api.open-notify.org/iss-now.json",
    dataType: 'jsonp',
    success: latLong
  }).fail(function(err){
    console.log(err.statusText)
  })
}

function latLong(data){
  var iss_pos = {
    lat: data.iss_position.latitude,
    lng: data.iss_position.longitude
  }
  dropPin(iss_pos)
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 17.0000, lng: 17.00000},
    zoom: 1,
  });
}

function dropPin(coords) {
  var myLatLng = coords
  console.log(coords)
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
  });
}


issData()
