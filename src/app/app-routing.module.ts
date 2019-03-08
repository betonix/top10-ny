import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { DetailNewsComponent } from '../app/pages/detail-news/detail-news.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'detail', component: DetailNewsComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
