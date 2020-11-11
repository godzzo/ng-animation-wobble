import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-star-bar',
	templateUrl: './star-bar.component.html',
	styleUrls: ['./star-bar.component.scss'],
})
export class StarBarComponent implements OnInit {
	@Input() set stars(times: number) {
		const newStars = [];

		for (let i = 0; i < times; i++) {
			newStars.push({ ...this.empty });
		}

		this._stars = newStars;
	}

	_stars: any[] = [];

	empty = { rank: null };

	constructor() {}

	ngOnInit(): void {}
}
