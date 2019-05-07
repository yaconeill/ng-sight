import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/LINE_CHART_COLORS';

const SAMPLE_LINECHART_DATA: any[] = [
  { data: [32, 14, 46, 23, 38, 56], label: 'Sentiment Analysis' },
  { data: [12, 18, 26, 13, 28, 26], label: 'Image Recognition' },
  { data: [52, 34, 49, 53, 68, 62], label: 'Forecasting' }
];

const SAMPLE_LINECHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  
  lineChartData: any[] = SAMPLE_LINECHART_DATA;
  lineChartLabels: string[] = SAMPLE_LINECHART_LABELS;
  lineChartType = 'line';
  lineChartLegend = true;
  lineChartColors = LINE_CHART_COLORS;
  lineChartOptions :any = {
    responsive: true
  };


  ngOnInit() {
  }

}
