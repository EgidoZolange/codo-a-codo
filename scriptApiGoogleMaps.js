function iniciarMap(){
  var coord = {lat:-34.6112889 ,lng: -58.5544825};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 15,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}