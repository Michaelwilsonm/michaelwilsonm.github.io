var map;
function initMap(latitude, longitude) {
  console.log(latitude, longitude)
  if (latitude || longitude === undefined) {
    latitude = 0
    longitude = 0
  }
  else {
    var myLatLng = {lat: latitude, lng: longitude};
  }
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: latitude, lng: longitude},
    zoom: 1,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
  });
}

// setInterval(issData, 6000)

function issData(){
  $.ajax({
    method: "GET",
    url: "http://api.open-notify.org/iss-now.json",
    dataType: 'jsonp',
    success: function(data) {
      console.log(data)
      var lat = data.iss_position.latitude
      var lng = data.iss_position.longitude
      initMap(lat, lng)
    }
  })
}
issData()

// function googleMaps(data){
//   console.log(data)
// }

//       console.log(lat, lng)
//       var key = "&key=" + "AIzaSyDO-dchbaQweyou9F2gjmHF3bvH3YQ8VaE"
//       var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + key