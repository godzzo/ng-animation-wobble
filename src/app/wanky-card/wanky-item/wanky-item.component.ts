import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-wanky-item',
	templateUrl: './wanky-item.component.html',
	styleUrls: ['./wanky-item.component.scss'],
})
export class WankyItemComponent implements OnInit {
	questions = [
		{ value: null },
		{ value: null },
		{ value: null },
		{ value: null },
		{ value: null },
	];

	constructor() {}

	ngOnInit(): void {}
}
