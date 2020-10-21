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
});