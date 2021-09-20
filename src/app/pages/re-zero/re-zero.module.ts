import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReZeroPageRoutingModule } from './re-zero-routing.module';

import { ReZeroPage } from './re-zero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReZeroPageRoutingModule
  ],
  declarations: [ReZeroPage]
})
export class ReZeroPageModule {}
