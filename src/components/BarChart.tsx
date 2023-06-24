import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const barData = [
  { label: 'JAN', data: 24 },
  { label: 'FEB', data: 48 },
  { label: 'MAR', data: 65 },
  { label: 'APR', data: 30 },
  { label: 'MAY', data: 60 },
  { label: 'JUN', data: 77 },
  { label: 'JUL', data: 50 },
  { label: 'AUG', data: 80 },
  { label: 'SEP', data: 55 },
  { label: 'OCT', data: 70 },
  { label: 'NOV', data: 20 },
  { label: 'DEC', data: 55 },
];

const BarChart = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d') as any;
    const myBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: barData.map(item => item.label),
        datasets: [
          {
            backgroundColor: '#7C99E2',
            barThickness: 25,
            data: barData.map(item => item.data),
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            min: 0,
            max: 100,
            grid: {
              color: '#1A202C',
            },
            ticks: {
              color: '#8A8A8A',
              font: {
                size: 16,
                weight: '500',
                lineHeight: '100%',
              },
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: '#8A8A8A',
              font: {
                size: 16,
                weight: '500',
                lineHeight: '100%',
              },
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        events: [],
      },
    });

    return () => {
      myBarChart.destroy();
    };
  }, [canvasRef]);

  return (
    <div className="card w-full">
      <p className='title mb-8'>Session Activity</p>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default BarChart;
