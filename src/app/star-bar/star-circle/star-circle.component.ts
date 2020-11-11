import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-star-circle',
	templateUrl: './star-circle.component.html',
	styleUrls: ['./star-circle.component.scss'],
	animations: [],
})
export class StarCircleComponent implements OnInit {
	@Input() data: any;

	constructor() {}

	ngOnInit(): void {}
}
