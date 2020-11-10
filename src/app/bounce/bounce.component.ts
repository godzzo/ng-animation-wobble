import { Component } from '@angular/core';
import {
	trigger,
	state,
	style,
	animate,
	transition,
	keyframes,
} from '@angular/animations';

@Component({
	selector: 'app-bounce',
	templateUrl: './bounce.component.html',
	styleUrls: ['./bounce.component.scss'],

	animations: [
		trigger('animateArc', [
			state(
				'true',
				style({
					left: '400px',
					top: '200px',
				}),
			),
			state(
				'false',
				style({
					left: '0',
					top: '200px',
				}),
			),
			transition(
				'false => true',
				animate(
					'1000ms linear',
					keyframes([
						style({ left: '0', top: '200px', offset: 0 }),
						style({ left: '200px', top: '100px', offset: 0.5 }),
						style({ left: '400px', top: '200px', offset: 1 }),
					]),
				),
			),
			transition(
				'true => false',
				animate(
					'1000ms linear',
					keyframes([
						style({ left: '400px', top: '200px', offset: 0 }),
						style({ left: '200px', top: '100px', offset: 0.5 }),
						style({ left: '0', top: '200px', offset: 1 }),
					]),
				),
			),
		]),
	],
})
export class BounceComponent {
	arc: string = 'false';

	toggleBounce() {
		this.arc = this.arc === 'false' ? 'true' : 'false';
	}
}
