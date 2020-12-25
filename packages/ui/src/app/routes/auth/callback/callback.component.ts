import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss'],
})
export class CallbackComponent implements OnInit {
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  async ngOnInit(): Promise<void> {
    const routeParams = this.route.snapshot.queryParamMap;
    console.log('route params', routeParams);

    if (routeParams.has('code')) {
      console.log('has code');
      // code flow
      const info = await this.httpClient
        .post(`${environment.apiUrl}/v1/auth/token`, {
          code: routeParams.get('code'),
        })
        .toPromise();
    }
  }
}
