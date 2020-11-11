import { shakingAnimation, flippingAnimation } from './../../util/animations';
import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-star-circle',
	templateUrl: './star-circle.component.html',
	styleUrls: ['./star-circle.component.scss'],
	animations: [shakingAnimation, flippingAnimation],
})
export class StarCircleComponent implements OnInit {
	@Input() data: any;

	flipping = false;
	shaking = false;

	constructor() {}

	ngOnInit(): void {}
}
