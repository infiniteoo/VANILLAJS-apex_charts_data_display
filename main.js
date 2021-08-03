// chart options
const options = {
  chart: {
    height: 450,
    width: "100%",
    type: "bar",
    background: "#f4f4f4",
    foreColor: "#333",
  },
  series: [
    {
      name: "Population",
      data: [
        8550405, 3971883, 2720546, 2296224, 1567442, 1563025, 1469845, 1394928,
        1300092, 1026908,
      ],
    },
  ],
};

// init chart
const chart = new ApexCharts(document.querySelector("#chart"), options);
// render chart
chart.render();
