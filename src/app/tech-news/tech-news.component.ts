import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {
  news$: Subscription;
  erro: string;
  retorno: string;
  topHeadlinesData: any[] = [];
  constructor( private newsApi: NewsapiService) { }
  ngOnDestroy(): void {
    this.news$.unsubscribe();
  }

  ngOnInit(): void {
    this.news$ = this.newsApi.topHeadlinesTech().subscribe(retorno =>{
      this.retorno = JSON.stringify(retorno);
      this.topHeadlinesData = retorno.articles;
    }, erro=>{
      this.erro = JSON.stringify(erro)
    });
  }
}
