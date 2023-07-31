import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { IDispatch } from 'src/app/redux/aschac';
import { IOnboardFetch, RDX_ONBOARD_FETCH } from 'src/app/redux/onboard/actions';
import { getOnboardFetchError, getOnboardIsFetch, getOnboardIsFetchError, getOnboardIsFetchSuccess, getOnboardUrl } from 'src/app/redux/onboard/selectors';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.css']
})
export class OnboardComponent implements OnDestroy {
  route: SubscriptionLike;
  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  url: Observable<string>;
  isFetchError: Observable<boolean>;
  fetchError: Observable<any>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) {
    this.route = this.activatedRoute.paramMap.subscribe(res => {
      this.store.dispatch<IDispatch<IOnboardFetch>>({
        type: RDX_ONBOARD_FETCH,
        payload: {
          id: res.get('id')!,
          token: res.get('token')!
        }
      })
    });
    this.isFetch = this.store.select(getOnboardIsFetch);
    this.isFetchSuccess = this.store.select(getOnboardIsFetchSuccess);
    this.url = this.store.select(getOnboardUrl);
    this.isFetchError = this.store.select(getOnboardIsFetchError);
    this.fetchError = this.store.select(getOnboardFetchError);
  }
  ngOnDestroy(): void {
    this.route.unsubscribe();
  }
}
