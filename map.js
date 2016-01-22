var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 0, lng: 0},
    zoom: 1,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });
}

var map;
function initMapDropPin(latitude, longitude) {
  console.log(latitude, longitude)
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: latitude, lng: longitude},
    zoom: 1,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });
}

function issData(){
  $.ajax({
    method: "GET",
    url: "http://api.open-notify.org/iss-now.json",
    dataType: 'jsonp',
    success: function(data) {
      var lat = data.iss_position.latitude
      var lng = data.iss_position.longitude
      initMapDropPin(lat, lng)
    }
  })
}

// function googleMaps(data){
//   console.log(data)
// }

issData()
//       console.log(lat, lng)
//       var key = "&key=" + "AIzaSyDO-dchbaQweyou9F2gjmHF3bvH3YQ8VaE"
//       var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + key