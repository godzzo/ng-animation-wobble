import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-css-wobble',
	templateUrl: './css-wobble.component.html',
	styleUrls: ['./css-wobble.component.scss'],
})
export class CssWobbleComponent implements OnInit {
	isPlaying = false;

	constructor() {}

	ngOnInit() {}

	onClick() {
		this.isPlaying = !this.isPlaying;
		console.log(this.isPlaying);
	}
}
