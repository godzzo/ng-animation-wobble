import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BounceRoutingModule } from './bounce-routing.module';
import { BounceComponent } from './bounce.component';

@NgModule({
	declarations: [BounceComponent],
	imports: [CommonModule, BounceRoutingModule],
})
export class BounceModule {}
