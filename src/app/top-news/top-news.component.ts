import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit, OnDestroy {
  news$: Subscription;
  erro: string;
  retorno: string;
  topHeadlinesData: any[] = [];
  constructor( private newsApi: NewsapiService) { }
  ngOnDestroy(): void {
    this.news$.unsubscribe();
  }

  ngOnInit(): void {
    this.news$ = this.newsApi.topHeadlines().subscribe(retorno =>{
      this.retorno = JSON.stringify(retorno);
      this.topHeadlinesData = retorno.articles;
    }, erro=>{
      this.erro = JSON.stringify(erro)
    });
  }

}
