import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasServiceService } from '../../services/graficas-service.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [];

public doughnutChartData: MultiDataSet = [];

  public doughnutChartType: ChartType = 'doughnut';

  colorsArr: Color[] = [
    {
      backgroundColor: ['#2BFDD3', '#E36B0B', '#B833FD', '#2D49E3', '#FA1263'],
    },
  ];

  constructor( 
    private gService: GraficasServiceService
  ) { }

  ngOnInit(): void {
    this.gService.getSocialMediaUSers().subscribe(
      (data) => {
        console.log(data);

        const labels = Object.keys(data);
        this.doughnutChartLabels = labels;

        const values = Object.values(data);
        this.doughnutChartData.push( values );
      }
    );
  }

}
