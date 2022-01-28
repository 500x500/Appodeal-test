import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime, switchMap} from 'rxjs';
import {LifeSearchService} from './life-search.service';

@Component({
  selector: 'app-life-search',
  templateUrl: './life-search.component.html',
  styleUrls: ['./life-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifeSearchComponent implements OnInit {
  constructor(
    private lifeSearchService: LifeSearchService
  ) { }

  searchControl: FormControl = new FormControl('');

  ngOnInit(): void {
    this.getDataFromSearch();
  }

  getDataFromSearch(): void {
   this.searchControl.valueChanges.pipe(
     debounceTime(300),
     switchMap((str: string) => {
       return this.lifeSearchService.getRepository(str);
     })
   ).subscribe(data => {
     console.log(data);
   });
  }
}
