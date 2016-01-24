KEY = "AIzaSyDO-dchbaQweyou9F2gjmHF3bvH3YQ8VaE"
var map

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 17.0000, lng: 17.00000},
    zoom: 1,
  });
}

// setInterval(issData, 10000)
function issData(){
  $.ajax({
    method: "GET",
    url: "http://api.open-notify.org/iss-now.json",
    dataType: 'jsonp',
    success: latLong,
  }).fail(function(err){
    console.log(err.statusText)
  })
}

function googleApi(googleLatLng){
  var googleLat = googleLatLng.lat
  var googleLng = googleLatLng.lng
  GOOGLEURL = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + googleLat + "," + googleLng + "&key=" + KEY
  $.get(GOOGLEURL, locationStatus)
}


function locationStatus(data2) {
  if (data2.results < 1) {
    var results = "the Ocean"
    printAddress(results)
  }else{
  var arrayAddress = []
  arrayAddress.push(data2.results[0].formatted_address)
  var arrayNum = arrayAddress.length
  var address = arrayAddress.slice(arrayNum)
  console.log(address)
  printAddress(address)
  }
}

function printAddress(address) {
  var location = address
  $("#iss-address").html("<p>" + "Currently flying over " + location + "</p>")
}

function latLong(data){
  var iss_pos = {
    lat: data.iss_position.latitude,
    lng: data.iss_position.longitude
  }
  dropPin(iss_pos)
  printCoords(iss_pos)
  googleApi(iss_pos)
}

function printCoords(coords) {
  var latitude = coords.lat
  var longitude = coords.lng
  $("#iss-location").html("<p>" + "Current coordinates of the International Space Station" + "</p>" + "<p>" + "latitude : " + latitude + "</br>" + " longitude : " + longitude)
}

function dropPin(coords) {
  var myLatLng = coords
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
  });
}


issData()
