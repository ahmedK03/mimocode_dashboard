$(document).ready(function() {
    $('.sideMenuToggler').click(() => {
        $('.wrapper').toggleClass('active')
    })
})

// chart js 

// chart 1
const xValues_chart1 = ["Italy", "France", "Spain", "USA", "Argentina"];
const yValues_chart1 = [50, 49, 49, 24, 15];
const barColors_chart1 = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
];
new Chart("myChart1", {
    type: "pie",
    data: {
        labels: xValues_chart1,
        datasets: [{
            backgroundColor: barColors_chart1,
            data: yValues_chart1
        }]
    },
    options: {
        title: {
            display: true,
            text: "Record"
        }
    }
});

// chart 2
const xValues_chart2 = ["Prod 1", "Prod 2", "Prod 3", "Prod 4", "Prod 5"];
const yValues_chart2 = [55, 49, 44, 24, 20];
const barColors_chart2 = ["red", "green", "blue", "orange", "brown"];

new Chart("myChart2", {
    type: "bar",
    data: {
        labels: xValues_chart2,
        datasets: [{
            backgroundColor: barColors_chart2,
            data: yValues_chart2
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "Sales Record"
        },
        scales: {
            yAxes: [{ ticks: { min: 10, max: 90 } }]
        }

    }
});

// chart 3
const monthNames_chart3 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const yValues_chart3 = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15, 17];

new Chart("myChart3", {
    type: "line",
    data: {
        labels: monthNames_chart3,
        datasets: [{
            fill: false,
            lineTension: 0,
            backgroundColor: "transparent",
            borderColor: "#bbf",
            data: yValues_chart3
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "Month Review"
        },
        scales: {
            yAxes: [{ ticks: { min: 5, max: 20 } }],
        }
    }
});