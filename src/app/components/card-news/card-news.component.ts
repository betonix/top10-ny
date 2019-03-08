import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../models/news.model';
@Component({
	selector: 'app-card-news',
	templateUrl: './card-news.component.html',
	styleUrls: ['./card-news.component.sass']
})
export class CardNewsComponent implements OnInit {
	@Input() news: News;

	constructor() {}

	ngOnInit() {}
}
