import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MisavisosPage } from './misavisos';

@NgModule({
  declarations: [
    MisavisosPage,
  ],
  imports: [
    IonicPageModule.forChild(MisavisosPage),
  ],
})
export class MisavisosPageModule {}
