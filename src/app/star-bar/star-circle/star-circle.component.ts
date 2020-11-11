import { shakingAnimation, flippingAnimation } from './../../util/animations';
import {
	Component,
	OnInit,
	Input,
	OnChanges,
	SimpleChanges,
} from '@angular/core';

@Component({
	selector: 'app-star-circle',
	templateUrl: './star-circle.component.html',
	styleUrls: ['./star-circle.component.scss'],
	animations: [shakingAnimation, flippingAnimation],
})
export class StarCircleComponent implements OnInit, OnChanges {
	@Input() value: number;

	flipping = false;
	shaking = false;

	constructor() {}

	ngOnInit(): void {}

	ngOnChanges(changes: SimpleChanges): void {
		const valueChange = changes.value;

		if (!valueChange.firstChange) {
			if (valueChange.currentValue > 0) {
				this.flipping = true;
			} else {
				this.shaking = true;
			}
		}
	}
}
