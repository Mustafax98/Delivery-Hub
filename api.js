const ctx = document.getElementById('dualBarChart').getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: '2024',
          data: [35, 25, 32, 50, 48, 30, 68, 78, 98, 38, 58, 28],
          backgroundColor: '#6366f1',
          borderRadius: 8,
          barThickness: 15,
        },
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: false,
          min: 0,
          max: 100,
          ticks: {
            color: '#888'
          },
          grid: {
            color: '#eee'
          }
        },
        x: {
          ticks: {
            color: '#888'
          },
          grid: {
            display: false
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            pointStyle: 'circle',
            color: '#555'
          },
          position: 'top',
          align: 'start'
        }
      }
    }
  });