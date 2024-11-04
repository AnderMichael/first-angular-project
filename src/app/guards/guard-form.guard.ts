import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot,
} from '@angular/router';

// export const guardFormGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
//   return true;
// };

@Injectable({ providedIn: 'root' })
export class GuardForm implements CanDeactivate<any> {
  canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    console.log('COMPONENT: ', component);
    console.log('CURRENT ROUTE: ', currentRoute);
    console.log('CURRENT STATE: ', currentState);
    console.log('NEXT STATE: ', nextState);
    return confirm('Are you sure you want to leave this page?');
  }
}
