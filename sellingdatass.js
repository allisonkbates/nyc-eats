//bar chart starts here
window.onload = function () {
var names = ['Becky', 'Jessica', 'JoVo', 'Kelli'];
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
	type: 'bar',
	data: { 	 	
		labels: names,
		datasets: [{
			data: [104, 28, 109, 46],
			backgroundColor: ['#98dfea', '#8f3985', '#07beb8', '#25283d']
		}]	
	}, 
	options: {
		scales: {
			xAxes: [{
				ticks: {
					beginAtZero: true
				}, 
				scaleLabel: {
          display: true,
          labelString: 'Sellers',
          fontSize: 14
        }
			}],
			yAxes: [{
				ticks: {
					beginAtZero: true
				},
				scaleLabel: {
					display: true,
					labelString: '# of Points',
					fontSize: 14
				}
			}]
		},
		legend: {
			display: false
		}
	}
});
//bar chart 2 starts here
var activities= ['Inbound Leads', 'Wing Womaning', 'Outreach', 'Conversations', 'Phone #s', 'Parties', 'Dates'];
var ctx = document.getElementById('myChart2');
var myChart2 = new Chart(ctx, {
	type: 'bar',
	data: { 	 	
		labels: activities,
		datasets: [{
			label: 'Becky',
			data: [0, 1, 3, 3, 1, 2, 3],
			backgroundColor:'#98dfea'
		},
		{
			label: 'Jessica',
			data: [0, 1, 1, 3, 0, 2, 0],
			backgroundColor:'#8f3985'
		},
		{
			label: 'JoVo',
			data: [3, 0, 2, 2, 0, 5, 3],
			backgroundColor:'#07beb8'
		},
		{
			label: 'Kelli',
			data: [0, 0, 0, 3, 3, 1, 1],
			backgroundColor:'#25283d'	
		}
		]	
	}, 
	options: {
		scales: {
			xAxes: [{
				ticks: {
					beginAtZero: true
				}, 
				scaleLabel: {
          display: true,
          labelString: 'Sellers',
          fontSize: 14
        }
			}],
			yAxes: [{
				ticks: {
					beginAtZero: true
				},
				scaleLabel: {
					display: true,
					labelString: '# of Actions',
					fontSize: 14
				}
			}]
		},
		legend: {
			display: true,
			position: 'bottom'
		}
	}
});
/*
//bar chart3 starts here
var ctx = document.getElementById('myChart3');
var myChart3 = new Chart(ctx, {
	type: 'bar',
	data: { 	 	
		labels: names,
		datasets: [{
			data: [13, 7, 15, 8],
			backgroundColor: ['#98dfea', '#8f3985', '#07beb8', '#25283d']
		}]	
	}, 
	options: {
		scales: {
			xAxes: [{
				ticks: {
					beginAtZero: true
				}, 
				scaleLabel: {
          display: true,
          labelString: 'Sellers',
          fontSize: 14
        }
			}],
			yAxes: [{
				ticks: {
					beginAtZero: true
				},
				scaleLabel: {
					display: true,
					labelString: 'Total # of Actions',
					fontSize: 14
				}
			}]
		},
		legend: {
			display: false
		}
	}
});
*/

};