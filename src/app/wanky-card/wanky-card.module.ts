import { StarBarModule } from '@app/star-bar/star-bar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WankyCardRoutingModule } from './wanky-card-routing.module';
import { WankyCardComponent } from './wanky-card.component';

@NgModule({
	declarations: [WankyCardComponent],
	imports: [CommonModule, WankyCardRoutingModule, StarBarModule],
})
export class WankyCardModule {}
