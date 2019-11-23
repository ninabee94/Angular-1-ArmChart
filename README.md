# Armchart

Using ArmChart to generate piechart & barchart, use bootstrap too

![alt text](https://user-images.githubusercontent.com/57636419/69479704-57602700-0e3b-11ea-9102-5a702644379b.JPG)

<b>1. Install Node and npm</b>

<b>2. Type in terminal : </b>
  
     npm install -g @angular/cli
     ng new my-app
     npm install --save @amcharts/amcharts4
     
<b>3. app.component.ts</b>
  
     import { Component, NgZone } from '@angular/core';
     import * as am4core from "@amcharts/amcharts4/core";
     import * as am4charts from "@amcharts/amcharts4/charts";
     import am4themes_animated from "@amcharts/amcharts4/themes/animated";
     am4core.useTheme(am4themes_animated);

     @Component({selector:'app-root', templateUrl: './app.component.html', styleUrls:['./app.component.scss']})

     export class AppComponent {
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
     

---------------------------------------------------------------------------------------------------------

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
