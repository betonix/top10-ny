import { Component, OnInit } from '@angular/core';
import { News } from '../../models/news.model';
@Component({
	selector: 'app-detail-news',
	templateUrl: './detail-news.component.html',
	styleUrls: ['./detail-news.component.sass']
})
export class DetailNewsComponent implements OnInit {
	private news: News;
	constructor() {}

	ngOnInit() {
		this.news = JSON.parse(localStorage.getItem('news'));
	}
}
