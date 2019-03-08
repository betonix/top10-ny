import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { News } from '../../models/news.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
	private news: News[] = [];

	constructor(private NewsService: NewsService, private Router: Router) {}

	ngOnInit() {
		this.NewsService.getNews().subscribe((res: News[]) => {
			this.news = res;
		});
	}

	openDetail(news: News) {
		localStorage.setItem('news', JSON.stringify(news));
		this.Router.navigateByUrl('detail');
	}
}
