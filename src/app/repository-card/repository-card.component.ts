import {Component, Input, OnInit} from '@angular/core';
import {Repository} from '../life-search/models';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-repository-card',
  templateUrl: './repository-card.component.html',
  styleUrls: ['./repository-card.component.css']
})
export class RepositoryCardComponent implements OnInit {
  constructor() { }
  @Input() repositoryData: Repository | undefined;

  date: string | null | undefined;

  ngOnInit(): void {
  }
}
