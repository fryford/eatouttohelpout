var pymChild = new pym.Child();

// absolute url: {{ site.absolute_url }}
// relative url: {{ site.relative_url }}
// base url: {{ site.baseurl }}

// d3.queue()
// 	.defer(d3.csv, "data/data.csv")
// 	// .defer(d3.json, "data/msoacentroidshp.json")
// 	.await(ready);

ready()

function ready() {





	map = new mapboxgl.Map({
		container: "map",
		style: "data/style.json",
		center: [-3.5, 52.355],
		zoom: 5,
		attributionControl: false
	})

	//add fullscreen option
	map.addControl(new mapboxgl.FullscreenControl());

	// Add zoom and rotation controls to the map.
	map.addControl(new mapboxgl.NavigationControl());

	// Disable map rotation using right click + drag
	map.dragRotate.disable();

	// Disable map rotation using touch rotation gesture
	map.touchZoomRotate.disableRotation();

	//add compact attribution
	// map.addControl(new mapboxgl.AttributionControl({
	// 	compact: true
	// }));

	map.addControl(new mapboxgl.AttributionControl({
		compact:true,customAttribution:"© Crown copyright and database rights "+new Date(Date.now()).getFullYear()+" OS 100019153"
		})
	);

	d3.selectAll(".mapboxgl-ctrl-icon").attr("aria-hidden","false")


	map.on("load", function() {
		//map.addSource("area", { type: "geojson", data: areas });

		// map.addSource('points', {
		// 	type: 'vector',
		// 	"tiles": ["http://localhost:8000/tiles/{z}/{x}/{y}.pbf"],
		// 	"promoteId": { "msoacentroids": "areacd" },
		// 	// "buffer":0,
		// 	"minzoom":3,
		// 	"maxzoom":10
		// });



	//	map.addSource("areabound", { type: "geojson", data: areabounds });




		// map.addLayer(
		// 	{
		// 		id: "coronabound",
		// 		type: "points",
		// 		"source": "points",
		// 		"source-layer": "restaurant",
		// 		minzoom: 4,
		// 		maxzoom: 21,
		// 		layout: {},
		// 		paint: {
		// 			'circle-radius': {
		// 				'base': 1.75,
		// 				'stops': [
		// 				[12, 2],
		// 				[22, 180]
		// 				]
		// 				},
		// 				'circle-color': "#666"
		// 	}
		// },
		// 	"place_suburb"
		// );

		//map.addSource("polygon", createGeoJSONCircle([-1, 51], 0.0001));

		// map.addLayer({
		//     "id": "polygon",
		//     "type": "fill",
		//     "source": "polygon",
		//     "layout": {},
		//     "paint": {
		//         "fill-color": "red",
		//         "fill-opacity": 0.2
		//     }
		// });



//		map.on('load', function() {
		map.loadImage(
		'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/200px-Map_marker.svg.png',
		function(error, image) {
		if (error) throw error;
		map.addImage('cat', image);

		map.addSource('points', {
			type: 'vector',
			//"tiles": ["http://localhost/eatouttohelpout/eatouttohelpout/tiles4/{z}/{x}/{y}.pbf"],
			"tiles": ["tiles4/{z}/{x}/{y}.pbf"],
			//"promoteId": { "msoacentroids": "areacd" },
			// "buffer":0,
			"minzoom":8,
			"maxzoom":10
		});


		map.addLayer({
		'id': 'coronabound',
		'type': 'symbol',
		'source': 'points',
		"source-layer": "restaurant3",
		"minzoom": 8,
		"maxzoom": 21,
		'layout': {
		'icon-image': 'cat',
		'icon-ignore-placement': true,
		'icon-size': 0.075
	}
})


		// map.addLayer({
		// 'id': 'coronabound',
		// 'type': 'symbol',
		// 'source': 'points',
		// "source-layer": "restaurant",
		// 'layout': {
		// 'icon-image': 'cat',
		// 'icon-size': 0.05
		// }
		// });
		// }
		// );
		});



		var bounds = new mapboxgl.LngLatBounds();

		// areas.features.forEach(function(feature) {
		// 	bounds.extend(feature.geometry.coordinates);
		// });


		map.fitBounds([[-5.8,50.0],[1.9,55.9]]);

});
	// map.on("mousemove", "coronabound", onMove);
	// map.on("mouseleave", "coronabound", onLeave);
	// map.on("click", "corona", onClick);

map.on('click', 'coronabound', function(e) {

	new mapboxgl.Popup()
	.setLngLat(e.lngLat)
	.setHTML('<h3><a href="http://www.google.com/search?q=' + e.features[0].properties.Name + '+' + e.features[0].properties.Postcode + '"target="_blank">' + e.features[0].properties.Name + '</a></h3>')
		//"<a href='http://www.google.com/search?q=" + e.features[0].properties.Name + "+" + "&btnI'" + "></a>" + e.features[0].properties.Name + "</a>")
	.addTo(map);

});

	//
	//
	// function onMove(e) {
	//
	// 	console.log(map.getZoom())
	// 	var oldareacd = "ff";
	//
	// 	newareacd = e.features[0].properties.areacd;
	//
	// 	if (newareacd != oldareacd) {
	// 		oldareacd = e.features[0].properties.areacd;
	//
	// 		map.setFilter("coronahover", [
	// 			"==",
	// 			"areacd",
	// 			e.features[0].properties.areacd
	// 		]);
	//
	// 		map.setFilter("coronaboundhover", [
	// 			"==",
	// 			"areacd",
	// 			e.features[0].properties.areacd
	// 		]);
	//
	// 		var features = map.queryRenderedFeatures(e.point, {
	// 			layers: ["coronabound"]
	// 		});
	//
	// 		if (features.length != 0) {
	// 			setAxisVal(e.features[0].properties.areanm, e.features[0].properties.areanmhc, e.features[0].properties.areacd);
	// 		}
	// 	}
	// }
	//
	// function onClick(e) {
	// 	console.log(e)
	// 	var oldareacd = "ff";
	// 	newareacd = e.features[0].properties.areacd;
	//
	// 	if (newareacd != oldareacd) {
	// 		oldareacd = e.features[0].properties.areacd;
	// 		map.setFilter("coronahover", [
	// 			"==",
	// 			"areacd",
	// 			e.features[0].properties.areacd
	// 		]);
	//
	// 		map.setFilter("coronaboundhover", [
	// 			"==",
	// 			"areacd",
	// 			e.features[0].properties.areacd
	// 		]);
	// 		console.log(e.features[0].properties)
	//
	// 		setAxisVal(e.features[0].properties.areanm, e.features[0].properties.areanmhc, e.features[0].properties.areacd);
	//
	// 	}
	// }
	//
	// function onLeave() {
	// 	map.setFilter("coronahover", ["==", "areacd", ""]);
	// 	map.setFilter("coronaboundhover", ["==", "areacd", ""]);
	//
	// 	oldlsoa11cd = "";
	// 	hideaxisVal();
	// }
	//
	// function setAxisVal(areanm, areanmhc, areacd) {
	// 	d3
	// 		.select("#keyvalue")
	// 		.style("font-weight", "bold")
	// 		.html(function() {
	// 			if (!isNaN(data2[areacd])) {
	// 				return areanmhc + " (MSOA " + areanm + ")<br>" + data2[areacd] + " confirmed deaths";
	// 			} else {
	// 				return areanmhc + " (MSOA " + areanm + ")<br>No data available";
	// 			}
	// 		});
	// }
	//
	// function hideaxisVal() {
	// 	d3
	// 		.select("#keyvalue")
	// 		.style("font-weight", "bold")
	// 		.text("");
	// }


	$(".search-control").click(function() {
		$(".search-control").val('');
	})

	d3.select(".search-control").on("keydown", function() {
	if(d3.event.keyCode === 13){
		event.preventDefault();
		event.stopPropagation();

		myValue=$(".search-control").val();


		getCodes(myValue);
		pymChild.sendHeight();

	}
})

function tog(v){return v?'addClass':'removeClass';}

$(document).on('input', '.clearable', function(){
		$(this)[tog(this.value)]('x');
}).on('mousemove', '.x', function( e ){
		$(this)[tog(this.offsetWidth-28 < e.clientX-this.getBoundingClientRect().left)]('onX');
}).on('touchstart click', '.onX', function( ev ){
		ev.preventDefault();
		$(this).removeClass('x onX').val('').change();
		enableMouseEvents();
		onLeave();
		hideaxisVal();
});

	$("#submitPost").click(function( event ) {

					event.preventDefault();
					event.stopPropagation();

					myValue=$(".search-control").val();


					getCodes(myValue);
					pymChild.sendHeight();
	});


	var createGeoJSONCircle = function(center, radiusInKm, points) {
	    if(!points) points = 64;

	    var coords = {
	        latitude: center[1],
	        longitude: center[0]
	    };

	    var km = radiusInKm;

	    var ret = [];
	    var distanceX = km/(111.320*Math.cos(coords.latitude*Math.PI/180));
	    var distanceY = km/110.574;

	    var theta, x, y;
	    for(var i=0; i<points; i++) {
	        theta = (i/points)*(2*Math.PI);
	        x = distanceX*Math.cos(theta);
	        y = distanceY*Math.sin(theta);

	        ret.push([coords.longitude+x, coords.latitude+y]);
	    }
	    ret.push(ret[0]);

			searchCircle = {
	        "type": "geojson",
	        "data": {
	            "type": "FeatureCollection",
	            "features": [{
	                "type": "Feature",
	                "geometry": {
	                    "type": "Polygon",
	                    "coordinates": [ret]
	                }
	            }]
						}
	        };

	    return {
	        "type": "geojson",
	        "data": {
	            "type": "FeatureCollection",
	            "features": [{
	                "type": "Feature",
	                "geometry": {
	                    "type": "Polygon",
	                    "coordinates": [ret]
	                }
	            }]
	        }
	    };
	};


	function getCodes(myPC)	{

		//first show the remove cross
		d3.select(".search-control").append("abbr").attr("class","postcode");

			// dataLayer.push({
			// 					 'event': 'geoLocate',
			// 					 'selected': 'postcode'
			// 				 })

			var myURIstring=encodeURI("https://api.postcodes.io/postcodes/"+myPC);
			$.support.cors = true;
			$.ajax({
				type: "GET",
				crossDomain: true,
				dataType: "jsonp",
				url: myURIstring,
				error: function (xhr, ajaxOptions, thrownError) {
					},
				success: function(data1){
					if(data1.status == 200 ){
						//$("#pcError").hide();
						lat =data1.result.latitude;
						lng = data1.result.longitude;
						successpc(lat,lng)
					} else {
						$(".search-control").val("Sorry, invalid postcode.");
					}
				}

			});

		}


	function successpc(lat,lng) {

		map.jumpTo({center:[lng,lat], zoom:12})
		point = map.project([lng,lat]);

		//map.getSource('polygon').setData(createGeoJSONCircle([lng, lat], 5).data);







		setTimeout(function(){

		var tilechecker = setInterval(function(){
			 features=null
		 	features = map.queryRenderedFeatures(point,{layers: ['coronabound']});
		 	if(features.length != 0){


		 		 //onrender(),
		 		//map.setFilter("coronahover", ["==", "areacd", features[0].properties.areacd]);

				// map.setFilter("coronahover", [
				// 	"==",
				// 	"areacd",
				// 	features[0].properties.areacd
				// ]);
				//
				// map.setFilter("coronaboundhover", [
				// 	"==",
				// 	"areacd",
				// 	features[0].properties.areacd
				// ]);
				//var features = map.queryRenderedFeatures(point);
				disableMouseEvents();
				//setAxisVal(features[0].properties.areanm, features[0].properties.areanmhc, features[0].properties.areacd);
				//updatePercent(features[0]);
		 		clearInterval(tilechecker);
		 	}
		 },500)
		},500);




	};

	function disableMouseEvents() {
			map.off("mousemove", "coronabound", onMove);
			map.off("mouseleave", "coronabound", onLeave);
	}

	function enableMouseEvents() {
			map.on("mousemove", "coronabound", onMove);
			map.on("click", "corona", onClick);
			map.on("mouseleave", "coronabound", onLeave);
	}



}
