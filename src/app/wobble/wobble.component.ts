import { Component, OnInit } from '@angular/core';
import {
	animate,
	state,
	style,
	transition,
	trigger,
} from '@angular/animations';

const triggerChangeDivSize = trigger('changeDivSize', [
	state(
		'initial',
		style({
			backgroundColor: 'green',
			width: '100px',
			height: '100px',
		}),
	),
	state(
		'final',
		style({
			backgroundColor: 'red',
			width: '200px',
			height: '200px',
		}),
	),
	transition('initial=>final', animate('1500ms')),
	transition('final=>initial', animate('1000ms')),
]);

@Component({
	selector: 'app-wobble',
	templateUrl: './wobble.component.html',
	styleUrls: ['./wobble.component.scss'],
	animations: [triggerChangeDivSize],
})
export class WobbleComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
