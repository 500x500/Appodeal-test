import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {TuiNotification, TuiNotificationsService} from '@taiga-ui/core';

@Component({
  selector: 'app-token-form',
  templateUrl: './token-form.component.html',
  styleUrls: ['./token-form.component.css']
})
export class TokenFormComponent implements OnInit {
  constructor(
    private router: Router,
    private notificationService: TuiNotificationsService
  ) { }

  tokenControl: FormControl = new FormControl('', Validators.required)

  ngOnInit(): void {
  }
  // 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
  routeToLifeSearch(): void {
    if (this.tokenControl.valid) {
      localStorage.setItem('token', this.tokenControl.value);
      this.router.navigate(['../life-search']);
    } else {
    this.notificationService.show('Введите, пожалуйста, токен', {
      // label: 'Введите, пожалуйста, токен',
      status: TuiNotification.Error,
    })
      .subscribe();
    }
  }
}
