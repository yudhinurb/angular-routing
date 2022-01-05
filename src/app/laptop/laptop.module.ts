import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop.component';
import { AsusComponent } from './asus/asus.component';
import { DellComponent } from './dell/dell.component';
import { HpComponent } from './hp/hp.component';
import { MacComponent } from './mac/mac.component';
import { LenovoComponent } from './lenovo/lenovo.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LaptopComponent,
    children: [
      {
        path: 'asus',
        component: AsusComponent,
      },
      {
        path: 'dell',
        component: DellComponent,
      },
      {
        path: 'hp',
        component: HpComponent,
      },
      {
        path: 'mac',
        component: MacComponent,
      },
      {
        path: 'lenovo',
        component: LenovoComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    LaptopComponent,
    AsusComponent,
    DellComponent,
    HpComponent,
    MacComponent,
    LenovoComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LaptopModule {}
