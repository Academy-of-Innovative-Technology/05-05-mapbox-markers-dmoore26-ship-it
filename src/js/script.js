let MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoidXNlcm5vdGZvdW5kMiIsImEiOiJjbW55d3JienIwNjh5MnBwcmIwMjVkdjB6In0.aS1PXiKXNaEE4H2oaF6kqg';

	mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
	const map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [-74.5, 40],
		zoom: 9
	});



