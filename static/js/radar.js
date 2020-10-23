console.log('radar');

function DrawRadar()
{
    d3.json("/one-star").then(function (one) {
        d3.json("/two-star").then(function (two) {
            d3.json("/three-star").then(function (three) {

                var oneStars = {};
                var twoStars = {};
                var threeStars = {};

                for (var i = 0; i < one.length; i++) { 
                    if (one[i].price in oneStars) {
                        oneStars[one[i].price]++;
                    } else {
                        oneStars[one[i].price] = 1;
                    }
                }

                for (var i = 0; i < two.length; i++) { 
                    if (two[i].price in twoStars) {
                        twoStars[two[i].price]++;
                    } else {
                        twoStars[two[i].price] = 1;
                    }
                }

                for (var i = 0; i < three.length; i++) { 
                    if (three[i].price in threeStars) {
                        threeStars[three[i].price]++;
                    } else {
                        threeStars[three[i].price] = 1;
                    }
                }

                var pricesOne = Object.keys(oneStars);
                var oneCounts = Object.values(oneStars); 

                var pricesTwo = Object.keys(twoStars);
                var twoCounts = Object.values(twoStars); 

                var pricesThree = Object.keys(threeStars);
                var threeCounts = Object.values(threeStars); 

                // Check 
                for(var i = 0; i < three.length; i++) {
                    var fixed = {};
                    
                }

                console.log(pricesOne);
                console.log(pricesTwo);
                console.log(pricesThree);
                console.log(oneCounts);
                console.log(twoCounts);
                console.log(threeCounts);

                var data = {
                    labels: pricesOne,
                    datasets: [{
                        label: 'One Star Michelin Restaurant',
                        data: oneCounts,
                        "fill":true,
                        "backgroundColor":"rgba(255, 99, 132, 0.2)",
                        "borderColor":"rgb(255, 99, 132)",
                        "pointBackgroundColor":"rgb(255, 99, 132)",
                        "pointBorderColor":"#fff",
                        "pointHoverBackgroundColor":"#fff",
                        "pointHoverBorderColor":"rgb(255, 99, 132)"
                        },{
                        label: 'Two Star Michelin Restaurant',
                        data: twoCounts,
                        "backgroundColor":"rgba(99, 255, 132, 0.2)",
                        "borderColor":"rgb(99, 255, 132)",
                        "pointBackgroundColor":"rgb(99, 255, 132)",
                        "pointBorderColor":"#fff",
                        "pointHoverBackgroundColor":"#fff",
                        "pointHoverBorderColor":"rgb(99, 255, 132)"
                        },{
                        label: 'Three Star Michelin Restaurant',
                        data: threeCounts,
                        "backgroundColor":"rgba(132, 99, 255, 0.2)",
                        "borderColor":"rgb(132, 99, 255)",
                        "pointBackgroundColor":"rgb(132, 99, 255)",
                        "pointBorderColor":"#fff",
                        "pointHoverBackgroundColor":"#fff",
                        "pointHoverBorderColor":"rgb(132, 99, 255)"
                        }]
                };
            
                options = {
                    scale: {
                        angleLines: {
                            display: true
                        },
                        ticks: {
                            suggestedMin: 50,
                            suggestedMax: 100
                        }
                    }
                };

                var ctx = document.getElementById('myChart').getContext('2d');
            
                var myRadarChart = new Chart(ctx, {
                    type: 'radar',
                    data: data,
                    options: options
                });
            
            });
        });
    });
}

DrawRadar();
