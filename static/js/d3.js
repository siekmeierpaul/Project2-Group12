console.log("connected.")

// this code borrowed from pie.js
d3.json("/restaurants").then(function (response) {

    var cuisinecount = {};
    
    for (var i = 0; i < response.length; i++) { 
        if (response[i].cuisine in cuisinecount) {
            cuisinecount[response[i].cuisine]++;

        } else {
            cuisinecount[response[i].cuisine] = 1;

        }
    }

    var cuisinetypes = Object.keys(cuisinecount);
    var cuisinecounts = Object.values(cuisinecount); 

    var barData = {
        labels: cuisinetypes.slice(0,10),
        series: [cuisinecounts.slice(0,10)]
    }; 

    new Chartist.Bar('.ct-chart', barData);

});


d3.selectAll("#selDataset").on("change", updateBar);

// Function called by DOM changes
function updateBar() {
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  var data = [];

  dataset == "restaurants"

  if (dataset == "one-star") {
    d3.json("/one-star").then(function (data) {

        // ... and dump that JSON to the console for inspection
        // console.log(data); 
    
        var cuisinecount = {};
        
        for (var i = 0; i < data.length; i++) { 
            if (data[i].cuisine in cuisinecount) {
                cuisinecount[data[i].cuisine]++;
                // console.log(`incrementing ${data[i].cuisine}`);
            } else {
                cuisinecount[data[i].cuisine] = 1;
                // console.log(`adding ${data[i].cuisine}`);
            }
        }
    
        var cuisinetypes = Object.keys(cuisinecount);
        var cuisinecounts = Object.values(cuisinecount); 
    
        var barData = {
            labels: cuisinetypes.slice(0,10),
            series: [cuisinecounts.slice(0,10)]
        }; 
    
        new Chartist.Bar('.ct-chart', barData);
  })}
  
  else if (dataset == "two-star") {
    d3.json("/two-star").then(function (data) {

        // ... and dump that JSON to the console for inspection
        // console.log(data); 
    
        var cuisinecount = {};
        
        for (var i = 0; i < data.length; i++) { 
            if (data[i].cuisine in cuisinecount) {
                cuisinecount[data[i].cuisine]++;
                // console.log(`incrementing ${data[i].cuisine}`);
            } else {
                cuisinecount[data[i].cuisine] = 1;
                // console.log(`adding ${data[i].cuisine}`);
            }
        }
    
        var cuisinetypes = Object.keys(cuisinecount);
        var cuisinecounts = Object.values(cuisinecount); 
    
        var barData = {
            labels: cuisinetypes.slice(0,10),
            series: [cuisinecounts.slice(0,10)]
        }; 
    
        new Chartist.Bar('.ct-chart', barData);
  })}

  else if (dataset == "three-star") {
    d3.json("/three-star").then(function (data) {

        // ... and dump that JSON to the console for inspection
        // console.log(data); 
    
        var cuisinecount = {};
        
        for (var i = 0; i < data.length; i++) { 
            if (data[i].cuisine in cuisinecount) {
                cuisinecount[data[i].cuisine]++;
                // console.log(`incrementing ${data[i].cuisine}`);
            } else {
                cuisinecount[data[i].cuisine] = 1;
                // console.log(`adding ${data[i].cuisine}`);
            }
        }
    
        var cuisinetypes = Object.keys(cuisinecount);
        var cuisinecounts = Object.values(cuisinecount); 
    
        var barData = {
            labels: cuisinetypes.slice(0,10),
            series: [cuisinecounts.slice(0,10)]
        }; 
    
        new Chartist.Bar('.ct-chart', barData);
  })}

  else if (dataset == "restaurants") {
    d3.json("/restaurants").then(function (data) {

        // ... and dump that JSON to the console for inspection
        // console.log(data); 
    
        var cuisinecount = {};
        
        for (var i = 0; i < data.length; i++) { 
            if (data[i].cuisine in cuisinecount) {
                cuisinecount[data[i].cuisine]++;
                // console.log(`incrementing ${data[i].cuisine}`);
            } else {
                cuisinecount[data[i].cuisine] = 1;
                // console.log(`adding ${data[i].cuisine}`);
            }
        }
    
        var cuisinetypes = Object.keys(cuisinecount);
        var cuisinecounts = Object.values(cuisinecount); 
    
        var barData = {
            labels: cuisinetypes.slice(0,10),
            series: [cuisinecounts.slice(0,10)]
        }; 
    
        new Chartist.Bar('.ct-chart', barData);
  })}
  

}


