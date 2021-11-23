import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;

  barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };

  @Input() barChartLabels: Label[] = [
    /*'2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',*/
  ];

  barChartType: ChartType = 'bar';
  barChartLegend = true;

  @Input() barChartData: ChartDataSets[] = [
    /*{
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Series A',
      backgroundColor: '#9426FD',
      hoverBackgroundColor: 'red',
    },
    {
      data: [28, 48, 40, 19, 86, 27, 90],
      label: 'Series B',
      backgroundColor: '#5022E3',
      hoverBackgroundColor: 'red',
    },
    {
      data: [18, 58, 60, 29, 96, 37, 80],
      label: 'Series C',
      backgroundColor: '#269EFD',
      hoverBackgroundColor: 'red',
    },*/
  ];

  constructor() { }

  ngOnInit(): void {
    if(this.horizontal){
      this.barChartType = 'horizontalBar';
    }
  }

  randomize(): void {
    // Only Change 3 values
    this.barChartData.forEach((e) => {
      e.data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
      ];
    });
  }

}
