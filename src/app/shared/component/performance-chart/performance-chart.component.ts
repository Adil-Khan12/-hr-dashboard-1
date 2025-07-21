import { Component, Input, OnInit, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { Chart, registerables, ChartType } from 'chart.js/auto'; 
Chart.register(...registerables);

export interface ChartDataPoint {
  label: string;
  value: number;
}

@Component({
  selector: 'app-performance-chart',
  templateUrl: './performance-chart.component.html',
  styleUrls: ['./performance-chart.component.scss']
})
export class PerformanceChartComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() chartData: ChartDataPoint[] = [];
  @Input() chartTitle: string = 'Chart Title';
  @Input() chartType: ChartType = 'bar';
  @Input() yAxisLabel: string = 'Value';

  public chart: Chart | undefined;

  constructor() { }

  ngOnInit(): void {}
  ngAfterViewInit(): void {    
    if (this.chartData && this.chartData.length > 0) {
      this.createChart();
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chartData'] || changes['chartType'] || changes['chartTitle'] || changes['yAxisLabel']) {
      if (this.chartData && this.chartData.length > 0) {
        this.createChart();
      } else {
        if (this.chart) {
          this.chart.destroy();
          this.chart = undefined;
        }
      }
    }
  }

  private createChart(): void {
    if (this.chart) {
      this.chart.destroy();
    }

    const labels = this.chartData.map(d => d.label);
    const values = this.chartData.map(d => d.value);

    const backgroundColors = [
      'rgba(60, 179, 113, 0.6)' ,
      'rgba(255, 14, 14, 0.6)',   
      'rgba(255, 206, 86, 0.6)',   
      'rgba(54, 162, 235, 0.6)',   
      'rgba(75, 192, 192, 0.6)',   
      'rgba(153, 102, 255, 0.6)',  
      'rgba(255, 159, 64, 0.6)',   
      'rgba(201, 203, 207, 0.6)', 
      'rgba(100, 181, 246, 0.6)', 
      'rgba(255, 127, 80, 0.6)',   
         
    ];

    const borderColors = backgroundColors.map(color => color.replace('0.6', '1'));

    const ctx = document.getElementById('myChartCanvas') as HTMLCanvasElement;

    this.chart = new Chart(ctx, {
      type: this.chartType,
      data: {
        labels: labels,
        datasets: [{
          label: this.chartTitle,
          data: values,
          backgroundColor: backgroundColors.slice(0, labels.length),  
          borderColor: borderColors.slice(0, labels.length),
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, 
        plugins: {
          legend: {
            display: this.chartType !== 'pie' && this.chartType !== 'doughnut' ? true : true, 
            position: 'top',
          },
          title: {
            display: false,
            text: this.chartTitle,
            align: 'center'
          }
        },
        ...(this.chartType === 'bar' || this.chartType === 'line' ? {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: this.yAxisLabel,
                align: 'center' 
              },
              ticks: {
                precision: 0 
              }
            },
            x: {
              title: {
                display: true,
                text: 'Category',
                align: 'center' 
              }
            }
          }
        } : {}) 
      }
    });
  }
}