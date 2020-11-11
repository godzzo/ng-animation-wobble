import { Component } from '@angular/core';
import {
	trigger,
	state,
	style,
	animate,
	transition,
	keyframes,
} from '@angular/animations';

const animateArc = trigger('animateArc', [
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
				style({ left: '200px', top: '100px', offset: 0.75 }),
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
				style({ left: '200px', top: '100px', offset: 0.85 }),
				style({ left: '0', top: '200px', offset: 1 }),
			]),
		),
	),
]);

const speeding = trigger('animateArc', [
	state(
		'true',
		style({ backgroundColor: 'green', transform: 'translateX(300%)' }),
	),
	state(
		'false',
		style({ backgroundColor: 'red', transform: 'translateX(0%)' }),
	),
	transition(
		'false => true',
		animate(
			'2000ms linear',
			keyframes([
				style({ transform: 'translateX(0%)', offset: 0 }),
				style({ transform: 'translateX(120%)', offset: 0.65 }),
				style({ transform: 'translateX(150%)', offset: 0.75 }),
				style({ transform: 'translateX(300%)', offset: 1 }),
			]),
		),
	),
	transition(
		'true => false',
		animate(
			'1000ms linear',
			keyframes([
				style({ transform: 'translateX(300%)', offset: 0 }),
				style({ transform: 'translateX(150%)', offset: 0.65 }),
				style({ transform: 'translateX(120%)', offset: 0.75 }),
				style({ transform: 'translateX(0%)', offset: 1 }),
			]),
		),
	),
]);

const flipping = trigger('animateArc', [
	state('true', style({ backgroundColor: 'grey' })),
	state('false', style({ backgroundColor: 'red' })),
	transition(
		'true => false, false => true',
		animate(
			'800ms linear',
			keyframes([
				style({ transform: 'none', offset: 0 }),
				style({
					transform:
						'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)',
					offset: 0.15,
				}),
				style({
					transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)',
					offset: 0.3,
				}),
				style({
					transform:
						'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)',
					offset: 0.45,
				}),
				style({
					transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)',
					offset: 0.6,
				}),
				style({
					transform:
						'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)',
					offset: 0.75,
				}),
				style({ transform: 'none', offset: 1 }),
			]),
		),
	),
]);

@Component({
	selector: 'app-bounce',
	templateUrl: './bounce.component.html',
	styleUrls: ['./bounce.component.scss'],

	animations: [flipping],
})
export class BounceComponent {
	arc: string = 'false';

	toggleBounce() {
		this.arc = this.arc === 'false' ? 'true' : 'false';
	}
}
