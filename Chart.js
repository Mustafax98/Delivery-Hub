// بيانات وهمية كمثال
const chartData = {
  2022: {
    Income: [20, 18, 25, 30, 28, 24, 40, 55, 60, 35, 45, 20],
    Expenses: [10, 12, 15, 20, 22, 18, 25, 35, 40, 20, 28, 15],
    Profit: [10, 6, 10, 10, 6, 6, 15, 20, 20, 15, 17, 5]
  },
  2023: {
    Income: [28, 22, 30, 35, 34, 27, 50, 65, 75, 32, 50, 25],
    Expenses: [15, 10, 18, 25, 22, 15, 30, 35, 40, 18, 25, 15],
    Profit: [13, 12, 12, 10, 12, 12, 20, 30, 35, 14, 25, 10]
  },
  2024: {
    Income: [35, 25, 32, 50, 48, 30, 68, 78, 98, 38, 58, 28],
    Expenses: [20, 18, 20, 30, 25, 20, 40, 50, 60, 28, 35, 20],
    Profit: [15, 7, 12, 20, 23, 10, 28, 28, 38, 10, 23, 8]
  },
  2025: {
    Income: [40, 30, 35, 55, 60, 35, 75, 85, 105, 45, 65, 30],
    Expenses: [25, 20, 22, 35, 32, 22, 45, 55, 65, 32, 40, 22],
    Profit: [15, 10, 13, 20, 28, 13, 30, 30, 40, 13, 25, 8]
  }
};

const yearSelect = document.getElementById('year-select');
const chartButtons = document.querySelectorAll('.chart-btn');
const chartCanvas = document.getElementById('dualBarChart');
let currentYear = yearSelect.value;
let activeMetrics = [];  // تخزين المقياس النشط (مثل Income, Expenses, Profit)

// مرجع للرسم البياني
let chart = new Chart(chartCanvas.getContext('2d'), {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: []
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
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

// تحديث البيانات عند تغيير السنة
yearSelect.addEventListener('change', function () {
  currentYear = this.value;
  updateChart();
});

// إدارة الأزرار في حالة on/off
chartButtons.forEach(button => {
  button.addEventListener('click', function () {
    // إذا كان الزر النشط واتضغط عليه مرة تانية
    if (this.classList.contains('active')) {
      this.classList.remove('active');
      activeMetrics = activeMetrics.filter(metric => metric !== this.textContent);
    } else {
      this.classList.add('active');
      activeMetrics.push(this.textContent);
    }

    // تحديث الرسم البياني بناءً على الأزرار النشطة
    updateChart();
  });
});

// دالة لتحديث الرسم البياني بناءً على الأزرار النشطة
function updateChart() {
  // إخفاء الرسم البياني إذا كانت جميع الأزرار غير نشطة
  if (activeMetrics.length === 0) {
    chartCanvas.style.display = 'none';
    return;
  } else {
    chartCanvas.style.display = 'block';
  }

  // إعادة تعيين البيانات
  chart.data.datasets = [];

  // إضافة البيانات بناءً على الأزرار النشطة
  activeMetrics.forEach((metric, index) => {
    chart.data.datasets.push({
      label: metric,
      data: chartData[currentYear][metric],
      backgroundColor: getBackgroundColor(metric, index),
      borderRadius: 8,
      barThickness: 15
    });
  });

  chart.update();
}

// دالة لتحديد اللون بناءً على المقياس
function getBackgroundColor(metric, index) {
  const colors = ['#6366f1', '#ef4444', '#10b981'];
  return colors[index % colors.length];  // تخصيص ألوان لكل مقياس
}
