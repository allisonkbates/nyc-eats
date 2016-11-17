//bar chart starts here
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
	data: {
		labels: ["10031", "10032", "10033", "10034", "10040"],
		datasets: [{
			label: '# of A Ratings',
			backgroundColor: 'rgba(255, 99, 132, 0.2)',
			borderColor: 'rgba(255,99,132,1)',
			hoverBackgroundColor: 'rgba(255,99,132,1)',
			borderWidth: 1,
			data: [	288, 334, 319, 281, 188]	
			},
			{
			label: '# of B Ratings',
			backgroundColor: 'rgba(54, 162, 235, 0.2)',
			borderColor: 'rgba(54, 162, 235, 1)',
			hoverBackgroundColor: 'rgba(54, 162, 235, 1)',
			borderWidth: 1,
			data: [42, 62, 53, 44, 29]
			},
			{
			label: '# of C Ratings',
			backgroundColor: 'rgba(255, 206, 86, 0.2)',
			borderColor: 'rgba(255, 206, 86, 1)',
			hoverBackgroundColor: 'rgba(255, 206, 86, 1)',
			borderWidth: 1,
			data: [10, 18, 7, 11, 9]
			}]
		},
	options: {
		legend: {
			display: true,
			position: 'bottom'
			},
		hover: {
			mode: 'single'
			},
		scales: {
			yAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: "# of Ratings"
				},
				ticks: {
					beginAtZero: true
					}
			}],
			xAxes: [{
				display: true,			
				scaleLabel: {
					display: true,
					labelString: 'WaHi Zip Codes'
					}
			}]
			},
		title: {
        	display:true,
        	text: "WaHi Restaurant Ratings",
        	fontSize: 32,
        	}
		}
	});
//line chart starts here
var ctx2 = document.getElementById("myLineChart");
var myLineChart = new Chart(ctx2, {
    type: 'line',
	data: {
		labels: ["10031", "10032", "10033", "10034", "10040"],
		datasets: [{
			label: '# of B Ratings',
			data: [42, 62, 53, 44, 29],
			backgroundColor: 'rgba(255, 99, 132, .2)',
			pointHoverBackgroundColor: 'rgba(255, 99, 132, 1)',
			borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1
		},
		{
			label: '# of A Ratings',
			data: [288, 334, 319, 281, 188],
			backgroundColor: 'rgba(54, 162, 235, 0.2)',
			pointHoverBackgroundColor: 'rgba(54, 162, 235, 1)',
			borderColor: 'rgba(54, 162, 235, 1)',
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
        		fontSize: 32
        	},
        	legend: {
        		display: true,
        		position: 'bottom'
        	}
		}
		});

//pie chart starts here
var ctx3 = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx3, {
	type: 'doughnut',
	data: {
		labels: ["10031", "10032", "10033", "10034", "10040"],
		datasets: [{
			data: [288, 334, 319, 281, 188],
			backgroundColor: [
			'rgba(255, 99, 132, .2)',
			'rgba(210, 135, 140, .2)',
			'rgba(54, 162, 245, .2)',
			'rgba(75, 99, 150, .2)',
			'rgba(255, 286, 76, .2)'
			],
			hoverBackgroundColor: [
			'rgba(255, 99, 132, .5)',
			'rgba(210, 135, 140, .5)',
			'rgba(54, 162, 245, .5)',
			'rgba(75, 99, 150, .5)',
			'rgba(255, 286, 76, .5)'
			]
		}]	
	},
	options: {
		title: {
			display: true,
			text: "WaHi A Ratings",
			fontSize: 32
		},
        legend: {
        	display: true,
        	position: 'bottom'
        }
	}
});