'use strict';

$(document).ready(function() {

	function generateData(baseval, count, yrange) {
		var i = 0;
		var series = [];
		while (i < count) {
			var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
			var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
			var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

			series.push([x, y, z]);
			baseval += 86400000;
			i++;
		}
		return series;
	}


	// Column chart
	var columnCtx = document.getElementById("sales_chart"),
	columnConfig = {
		colors: ['#F48EA8', '#85C555'],
		series: [
			{
			type: "column",
			data: [2.5, 2.8, 3.2, 1.0, 2.8, 2.25, 1.8, 2.25]
			},
			{
			type: "column",
			data: [3.8, 2.25, 4.1, 1.75, 2.1, 1.8, 3.4, 1.0]
			}
		],
		chart: {
			type: 'bar',
			fontFamily: 'Nunito, sans-serif',
			height: 450,
			toolbar: {
				show: false
			}
		},
		legend: {show: false},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '50%',
				endingShape: 'flat'
			},
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 2,
			colors: ['transparent']
		},
		xaxis: {
			categories: ['100', '200', '300', '400', '500', '600', '700', '800'],
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			y: {
				formatter: function (val) {
					return  val 
				}
			}
		}
	};
	var columnChart = new ApexCharts(columnCtx, columnConfig);
	columnChart.render();

	//Pie Chart
	var pieCtx = document.getElementById("invoice_chart"),
	pieConfig = {
		colors: ['#85C555', '#EE3036', '#0CAAE0'],
		series: [60, 15, 25],
		chart: {
			fontFamily: 'Nunito, sans-serif',
			height: 350,
			type: 'pie',
		},
		labels: ['Completed', 'Pending', 'Cancelled'],
		legend: {show: false},
		responsive: [{
			breakpoint: 400,
			options: {
				chart: {
					width: '100%',
					height: 250
				},
				legend: {
					position: 'bottom'
				}
			}
		}]
	};
	var pieChart = new ApexCharts(pieCtx, pieConfig);
	pieChart.render();
  
});