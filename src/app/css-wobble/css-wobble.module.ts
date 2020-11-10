import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssWobbleRoutingModule } from './css-wobble-routing.module';
import { CssWobbleComponent } from './css-wobble.component';

@NgModule({
	declarations: [CssWobbleComponent],
	imports: [CommonModule, CssWobbleRoutingModule],
})
export class CssWobbleModule {}
