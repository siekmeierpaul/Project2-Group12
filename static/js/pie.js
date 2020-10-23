//need route function in flask to send data back

// Show that we've loaded the JavaScript file
console.log("Loaded pie.js");

// Query the endpoint that returns a JSON ...
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

    var trace1 = {
        labels: cuisinetypes.slice(0,10),
        values: cuisinecounts.slice(0,10),
        type: 'pie'
      };
      

      var data = [trace1];
      
      var layout = {
        title: "Pie Chart",
      };

    Plotly.newPlot("plot", data, layout);
})


// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
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
    
        var trace1 = {
            labels: cuisinetypes.slice(0,10),
            values: cuisinecounts.slice(0,10),
            type: 'pie'
          };
          
    
          var data = [trace1];
          
          var layout = {
            title: "Pie Chart",
          };
    
        Plotly.newPlot("plot", data, layout);
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
    
        var trace1 = {
            labels: cuisinetypes.slice(0,10),
            values: cuisinecounts.slice(0,10),
            type: 'pie'
          };
          
    
          var data = [trace1];
          
          var layout = {
            title: "Pie Chart",
          };
    
        Plotly.newPlot("plot", data, layout);
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
    
        var trace1 = {
            labels: cuisinetypes.slice(0,10),
            values: cuisinecounts.slice(0,10),
            type: 'pie'
          };
          
    
          var data = [trace1];
          
          var layout = {
            title: "Pie Chart",
          };
    
        Plotly.newPlot("plot", data, layout);
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
    
        var trace1 = {
            labels: cuisinetypes.slice(0,10),
            values: cuisinecounts.slice(0,10),
            type: 'pie'
          };
          
    
          var data = [trace1];
          
          var layout = {
            title: "Pie Chart",
          };
    
        Plotly.newPlot("plot", data, layout);
  })}
  

}
