import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-chartcard',
  templateUrl: './chartcard.component.html',
  styleUrls: ['./chartcard.component.css']
})
export class ChartcardComponent implements AfterViewInit {

  @ViewChild('d3chart') public d3chart: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    this.createLineChart();
  }

  public createLineChart(): void {
    const data = [];

    for( let i = 0; i < 20; i++ ){
      const num = d3.randomUniform(1, 50)();
      data.push(num);
    }

    d3.select(this.d3chart.nativeElement)
      .selectAll('div')
      .data(data)
      .enter()
      .append('div')
      .classed('bar', true)
      .style('height', d => d * 10 + 'px')
      .style('width', '32px')
      .style('display', 'inline-block')
      .style('background-color', '#7ED26D')
      .style('margin-left', '5px');
  }
}
