import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series: Array<Serie>=[];
  constructor(private serieService:SerieService) { }


  getSeries(){
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });
  }

  ngOnInit() {
    this.getSeries();
    this.getAvgSeasons();
  }

  avgSeasons:number=0;

  getAvgSeasons(){
    for (let serie of this.series) {
      this.avgSeasons+=serie.seasons;
    }
    this.avgSeasons=this.avgSeasons/this.series.length;
  }

}
