KEY = "AIzaSyDO-dchbaQweyou9F2gjmHF3bvH3YQ8VaE"
var map
var markers = []
var myLatlng

function initMap() {
  var Latlng = new google.maps.LatLng(17.363882,17.044922);
  var mapOptions = {
    zoom: 1,
    center: Latlng
  }
  map = new google.maps.Map(document.getElementById('map'), mapOptions );
}

setInterval(issData, 100000)
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
  var newAddress
  var arrayAddress = []
  arrayAddress.push(data2.results[0].formatted_address)
  for (var i = 0;i < arrayAddress.length; i++) {
    newAddress = arrayAddress[i].split(", ")
  }
  var arrayNum = newAddress.length
  var address = newAddress.slice(arrayNum - 1)
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
  myLatlng = coords
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
  });
  map.setCenter(myLatlng)
  markers.push(marker)
  if (markers.length === 4) {
    markers.shift()
  }
}

issData()

