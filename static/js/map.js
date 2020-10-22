// make sure webpage is loading the file
console.log("loaded map.js");

function createMap(michelinStars) {

//create the tile layer for background
    var dark = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "dark-v10",
        accessToken: API_KEY
    });

//create base map object
    var baseMaps = {
        "Dark": dark
    };

//create overlay object
    var overlayMaps = {
        "Michelin Star Restaurants": michelinStars
    };

//create the map object with the different options
    var myMap = L.map("map", {
        center: [0,0],
        zoom: 3,
        layers: [dark, michelinStars]
    });

//create the control for the layers and add it to myMap
    L.control.layers(null,overlayMaps, {
        collapsed: false
    }).addTo(myMap);
}

function createMarkers(response) {

    //pull the restaurants from response.data
    var restaurants = response.data;

    // array to hold starMarkers
    var starMarkers= [];

    //loop through the restaurants array
    for (var i =0; i< restaurants; i++){
        var restuarant = restaurants[i];

        //for each restaurant, create a marker and bind a popup with the name and type of cuisine
        var starMarker = L.marker([restaurant.latitude, restuarant.longitude])
            .bindPopup("<h3>" + restaurant.name + "<hr>" + restaurant.cuisine + "</h3>");
        
        // add the marker back to the array
        starMarkers.push(starMarker);
    }
    

    //create a layer group of star markers and pass it into the map function
    starMarkersLayerGroup = L.layerGroup(starMarkers);
    createMap(starMarkersLayerGroup);
}
//api call for the data
d3.json("/restaurants").then(createMarkers);
