import { Component, NgZone } from '@angular/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'armchart';
  donutvalue : any =[ {name:"one",value:1000}, {name:"two",value:2000}, {name:"three",value:3000}, {name:"four",value:4000} ];
  xyvalue : any = [ {name:"one",value:1000}, {name:"two",value:2000}, {name:"three",value:3000}, {name:"four",value:4000} ];

  constructor( private zone: NgZone ){ }

  ngAfterViewInit(){ this.donutcharts(); this.xycharts(); }

  donutcharts() {
    this.zone.runOutsideAngular(() => {
      let piechart = am4core.create("piechart", am4charts.PieChart);
      piechart.data = this.donutvalue; 
      piechart.innerRadius = am4core.percent(40);
      let pieSeries = piechart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "value";
      pieSeries.dataFields.category = "name";
      pieSeries.slices.template.stroke = am4core.color("#fff");
    });
  }

  xycharts() {
    this.zone.runOutsideAngular(() => {
      var xychart = am4core.create("xychart", am4charts.XYChart);
      xychart.data = this.xyvalue;           
      var categoryAxis = xychart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "name";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 30;    
      var valueAxis = xychart.yAxes.push(new am4charts.ValueAxis());
      var series = xychart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = "value";
      series.dataFields.categoryX = "name";
    });
  }

}
