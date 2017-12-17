import { NgModule } from '@angular/core';
import { MisAvisosListComponent } from './mis-avisos-list/mis-avisos-list';
import { MisAvisosListRowComponent } from './mis-avisos-list-row/mis-avisos-list-row';
@NgModule({
	declarations: [MisAvisosListComponent,
    MisAvisosListRowComponent],
	imports: [],
	exports: [MisAvisosListComponent,
    MisAvisosListRowComponent]
})
export class ComponentsModule {}
