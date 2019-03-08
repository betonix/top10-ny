import { Injectable } from '@angular/core';
import { News } from '../models/news.model';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import * as moment from 'moment';

@Injectable({
	providedIn: 'root'
})
export class NewsService {
	private baseUrl =
		'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=CP7qFhbAzKX0lAV4A4Gr8hMB576JhLoe';

	constructor(private http: HttpClient) {}

	getNews(): Observable<News[]> {
		return this.http
			.get(this.baseUrl)
			.map((data: any[]) => data['results'].map(item => this.adapt(item)))
			.catch(err => Observable.throw(err.message));
	}

	adapt(item: any): News {
		const img_card = item.multimedia[3] ? item.multimedia[3].url : '';
		const img_detail = item.multimedia[4] ? item.multimedia[4].url : '';
		return new News(
			item.title,
			item.section,
			item.byline,
			moment(new Date(item.created_date)).fromNow(),
			item.abstract,
			img_card,
			img_detail
		);
	}
}
