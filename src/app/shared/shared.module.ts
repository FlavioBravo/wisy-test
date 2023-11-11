import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { TableComponent } from './components/table/table.component';

const SHARED_COMPONENTS = [LineChartComponent, TableComponent];

@NgModule({
  declarations: SHARED_COMPONENTS,
  exports: SHARED_COMPONENTS,
  imports: [CommonModule],
})
export class SharedModule {}
