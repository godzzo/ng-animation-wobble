import { WankyItemComponent } from './wanky-item/wanky-item.component';
import { StarBarModule } from '@app/star-bar/star-bar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WankyCardRoutingModule } from './wanky-card-routing.module';
import { WankyCardComponent } from './wanky-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [WankyCardComponent, WankyItemComponent],
	imports: [CommonModule, WankyCardRoutingModule, StarBarModule, FormsModule],
})
export class WankyCardModule {}
