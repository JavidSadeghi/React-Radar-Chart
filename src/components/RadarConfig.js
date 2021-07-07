export const getChartData = (canvas) => {
  const ctx = canvas.getContext("2d");

  const x = canvas.height * 0.65;
  const y = canvas.width * 0.25;
  const outerRadius = canvas.width / 3.2;

  const x1 = x * 1.49;
  const y1 = y * 0.87;

  const gradient = ctx.createRadialGradient(x, y, outerRadius, x1, y1, 1);
  // gradient.addColorStop(0, "#b8c91f");

  return {
    labels: [
      "VALUE",
      "FUTURE",
      "PAST",
      "HEALTH",
      "DEVIDEND"
    ],
    datasets: [
      {
        label: "Financial",
        borderWidth: 0.5,
        backgroundColor: "rgba(184, 201, 31, 0.4)",
        borderColor: "#88b915",
        lineTension: 0.4,
        pointRadius: 2,
        data: [60, 60, 80, 91, 70]
      },
      {
        label: "Productivity",
        borderWidth: 0.5,
        backgroundColor: "rgba(34, 202, 236, .2)",
        borderColor: "#0a66c2",
        lineTension: 0.4,
        pointRadius: 2,
        data: [75, 50, 60, 40, 90]
      }
    ]
  };
};

export const options = {
  responsive: true,
  maintainAspectRatio: true,
  layout: {
    beginAtZero: true,
    padding: {
      right: 35,
      bottom: 60
    }
  },
  scales: {
    r: {
      grid: {
        circular: true,
      }
    }
  },
  elements: {
    line: {
      borderWidth: 3
    }
  }
};