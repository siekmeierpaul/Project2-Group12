//need route function in flask to send data back

// Show that we've loaded the JavaScript file
console.log("Loaded pie.js");

// Query the endpoint that returns a JSON ...
d3.json("/restaurants").then(function (data) {

    // ... and dump that JSON to the console for inspection
    console.log(data); 



    Plotly.newPlot("plot", data, layout);
});


