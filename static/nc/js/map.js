function generateMap() {
	var mapOptions = {
		center: new google.maps.LatLng(42.36144, -71.05936 ),
		zoom: 16,
		mapTypeId: google.maps.MapTypeId.ROAD
	}

	var map = new google.maps.Map(document.getElementById('map'), mapOptions);

	var marker = new google.maps.Marker({
		position: mapOptions.center
	})

	marker.setMap(map);
}
