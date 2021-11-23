import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent implements OnInit {
  public doughnutChartLabels: Label[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
    'Others'
  ];

  public doughnutChartData: MultiDataSet = [[30, 50, 20, 40]];

  public doughnutChartType: ChartType = 'doughnut';

  colorsArr: Color[] = [
    {
      backgroundColor: ['#2BFDD3', '#E36B0B', '#B833FD', '#2D49E3', '#FA1263'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
