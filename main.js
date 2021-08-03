// chart options
const options = {
    chart: {
        height: 450,
        width: '100%',
        type: 'bar',
        background: '#f4f4f4',
        foreColor: '#333'
    },
    
};

// init chart
const chart = new ApexCharts(document.querySelector("#chart"), options);
// render chart
chart.render();
