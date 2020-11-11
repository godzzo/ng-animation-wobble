import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarCircleComponent } from './star-circle/star-circle.component';
import { StarBarComponent } from './star-bar.component';

@NgModule({
	declarations: [StarCircleComponent, StarBarComponent],
	imports: [CommonModule],
	exports: [StarBarComponent],
})
export class StarBarModule {}
