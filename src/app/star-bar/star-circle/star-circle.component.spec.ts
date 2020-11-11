import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarCircleComponent } from './star-circle.component';

describe('StarCircleComponent', () => {
	let component: StarCircleComponent;
	let fixture: ComponentFixture<StarCircleComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [StarCircleComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(StarCircleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
