var ctx = document.getElementById("myChart");
			var myChart = new Chart(ctx, {
    			type: 'bar',
				data: {
					labels: ["10031", "10032", "10033", "10034", "10040"],
					datasets: [{
						label: '# of A Ratings',
						data: [288, 334, 319, 281, 188],
						backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
                		],
						borderColor: [
		                'rgba(255,99,132,1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            	],
            			borderWidth: 1
					}]
				},
				options: {
					scales: {
						yAxes: [{
							ticks: {
							beginAtZero: true
							}
						}]
					},
					 title: {
        				display:true,
        				text: "A Rating Restaurants",
        				fontSize: 32,
        				}
					}
			});
var ctx2 = document.getElementById("myLineChart");
			var myLineChart = new Chart(ctx2, {
    			type: 'line',
				data: {
					labels: ["10031", "10032", "10033", "10034", "10040"],
					datasets: [{
						label: '# of B Ratings',
						data: [42, 62, 53, 44, 29],
						backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
                		],
						borderColor: [
		                'rgba(255,99,132,1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            	],
            			borderWidth: 1
					}]
				},
				options: {
					scales: {
						yAxes: [{
							ticks: {
							beginAtZero: true
							}
						}]
					},
					 title: {
        				display:true,
        				text: "B Rating Restaurants",
        				fontSize: 32,
        				}
					}
			});