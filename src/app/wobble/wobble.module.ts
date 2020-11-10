import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WobbleRoutingModule } from './wobble-routing.module';
import { WobbleComponent } from './wobble.component';

@NgModule({
	declarations: [WobbleComponent],
	imports: [CommonModule, WobbleRoutingModule],
})
export class WobbleModule {}
