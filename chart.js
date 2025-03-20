// Growth Chart
const ctx = document.getElementById('growthChart').getContext('2d');
const growthChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Day 0', 'Day 30', 'Day 60', 'Day 90'],
        datasets: [{
            label: 'Your Money ($)',
            data: [20, 200, 2000, 20000],
            borderColor: '#0f0',
            backgroundColor: 'rgba(0, 255, 0, 0.3)',
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                type: 'logarithmic',
                ticks: {
                    callback: function(value) {
                        return '$' + value;
                    }
                }
            }
        },
        plugins: {
            legend: { display: true },
            tooltip: { backgroundColor: '#00ccff' }
        }
    }
});
