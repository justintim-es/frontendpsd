import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { IDispatch } from 'src/app/redux/aschac';
import { IOnboardCompleteFetch, IOnboardCompleteFetchError, RDX_ONBOARD_COMPLETE_FETCH } from 'src/app/redux/onboard-complete/actions';
import { getOnboardCompleteFetchError, getOnboardCompleteIsFetch, getOnboardCompleteIsFetchError, getOnboardCompleteIsFetchSuccess } from 'src/app/redux/onboard-complete/selectors';

@Component({
  selector: 'app-onboard-complete',
  templateUrl: './onboard-complete.component.html',
  styleUrls: ['./onboard-complete.component.css']
})
export class OnboardCompleteComponent implements OnDestroy {
  isFetch: Observable<boolean>;
  isFetchSuccess: SubscriptionLike;
  isFetchError: Observable<boolean>;
  fetchError: Observable<IOnboardCompleteFetchError>;
  route: SubscriptionLike;
  constructor(
    private store: Store,
    private ar: ActivatedRoute,
    private router: Router
  ) {
    this.isFetch = this.store.select(getOnboardCompleteIsFetch);
    this.isFetchSuccess = this.store.select(getOnboardCompleteIsFetchSuccess).subscribe(res => {
      if (res) this.router.navigate(['/login']);
    });
    this.isFetchError = this.store.select(getOnboardCompleteIsFetchError);
    this.fetchError = this.store.select(getOnboardCompleteFetchError);
    this.route = this.ar.paramMap.subscribe(res => {
      this.store.dispatch<IDispatch<IOnboardCompleteFetch>>({
        type: RDX_ONBOARD_COMPLETE_FETCH,
        payload: {
          id: res.get('id')!,
          token: res.get('token')!
        }
      })
    })
  }
  ngOnDestroy(): void {
    this.route.unsubscribe();
  }
}
