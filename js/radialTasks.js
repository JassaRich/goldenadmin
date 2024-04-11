var options = {
	chart: {
		height: 228,
		type: 'radialBar',
		toolbar: {
			show: false,
		},
		dropShadow: {
			enabled: true,
			opacity: 0.2,
			blur: 9,
			left: 10,
			top: 20
		},
	},
	plotOptions: {
		radialBar: {
			dataLabels: {
				name: {
					fontSize: '12px',
					fontColor: 'black',
          fontFamily: 'Open Sans, sans-serif',
				},
				value: {
					fontSize: '21px',
					fontFamily: 'Open Sans, sans-serif',
				},
				total: {
					show: true,
					label: 'Tasks',
					formatter: function (w) {
						// By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
						return '21'
					}
				}
			}
		}
	},
	series: [85, 60, 45],
	labels: ['New', 'Completed', 'Pending'],
	colors: ['#cd9d63', '#ad6c14', '#383737'],
}

var chart = new ApexCharts(
	document.querySelector("#radialTasks"),
	options
);
chart.render();