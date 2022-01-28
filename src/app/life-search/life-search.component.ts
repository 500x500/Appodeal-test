import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime, Observable, switchMap, takeUntil} from 'rxjs';
import {LifeSearchService} from './life-search.service';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {Repository} from './models';

@Component({
  selector: 'app-life-search',
  templateUrl: './life-search.component.html',
  styleUrls: ['./life-search.component.css'],
  providers: [TuiDestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifeSearchComponent implements OnInit{
  constructor(
    private lifeSearchService: LifeSearchService,
    private destroy$: TuiDestroyService,
  ) { }

  searchControl: FormControl = new FormControl('');

  repositories$: Observable<Repository[]> | undefined;

  ngOnInit(): void {
    this.getDataFromSearch();
  }

  getDataFromSearch(): void {
    this.repositories$ = this.searchControl.valueChanges.pipe(
     debounceTime(300),
     switchMap((str: string) => {
       return this.lifeSearchService.getRepository(str);
     }),
     takeUntil(this.destroy$),
   );
  }
}
