import { Component, Input } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent {

  @Input({ required: true }) ObjectData!: any;
  chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'line', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: this.ObjectData.periods.map((data:any) => data.name),
        datasets: [
          {
            label: 'Temperature',
            data: this.ObjectData.periods.map((data:any) => data.temperature),
            backgroundColor: 'rgb(75, 192, 192)',
          },
        ],
      }
    });
  }
}
