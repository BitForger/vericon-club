import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DiscordService } from '../../../services/discord/discord.service';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss'],
})
export class CallbackComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit(): Promise<void> {
    const routeParams = this.route.snapshot.queryParamMap;
    console.log('route params', routeParams);
    const routeParts: { [str: string]: any } = this.getParams();
    console.log('route parts', routeParts);
    await this.authService.isAuthorized(routeParts.access_token);
  }

  private getParams() {
    return location.href
      .split('#')
      .pop()
      .split('&')
      .map((value) => {
        const keyValue = value.split('=');
        if (keyValue[1].includes('+')) {
          keyValue[1] = keyValue[1].split('+').join(' ');
        }
        return { [keyValue[0]]: keyValue[1] };
      })
      .reduce((previousValue, currentValue) => ({
        ...previousValue,
        ...currentValue,
      }));
  }
}
